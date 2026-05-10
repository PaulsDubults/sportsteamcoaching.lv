import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, TrendingUp, Heart, BarChart3, Award } from 'lucide-react';

const coachBenefits = [
  { icon: Users, text: 'Fokuss uz katra komandas locekļa individuālo izaugsmi' },
  { icon: TrendingUp, text: 'Jauni komandas vadības un motivēšanas instrumenti' },
  { icon: BarChart3, text: 'Komandas attīstības monitorings un mērāmi rezultāti' },
];

const schoolBenefits = [
  { icon: GraduationCap, text: 'Uzlabotas treneru profesionālās prasmes' },
  { icon: Users, text: 'Audzēkņu personīgā un sportiskā izaugsme' },
  { icon: Award, text: 'Sportisko rezultātu paaugstināšana' },
  { icon: TrendingUp, text: 'Komandas attīstība un saliedēšana' },
  { icon: Heart, text: 'Labbūtība un pozitīva atmosfēra treniņu procesā' },
];

function BenefitCard({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-4 py-3">
      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-accent" />
      </div>
      <p className="text-foreground text-base leading-relaxed pt-1.5">{text}</p>
    </div>
  );
}

export default function WhatYouGet() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Ko iegūsiet</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Reāli ieguvumi jūsu komandai
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Koučings sniedz konkrētus un izmērāmus rezultātus gan treneriem, gan sporta skolām.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-border"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/5 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Treneriem</span>
            </div>
            <div className="space-y-1">
              {coachBenefits.map((b, i) => (
                <BenefitCard key={i} icon={b.icon} text={b.text} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-3xl p-8 lg:p-10 shadow-sm border border-border"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 rounded-full mb-6">
              <GraduationCap className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-accent">Sporta skolām</span>
            </div>
            <div className="space-y-1">
              {schoolBenefits.map((b, i) => (
                <BenefitCard key={i} icon={b.icon} text={b.text} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}