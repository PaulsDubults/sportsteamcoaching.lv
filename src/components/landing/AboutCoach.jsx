import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const credentials = [
  { icon: Award, text: 'Erickson Coaching International sertificēts koučs' },
  { icon: Trophy, text: 'Bauskas BJSS absolvents' },
  { icon: Briefcase, text: 'Finanšu un vadības speciālists ar 20+ gadu pieredzi' },
  { icon: GraduationCap, text: 'Profesionāla izpratne par komandas dinamiku un attīstību' },
];

export default function AboutCoach() {
  return (
    <section id="par-koucu" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xs lg:max-w-sm mx-auto"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-primary/10 relative">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad590a694c7cbbc67f1570/16be46856_Screenshot2026-03-08at131725.png"
                alt="Jānis Dubults — koučs"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-card rounded-2xl shadow-xl p-5 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">ICF standarts</p>
                  <p className="text-xs text-muted-foreground">Starptautiska sertifikācija</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Par kouču</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Jānis Dubults
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Sertificēts koučs ar dziļu izpratni par sporta komandu dinamiku, 
              vadību un attīstību. Jānis apvieno profesionālo koučinga pieredzi 
              ar praktisku izpratni par sporta vidi — gan kā bijušais sportists, 
              gan kā pieredzējis biznesa un vadības speciālists.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Viņa mērķis ir palīdzēt treneriem un komandām atraisīt savu potenciālu, 
              uzlabot komunikāciju un sasniegt rezultātus, par kuriem komanda var lepoties.
            </p>

            <div className="mt-10 space-y-5">
              {credentials.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}