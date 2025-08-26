'use client';
import { ShieldCheck } from 'lucide-react';

export default function TerminosCondiciones() {
  return (
    <section className="relative mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center px-4 py-12 text-[color:var(--foreground)]">
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute top-0 left-0 -z-10 h-full w-full " />
      <div className="relative w-full rounded-2xl border border-[color:var(--primary)] bg-[color:var(--card)]/90 p-6 shadow-xl backdrop-blur-md md:p-12">
        <div className="flex flex-col items-center">
          <ShieldCheck className="mb-2 size-10 text-[color:var(--primary)]" />
          <h1 className="mb-2 text-center text-3xl font-extrabold tracking-tight md:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="mb-6 text-center text-lg text-[color:var(--muted-foreground)]">
            Última actualización: 25 de agosto de 2025
          </p>
        </div>
        <div className="prose prose-neutral max-w-none">
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            1. Aviso Legal e Identificación
          </h2>
          <p>
            Este sitio web es propiedad de Capital Guard. Para cualquier consulta o notificación,
            puedes contactarnos en info@capitalguard.com o a través de los datos de contacto
            publicados en la sección de Contacto.
          </p>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            2. Protección de Datos Personales
          </h2>
          <p>
            Capital Guard garantiza la confidencialidad y protección de los datos personales de los
            usuarios conforme a la legislación vigente. Los datos serán utilizados únicamente para
            los fines para los que fueron recabados y no serán compartidos con terceros sin
            consentimiento, salvo obligación legal.
          </p>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            3. Garantías del Consumidor
          </h2>
          <p>
            Los productos y servicios ofrecidos cuentan con las garantías establecidas por la ley.
            Si tienes algún inconveniente, puedes contactarnos para gestionar cambios, devoluciones
            o reclamos conforme a la normativa aplicable.
          </p>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            4. Cookies de Seguridad
          </h2>
          <p>
            Utilizamos cookies propias y de terceros para mejorar la experiencia de usuario y
            garantizar la seguridad en la navegación. Puedes configurar o rechazar las cookies desde
            la configuración de tu navegador.
          </p>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            5. Términos de Uso del Sitio Web
          </h2>
          <ul>
            <li>El usuario se compromete a hacer un uso adecuado y lícito del sitio web.</li>
            <li>
              Está prohibido realizar actividades que puedan dañar, sobrecargar o deteriorar el
              sitio o impedir su normal funcionamiento.
            </li>
          </ul>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            6. Procedimiento de Reclamo
          </h2>
          <p>
            Para presentar un reclamo, el usuario debe enviar un correo a soporte@capitalguard.com
            detallando el motivo y adjuntando la información relevante. El equipo de Capital Guard
            responderá en un plazo máximo de 10 días hábiles.
          </p>
          <h2 className="mt-8 border-l-4 border-[color:var(--primary)] pl-3 text-xl font-bold">
            7. Vigencia y Modificaciones
          </h2>
          <p>
            Estos términos y condiciones estarán vigentes mientras estén publicados en el sitio.
            Capital Guard se reserva el derecho de modificarlos en cualquier momento. Las
            modificaciones serán efectivas desde su publicación.
          </p>
        </div>
      </div>
    </section>
  );
}
