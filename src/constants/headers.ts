import {Header} from '@/types/principal';
export const headersPrincipal: Header[] = [
  {
    name: 'Nosotros',
    href: '/about',
    children: [
      { name: 'Nuestra Historia', href: '/about-us' },
      { name: 'Términos y Condiciones', href: '/terms-and-conditions' },
    ],
  },
  { name: 'Bolide', href: '/brand' },
  { name: 'Contacto', href: '/contact' },
  { name: 'FAQ', href: '/faqs' },
  { name: 'Tienda', href: '/store' },
];
