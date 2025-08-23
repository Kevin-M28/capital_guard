'use client';
import { Separator } from '@/components/ui/separator';

export default function FooterPrincipal() {
  return (
    <footer className="mt-8 w-full">
      <Separator className="my-4" />
      <div className="text-center text-sm text-[color:var(--foreground)] px-4 pb-2">
      <span>&copy; 2025 Capital Guard. Todos los derechos reservados.</span>
      </div>
      <div className="flex items-center justify-center w-full mb-4">
        <div className="w-1/2">
          <Separator />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-6 text-sm text-[color:var(--foreground)]"
      style={{ color: 'var(--foreground)' }}
      >
        <div className="flex justify-center md:justify-start">
          <span>Hecho con ❤️ por tu equipo</span>
        </div>
        <div className="flex justify-center">
          <span>Contacto: info@capitalguard.com</span>
      </div>
      <div className="flex justify-center md:justify-end">
        <span>Otro apartado</span>
      </div>
      </div>
    </footer>
  );
}
