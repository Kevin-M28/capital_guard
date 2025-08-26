'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ShieldOff } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[color:var(--background)] px-4 text-[color:var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-4"
      >
        <ShieldOff className="mb-2 h-16 w-16 text-[color:var(--primary)]" />
        <h1 className="text-4xl font-bold">Página no encontrada</h1>
        <p className="max-w-md text-center text-lg text-[color:var(--muted-foreground)]">
          Lo sentimos, la página que buscas no existe o fue movida. Si crees que esto es un error,
          contáctanos.
        </p>
        <Link href="/">
          <button className="mt-4 rounded bg-[color:var(--primary)] px-6 py-3 text-lg font-semibold text-[color:var(--primary-foreground)] shadow transition-colors hover:bg-[color:var(--accent)]">
            Volver al inicio
          </button>
        </Link>
      </motion.div>
    </section>
  );
}