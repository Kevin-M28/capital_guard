'use client';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function FooterPrincipal() {
  return (
    <footer className="mt-8 w-full">
      <Separator className="my-4" />
      <div className="px-4 pb-2 text-center text-sm text-[color:var(--foreground)]">
        <span>&copy; 2025 Capital Guard. Todos los derechos reservados.</span>
      </div>
      <div className="mb-4 flex w-full items-center justify-center">
        <div className="w-1/2">
          <Separator />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 px-4 pb-6 text-sm text-[color:var(--foreground)] md:grid-cols-3">
        {/* Páginas de interés */}
        <div className="flex flex-col items-center gap-2 md:items-center">
          <span className="mb-1 font-semibold">Páginas de interés</span>
          <Link href="/about" className="hover:underline">
            Nosotros
          </Link>
          <Link href="/terminos" className="hover:underline">
            Términos y condiciones
          </Link>
          <Link href="/faqs" className="hover:underline">
            FAQs
          </Link>
        </div>
        {/* Contactos */}
        <div className="flex flex-col items-center gap-2">
          <span className="mb-1 font-semibold">Contactos</span>
          <Link href="mailto:info@capitalguard.com" className="hover:underline">
            info@capitalguard.com
          </Link>
          <Link href="mailto:soporte@capitalguard.com" className="hover:underline">
            soporte@capitalguard.com
          </Link>
          <span>+52 55 1234 5678</span>
          <span>+52 55 8765 4321</span>
          <Link
            href="https://capitalguard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            www.capitalguard.com
          </Link>
        </div>
        {/* Enlaces directos */}
        <div className="flex flex-col items-center gap-2 md:items-center">
          <span className="mb-1 font-semibold">Enlaces directos</span>
          <Link
            href="https://bolide.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ir a Bolide
          </Link>
          <Link href="/store" className="hover:underline">
            Tienda Capital Guard
          </Link>
        </div>
      </div>
    </footer>
  );
}
