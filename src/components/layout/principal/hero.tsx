'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import clsx from 'clsx';
import { ShieldCheck, Cctv, HatGlasses } from 'lucide-react';

export default function HeroPrincipal() {
  const { theme } = useTheme();

  return (
    <motion.section
      className=
        'relative flex h-screen w-screen items-center justify-center overflow-hidden p-0 bg-[color:var(--background)]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Íconos decorativos Lucide */}
      <ShieldCheck className="pointer-events-none absolute top-10 left-10 z-0 h-32 w-32 text-[color:var(--accent)] opacity-20" />
      <Cctv className="pointer-events-none absolute right-4 bottom-24 z-0 h-40 w-40 text-[color:var(--primary)] opacity-20" />
      <HatGlasses className="pointer-events-none absolute top-1/6 right-1/12 z-0 h-24 w-24 text-[color:var(--secondary)] opacity-20" />
      <HatGlasses className="pointer-events-none absolute top-1/2 left-1/6 z-0 h-24 w-24 text-[color:var(--secondary)] opacity-20" />
      <motion.div
        className="relative z-20 mx-auto max-w-4xl rounded-lg bg-[color:var(--card)]/80 p-8 text-center text-[color:var(--card-foreground)] shadow-xl backdrop-blur-sm"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        {/* Título principal con animación staggered */}
        <motion.h1
          className="mb-6 text-5xl leading-tight font-bold md:text-7xl"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.span
            className={clsx(
              'inline-block',
              theme === 'dark' ? 'text-[color:var(--secondary)]' : 'text-[color:var(--accent)]'
            )}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Bienvenido a
          </motion.span>
          <br />
          <motion.img
            src={theme === 'dark' ? '/logowhite.webp' : '/logoblack.webp'}
            alt="Logo Capital Guard"
            className="mx-auto mb-8 h-16 w-auto justify-center"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.h1>
        {/* Subtítulo */}
        <motion.p
          className={clsx(
            'mb-8 text-xl md:text-2xl',
            theme === 'dark' ? 'text-[color:var(--secondary)]' : 'text-[color:var(--primary)]'
          )}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Tu seguridad, nuestra prioridad.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
