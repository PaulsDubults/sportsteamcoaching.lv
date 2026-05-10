import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Kas ir koučings', href: '#kas-ir-koucings' },
  { label: 'Ieguvumi', href: '#ieguvumi' },
  { label: 'Process', href: '#ka-tas-notiek' },
  { label: 'Cenas', href: '#cenas' },
  { label: 'Par kouču', href: '#par-koucu' },
  { label: 'BUJ', href: '#buj' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
      scrolled ? 'shadow-md' : 'shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">
          <a href="#hero" className="flex items-center font-bold text-lg text-primary">
            Sport coaching
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakti">
              <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-6">
                Pieteikties
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakti" onClick={() => setMobileOpen(false)}>
              <Button className="w-full mt-3 bg-accent hover:bg-accent/90 text-white rounded-full">
                Pieteikties
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}