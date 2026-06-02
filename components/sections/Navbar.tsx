'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { company } from '@/lib/company';

const links = [
  { href: '#karriere', label: 'Karriere' },
  { href: '#arbeitgeber', label: 'Arbeitgeber' },
  { href: '#leistungen', label: 'Leistungen' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-anthracite-950/90 backdrop-blur border-b border-anthracite-800' : 'bg-transparent'
      }`}
    >
      <nav className="container-content flex h-16 items-center justify-between" aria-label="Hauptnavigation">
        <Link href="/" className="flex items-center gap-2 font-extrabold text-white" aria-label={`${company.shortName} Startseite`}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-signal text-anthracite-950">
            <Zap className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-lg tracking-tight">{company.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium text-anthracite-300 transition-colors hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <LinkButton href="/bewerben" className="px-5 py-2.5 text-sm">
            Jetzt bewerben
          </LinkButton>
        </div>

        <button
          type="button"
          className="cursor-pointer p-2 text-white md:hidden"
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-anthracite-800 bg-anthracite-950 md:hidden">
          <ul className="container-content flex flex-col gap-1 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-anthracite-300 hover:bg-anthracite-800 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <LinkButton href="/bewerben" className="w-full" onClick={() => setOpen(false)}>
                Jetzt bewerben
              </LinkButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
