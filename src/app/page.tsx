import CallToActions from '@/components/layout/principal/CallToActions';
import HeroPrincipal from '@/components/layout/principal/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroPrincipal />
      <CallToActions />
    </main>
  );
}
