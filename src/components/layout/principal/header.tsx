'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { headersPrincipal } from '@/constants/headers';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { Header } from '@/types/principal';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();
  return (
    <nav
      className={`sticky top-0 z-50 flex w-full items-center justify-between bg-[color:var(--background)] px-4 py-3`}
    >
      {/* Logo */}
      <Link href="/" aria-label="Inicio">
        <motion.img
          src={theme === 'dark' ? '/logowhite.webp' : '/logoblack.webp'}
          alt="Logo"
          className="mx-4 h-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      {/* Desktop Menu with Navigation-Menu */}
      <motion.div
        className="mx-4 hidden md:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <ThemeToggle />
        <NavigationMenu>
          <NavigationMenuList>
            {headersPrincipal.map((link) => (
              <NavigationMenuItem key={link.href}>
                {link.children ? (
                  <>
                    <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="min-w-[150px] p-2">
                        {link.children.map((child: Header) => (
                          <li key={child.href}>
                            <NavigationMenuLink asChild>
                              <Link href={child.href} className="block px-2 py-1">
                                {child.name}
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link href={link.href} className={navigationMenuTriggerStyle()}>
                      {link.name}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </motion.div>
      {/* Mobile menu */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64 border-0 p-6">
            <SheetHeader>
              <SheetTitle>Capital Guard</SheetTitle>
            </SheetHeader>
            <div className="mt-2">
              <Accordion type="multiple" className="flex flex-col space-y-2">
                {headersPrincipal.map((link) =>
                  link.children ? (
                    <AccordionItem key={link.href} value={link.href} className="border-0">
                      <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline focus:no-underline">
                        {link.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="ml-2 space-y-2">
                          {link.children.map((child: Header) => (
                            <li key={child.href}>
                              <Link href={child.href} onClick={() => setIsOpen(false)}>
                                <div className="text-base font-normal">
                                  {child.name}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div key={link.href} className="py-2">
                      <Link href={link.href} onClick={() => setIsOpen(false)}>
                        <motion.div
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-lg font-medium"
                        >
                          {link.name}
                        </motion.div>
                      </Link>
                    </div>
                  )
                )}
              </Accordion>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
