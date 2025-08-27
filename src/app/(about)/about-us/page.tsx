import Link from 'next/link';
import {CircleCheckBig, Eye,Heart} from "lucide-react"
import clsx from 'clsx';


export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[color:var(--background)]">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-[color:var(--primary)]">Nosotros</h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-[color:var(--foreground)]">
            Somos Capital Guard, distribuidores oficiales de Bolide Technology Group. Especialistas
            en sistemas de videovigilancia, cámaras de seguridad y soluciones tecnológicas de
            protección.
          </p>
        </div>

        {/* Historia Section */}
        <section className="mb-20">
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 shadow-lg">
            <h2 className="mb-6 text-center text-3xl font-bold text-[color:var(--primary)]">
              Historia
            </h2>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-6 text-lg leading-relaxed text-[color:var(--foreground)]">
                Capital Guard nació como distribuidor oficial de Bolide Technology Group, empresa
                líder mundial en sistemas de videovigilancia y seguridad. Especializada en cámaras
                IP 4K, sistemas DVR móviles, dashcams inteligentes y soluciones de vigilancia de
                última generación. Nuestra misión es brindar acceso a la tecnología de seguridad más
                avanzada del mercado.
              </p>
              <p className="text-lg leading-relaxed text-[color:var(--foreground)]">
                Como socios estratégicos de Bolide, ofrecemos desde cámaras eyeball con visión
                nocturna completa hasta sistemas PTZ con zoom óptico 37x, dashcams con inteligencia
                artificial y sistemas móviles certificados MIL-STD-810G. Garantizamos productos NDAA
                compliant y soporte técnico especializado para instalaciones residenciales,
                comerciales y gubernamentales.
              </p>
            </div>
          </div>
        </section>

        {/* Quienes Somos */}
        <section className="mb-20">
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold text-[color:var(--primary)]">Quiénes Somos</h2>
            <p className="mx-auto max-w-3xl text-xl text-[color:var(--foreground)]">
              Distribuidores oficiales de Bolide Technology Group, especialistas en sistemas de
              videovigilancia y seguridad
            </p>
          </div>
        </section>

        {/* Misión, Visión, Valores */}
        <div className="mb-20 grid gap-8 md:grid-cols-3">
          {/* Misión */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <CircleCheckBig className='h-10 w-10 text-white' />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Misión</h3>
            <p className="leading-relaxed text-[color:var(--foreground)]">
              Proporcionar las soluciones más avanzadas de videovigilancia y seguridad de Bolide
              Technology Group, protegiendo personas, propiedades y activos con tecnología de
              vanguardia y servicio excepcional.
            </p>
          </div>

          {/* Visión */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <Eye className='h-10 w-10 text-white' />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Visión</h3>
            <p className="leading-relaxed text-[color:var(--foreground)]">
              Ser el distribuidor líder de soluciones Bolide en la región, reconocidos por nuestra
              excelencia técnica, innovación constante y por democratizar el acceso a tecnología de
              seguridad de nivel profesional.
            </p>
          </div>

          {/* Valores */}
          <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]">
              <Heart className='h-10 w-10 text-white' />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-[color:var(--primary)]">Valores</h3>
            <ul className="space-y-2 leading-relaxed text-[color:var(--foreground)]">
              <li>
                • <strong>Calidad</strong> en cada producto Bolide que ofrecemos
              </li>
              <li>
                • <strong>Confiabilidad</strong> en nuestro servicio y soporte
              </li>
              <li>
                • <strong>Innovación</strong> con la tecnología más avanzada
              </li>
              <li>
                • <strong>Seguridad</strong> como nuestra razón de ser
              </li>
            </ul>
          </div>
        </div>

        {/* Nuestro Compromiso */}
        <section className="mb-20">
          <div className="rounded-2xl text-center bg-gradient-to-r from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 p-12">
            <h2 className="mb-8 text-3xl font-bold text-[color:var(--primary)]">
              Nuestro Compromiso
            </h2>
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[color:var(--primary)]">
                  Queremos que estés protegido
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-[color:var(--foreground)]">
                  Tu seguridad es nuestra prioridad. Ofrecemos sistemas de videovigilancia Bolide de
                  última generación, con cámaras 4K, visión nocturna completa y tecnología AI para
                  máxima protección de tu hogar o negocio.
                </p>
                <h3 className="mb-4 text-2xl font-semibold text-[color:var(--primary)]">
                  Queremos mejorar la experiencia
                </h3>
                <p className="text-lg leading-relaxed text-[color:var(--foreground)]">
                  Simplificamos la instalación y configuración de sistemas de seguridad complejos,
                  ofreciendo soporte técnico especializado y capacitación para que aproveches al
                  máximo tu inversión.
                </p>
              </div>
            <div className={clsx("md:border-l-4 md:border-[color:var(--primary)] md:pl-8")}>
                <h3 className="mb-4 text-2xl font-semibold text-[color:var(--primary)]">
                  Queremos que puedas comprar con mayor facilidad
                </h3>
                <p className="text-lg leading-relaxed text-[color:var(--foreground)]">
                  Facilitamos la adquisición de equipos Bolide con plataformas intuitivas,
                  cotizaciones rápidas, financiamiento flexible y entrega directa. Comprar
                  tecnología de seguridad nunca fue tan fácil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="rounded-2xl bg-[color:var(--chart-2)] p-12 text-white">
            <h2 className="mb-6 text-3xl font-bold">¿Listo para proteger lo que más valoras?</h2>
            <p className="mb-8 text-xl opacity-90">
              Únete a miles de clientes que ya confían en nuestros sistemas de seguridad Bolide
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/Bolide"
                className="rounded-lg bg-white px-8 py-4 font-semibold text-[color:var(--primary)] transition-colors hover:bg-gray-100"
              >
                Ver sobre la marca Bolide
              </Link>
              <Link
                href="/store"
                className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white hover:text-[color:var(--primary)]"
              >
                Visitar tienda
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
