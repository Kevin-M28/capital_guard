'use client';

import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, UserPlus, ShoppingCart, Star } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CallToActions() {
  const blocks = [
    {
      key: 'about',
      icon: <Star className="mr-2 inline-block text-[color:var(--primary)]" />,
      title: '¿Quieres saber más de nosotros?',
      content: (
        <>
          <p className="mb-6 text-center text-lg md:text-xl">
            Somos líderes en soluciones de seguridad y protección para negocios y hogares. Descubre
            cómo Capital Guard puede ayudarte a vivir más tranquilo.
          </p>
          <div className="flex justify-center">
            <Link href="/about">
              <Button className="rounded bg-[color:var(--primary)] px-6 py-3 text-lg font-semibold text-[color:var(--primary-foreground)] shadow transition-colors hover:bg-[color:var(--accent)]">
                Conócenos
              </Button>
            </Link>
          </div>
        </>
      ),
    },
    {
      key: 'facts',
      icon: <ShieldCheck className="mr-2 inline-block text-[color:var(--primary)]" />,
      title: '¿Sabías que...? ',
      content: (
        <>
          <ul className="mb-6 list-inside space-y-2 text-center text-lg md:text-xl">
            <li>
              Más del <span className="font-semibold text-[color:var(--primary)]">60%</span> de los
              robos a negocios ocurren fuera del horario laboral.
            </li>
            <li>
              Un sistema de seguridad reduce el riesgo de pérdidas hasta en un{' '}
              <span className="font-semibold text-[color:var(--primary)]">80%</span>.
            </li>
            <li>La prevención es la mejor inversión para tu tranquilidad y la de tu familia.</li>
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/store/register">
              <Button className="flex items-center gap-2 rounded-lg bg-[color:var(--primary)] px-7 py-3 text-lg font-semibold text-[color:var(--primary-foreground)] shadow-lg transition-colors hover:bg-[color:var(--accent)] focus:ring-2 focus:ring-[color:var(--primary)] focus:outline-none">
                <UserPlus className="size-5" />
                Crear cuenta
              </Button>
            </Link>
            <Link href="/store">
              <Button className="flex items-center gap-2 rounded-lg border-2 border-[color:var(--primary)] bg-transparent px-7 py-3 text-lg font-semibold text-[color:var(--primary)] shadow-lg transition-colors hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] focus:ring-2 focus:ring-[color:var(--primary)] focus:outline-none">
                <ShoppingCart className="size-5" />
                Ver productos
              </Button>
            </Link>
          </div>
        </>
      ),
    },
    {
      key: 'brand',
      icon: <Star className="mr-2 inline-block text-[color:var(--primary)]" />,
      title: 'Marca patrocinada',
      content: (
        <>
          <p className="mb-6 text-center text-lg md:text-xl">
            Conoce nuestra marca aliada{' '}
            <span className="font-semibold text-[color:var(--primary)]">Bolide</span>, tecnología de
            punta para tu seguridad.
          </p>
          <div className="flex justify-center">
            <Link href="/brand" rel="noopener noreferrer">
              <Button className="rounded border border-[color:var(--primary)] bg-transparent px-6 py-3 text-lg font-semibold text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)]">
                Más sobre Bolide
              </Button>
            </Link>
          </div>
        </>
      ),
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % blocks.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [blocks.length]);

  return (
    <section className="relative flex min-h-[40vh] w-full flex-col items-center justify-center overflow-hidden via-[color:var(--primary)/10] to-[color:var(--card)] px-2 py-16 text-[color:var(--card-foreground)]">
      <AnimatePresence mode="wait">
        <motion.div
          key={blocks[index].key}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.7 }}
          className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-6"
        >
          <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-extrabold tracking-tight md:text-4xl">
            {blocks[index].icon}
            {blocks[index].title}
          </h2>
          <div className="flex w-full flex-col items-center justify-center text-center text-base md:text-xl">
            {blocks[index].content}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
