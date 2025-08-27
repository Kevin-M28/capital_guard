'use client';

import { motion } from 'motion/react';
import { useTheme } from '@/contexts/themeContext';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function HeroPrincipal() {
  const { theme } = useTheme();
  const images = ['/bn1.jpg', '/bn2.jpg'];
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos
    return () => clearInterval(interval);
  });

  return (
    <motion.section
      style={{
        backgroundImage: `url(${images[bgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className={
        'relative flex h-[50vh] w-full items-center justify-center overflow-hidden bg-[color:var(--background)] p-0'
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
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
