import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-[color:var(--primary)]">Contacto</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[color:var(--foreground)]">
            Estamos aquí para ayudarte con tus necesidades de seguridad. Contáctanos para obtener
            más información sobre nuestros productos Bolide.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Teléfono */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Teléfono</h3>
            <p className="mb-2 text-lg text-[color:var(--muted-foreground)]">
              Ventas y Soporte Técnico
            </p>
            <a
              href="tel:+1909-305-8889"
              className="text-xl font-semibold text-[color:var(--primary)] hover:underline"
            >
              (909) 305-8889
            </a>
            <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">
              Lunes a Viernes: 8:00 AM - 6:00 PM PST
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Email</h3>
            <p className="mb-2 text-lg text-[color:var(--muted-foreground)]">Consultas Generales</p>
            <a
              href="mailto:sales@capitalguard.com"
              className="text-xl font-semibold text-[color:var(--primary)] hover:underline"
            >
              sales@capitalguard.com
            </a>
            <p className="mt-4 text-sm text-[color:var(--muted-foreground)]">Soporte Técnico:</p>
            <a
              href="mailto:support@capitalguard.com"
              className="font-semibold text-[color:var(--primary)] hover:underline"
            >
              support@capitalguard.com
            </a>
          </div>

          {/* Ubicación */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Ubicación</h3>
            <p className="mb-2 text-lg text-[color:var(--muted-foreground)]">
              Centro de Distribución
            </p>
            <address className="font-semibold text-[color:var(--primary)] not-italic">
              468 S San Dimas Ave
              <br />
              San Dimas, CA 91773
              <br />
              Estados Unidos
            </address>
          </div>
        </div>

        {/* Contact Form & Info */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-[color:var(--primary)]">
              Solicitar Información
            </h2>
            <form className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                  >
                    Apellido *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                  placeholder="+1 (xxx) xxx-xxxx"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                >
                  Tipo de Consulta *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="product-info">Información de Productos</option>
                  <option value="quote">Solicitar Cotización</option>
                  <option value="technical-support">Soporte Técnico</option>
                  <option value="installation">Servicios de Instalación</option>
                  <option value="partnership">Oportunidades de Negocio</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[color:var(--foreground)]"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="resize-vertical w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--background)] px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-[color:var(--primary)]"
                  placeholder="Describe tus necesidades de seguridad o cualquier pregunta que tengas sobre nuestros productos Bolide..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[color:var(--primary)] px-6 py-4 font-semibold text-[color:var(--primary-foreground)] transition-colors hover:bg-[color:var(--accent)]"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Business Hours */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-[color:var(--primary)]">
                Horarios de Atención
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes:</span>
                  <span className="text-[color:var(--muted-foreground)]">
                    8:00 AM - 6:00 PM PST
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span className="text-[color:var(--muted-foreground)]">
                    9:00 AM - 2:00 PM PST
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo:</span>
                  <span className="text-[color:var(--muted-foreground)]">Cerrado</span>
                </div>
              </div>
              <div className="mt-6 rounded-lg bg-[color:var(--primary)]/10 p-4">
                <p className="text-sm text-[color:var(--muted-foreground)]">
                  <strong>Emergencias de Soporte:</strong> Para asistencia técnica urgente, contacta
                  nuestro soporte 24/7 en support@capitalguard.com
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-[color:var(--primary)]">
                Enlaces Rápidos
              </h3>
              <div className="space-y-4">
                <Link
                  href="/store"
                  className="flex items-center font-medium text-[color:var(--primary)] hover:underline"
                >
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  Catálogo de Productos Bolide
                </Link>
                <Link
                  href="/faqs"
                  className="flex items-center font-medium text-[color:var(--primary)] hover:underline"
                >
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Preguntas Frecuentes
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="flex items-center font-medium text-[color:var(--primary)] hover:underline"
                >
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Términos y Condiciones
                </Link>
                <a
                  href="https://bolideco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center font-medium text-[color:var(--primary)] hover:underline"
                >
                  <svg
                    className="mr-3 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Sitio Oficial Bolide
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-[color:var(--primary)]">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-white transition-colors hover:bg-[color:var(--accent)]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-white transition-colors hover:bg-[color:var(--accent)]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-white transition-colors hover:bg-[color:var(--accent)]"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
