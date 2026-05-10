import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background — mobile: foto kā fons, desktop: vienkrāsains */}
      <div className="absolute inset-0">
        {/* Mobile + tablet background photo */}
        <img
          src="https://media.base44.com/images/public/69ad590a694c7cbbc67f1570/8d321314c_Screenshot2026-03-23at100413.png"
          alt="Sporta vēsture"
          className="absolute inset-0 w-full h-full object-cover object-center grayscale lg:hidden"
        />
        <div className="absolute inset-0 bg-[#0A1628]/55 lg:bg-[#0A1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/95 to-[#0A1628]/60 hidden lg:block" />
      </div>

      {/* Vintage photo - right side, fully visible */}
      <div className="absolute right-0 top-0 h-full w-[45%] hidden lg:block">
        <img
          src="https://media.base44.com/images/public/69ad590a694c7cbbc67f1570/8d321314c_Screenshot2026-03-23at100413.png"
          alt="Sporta vēsture"
          className="h-full w-full object-cover object-top grayscale opacity-60"
        />
        {/* Fade left edge to blend with background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0A1628]/40 to-transparent" />
        {/* Fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 via-transparent to-transparent" />
      </div>

      {/* Logo — centered on mobile/tablet, top right on desktop */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-4 z-10">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad590a694c7cbbc67f1570/dc814a0dc_Sports_team_coaching_logo_2026_web-S.png"
          alt="Sporta komanda"
          className="h-36 sm:h-44 lg:h-64 w-auto object-contain opacity-90"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/80 text-sm font-medium">Sporta komandu koučings</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white leading-[1.2] tracking-tight">
            <span className="font-extrabold">Mums nevis nav uzvarētāju mentalitātes,{' '}</span>
            <span className="text-gradient font-extrabold">mums nav attīstītas sadarbības prasmes!</span>
          </h1>

          <p className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-snug max-w-2xl">
            Mēs esam gatavi to mainīt!
          </p>
          <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-white/80 leading-snug max-w-2xl">
            Un šīs izmaiņas var kļūt arī par <span className="text-accent font-extrabold">Jūsu priekšrocību!</span>
          </p>

          <div className="mt-10 flex flex-col gap-4">
            <a href="#kontakti">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-accent/25 w-full sm:w-auto">
                Pieteikt konsultāciju
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href="tel:26521261">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 h-14 text-base font-semibold shadow-lg shadow-accent/25 w-full sm:w-auto">
                <Phone className="mr-2 w-5 h-5" />
                Sazināties
              </Button>
            </a>
          </div>


        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}