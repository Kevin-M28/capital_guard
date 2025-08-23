'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import clsx from 'clsx';

export default function HeroPrincipal() {
  const { theme } = useTheme();

  return (
    <motion.section
      className= 'relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[color:var(--background)]'
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background gradient */}
      <motion.div
        className={clsx(
          'absolute inset-0 opacity-80',
          theme === 'dark'
            ? 'bg-gradient-to-br from-[color:var(--accent)] via-[color:var(--background)] to-[color:var(--primary)]'
            : 'bg-gradient-to-br from-[color:var(--secondary)] via-[color:var(--background)] to-[color:var(--accent)]/30'
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className=
          'relative z-20 mx-auto max-w-4xl rounded-lg p-8 text-center shadow-xl backdrop-blur-sm bg-[color:var(--card)]/80 text-[color:var(--card-foreground)]'
     
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
