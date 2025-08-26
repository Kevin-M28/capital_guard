'use client';

import { HelpCircle, Mail } from 'lucide-react';

export default function FaqsPage() {
  return (
    <section className="relative mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-12 text-[color:var(--foreground)]">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full" />
      <div className="relative w-full rounded-2xl border border-[color:var(--primary)] bg-[color:var(--card)]/90 p-6 shadow-xl backdrop-blur-md md:p-12">
        <div className="flex flex-col items-center">
          <HelpCircle className="mb-2 size-10 text-[color:var(--primary)]" />
          <h1 className="mb-2 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Preguntas Frecuentes
          </h1>
          <p className="mb-6 text-center text-lg text-[color:var(--muted-foreground)]">
            Respuestas a las consultas más comunes de nuestros clientes
          </p>
        </div>
        <div className="prose prose-neutral max-w-none">
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            Sobre productos y servicios
          </h2>
          <ul>
            <li>
              <strong>¿Qué tipo de sistemas de seguridad ofrecen?</strong>
              <br />
              Ofrecemos alarmas, cámaras, sensores y soluciones integrales para hogares y negocios.
            </li>
            <li>
              <strong>¿Puedo instalar los productos yo mismo?</strong>
              <br />
              Sí, muchos productos son de fácil instalación, pero también contamos con servicio
              profesional de instalación.
            </li>
            <li>
              <strong>¿Tienen garantía?</strong>
              <br />
              Todos nuestros productos cuentan con garantía mínima de 1 año.
            </li>
          </ul>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            Sobre compras y envíos
          </h2>
          <ul>
            <li>
              <strong>¿Cómo puedo comprar?</strong>
              <br />
              Puedes comprar directamente en nuestra tienda online o contactarnos para asesoría
              personalizada.
            </li>
            <li>
              <strong>¿Realizan envíos a todo el país?</strong>
              <br />
              Sí, enviamos a todo Costa Rica.
            </li>
            <li>
              <strong>¿Cuánto tarda en llegar mi pedido?</strong>
              <br />
              El tiempo de entrega es de 2 a 7 días hábiles según tu ubicación.
            </li>
          </ul>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            Sobre soporte y garantías
          </h2>
          <ul>
            <li>
              <strong>¿Qué hago si mi producto no funciona?</strong>
              <br />
              Contáctanos y te ayudaremos a gestionar la garantía o soporte técnico.
            </li>
            <li>
              <strong>¿Tienen soporte técnico?</strong>
              <br />
              Sí, ofrecemos soporte técnico vía correo y teléfono.
            </li>
          </ul>
          <div className="mt-12 rounded-lg bg-[color:var(--muted)]/30 p-6 text-center shadow-inner">
            <Mail className="mx-auto mb-2 size-7 text-[color:var(--primary)]" />
            <p className="mb-2 font-semibold">¿No encontraste respuesta a tu pregunta?</p>
            <p>
              Escríbenos a{' '}
              <a href="mailto:info@capitalguard.com" className="underline">
                info@capitalguard.com
              </a>{' '}
              o{' '}
              <a href="mailto:soporte@capitalguard.com" className="underline">
                soporte@capitalguard.com
              </a>{' '}
              y con gusto te ayudamos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
