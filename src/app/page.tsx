import HeroPrincipal from '@/components/layout/principal/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <HeroPrincipal />
    </main>
  );
}
