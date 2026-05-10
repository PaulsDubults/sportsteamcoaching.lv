import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="cenas" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Cenas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Vienkāršs un caurspīdīgs piedāvājums
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-accent/20 bg-card shadow-xl shadow-accent/5">
            {/* Top accent bar */}
            <div className="h-2 bg-gradient-to-r from-accent to-accent/70" />

            <div className="p-8 lg:p-10">
              <div className="text-center mb-8">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Sākuma piedāvājums</p>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-6xl font-extrabold text-foreground">450</span>
                  <span className="text-2xl font-bold text-muted-foreground">EUR</span>
                </div>
                <p className="mt-2 text-muted-foreground">10 stundas kopā · <span className="font-semibold text-accent">45 EUR/h</span></p>
              </div>

              <div className="h-px bg-border my-8" />

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">Ko ietver:</h4>
                {[
                  '2 stundas — trenera ievadapmācība koučinga pieejā',
                  '8 stundas — komandas koučinga darbs',
                  '4 klātienes sesijas pa 2 stundām',
                  'Mentorings un atbalsts sezonas laikā',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#kontakti" className="block mt-8">
                <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full h-14 text-base font-semibold shadow-lg shadow-accent/25">
                  Pieteikt konsultāciju
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}