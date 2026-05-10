import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Gatavi padarīt savu komandu <span className="text-gradient">spēcīgāku</span>?
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
            Pirmā konsultācija ir bezmaksas. Sazinaties ar mums, un kopā izvērtēsim, 
            kā koučings var palīdzēt tieši jūsu komandai.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakti">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-10 h-14 text-base font-semibold shadow-lg shadow-accent/25 w-full sm:w-auto">
                Pieteikt konsultāciju
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}