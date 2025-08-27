import CallToActions from '@/components/layout/principal/callToActions';
import HeroPrincipal from '@/components/layout/principal/hero';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroPrincipal />
      <CallToActions />
    </main>
  );
}
