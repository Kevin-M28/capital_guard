'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';

export default function Error({ reset }: { reset?: () => void }) {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-[color:var(--background)] px-4 text-[color:var(--foreground)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-4"
      >
        <AlertTriangle className="mb-2 h-16 w-16 text-[color:var(--primary)]" />
        <h1 className="text-4xl font-bold">¡Ups! Ocurrió un error</h1>
        <p className="max-w-md text-center text-lg text-[color:var(--muted-foreground)]">
          Algo salió mal. Por favor, intenta de nuevo o vuelve al inicio.
        </p>
        <div className="mt-4 flex gap-4">
          {reset && (
            <button
              onClick={() => reset()}
              className="rounded bg-[color:var(--primary)] px-6 py-3 text-lg font-semibold text-[color:var(--primary-foreground)] shadow transition-colors hover:bg-[color:var(--accent)]"
            >
              Reintentar
            </button>
          )}
          <Link href="/">
            <button className="rounded border border-[color:var(--primary)] bg-transparent px-6 py-3 text-lg font-semibold text-[color:var(--primary)] transition-colors hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)]">
              Volver al inicio
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
