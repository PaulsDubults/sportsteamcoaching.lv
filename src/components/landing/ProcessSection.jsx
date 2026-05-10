import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Calendar, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: BookOpen,
    step: '01',
    title: 'Trenera apmācība',
    description: 'Īsa ievadapmācība trenerim par koučinga pieeju, principiem un metodi.',
    detail: '2 stundas',
  },
  {
    icon: Users,
    step: '02',
    title: 'Komandas koučings',
    description: 'Strukturētas nodarbības ar komandu, kur koučs strādā kopā ar treneri un sportistiem.',
    detail: '4 klātienes sesijas',
  },
  {
    icon: Calendar,
    step: '03',
    title: 'Regulārs ritms',
    description: 'Nodarbības notiek ik pēc 2 nedēļām, katras ilgums — 2 stundas, dodot laiku pielietot apgūto.',
    detail: 'Ik pēc 2 nedēļām × 2h',
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Mentorings',
    description: 'Atbalsts un mentorings trenerim visas sezonas laikā, lai nodrošinātu ilgtermiņa rezultātu.',
    detail: 'Visa sezona',
  },
];

export default function ProcessSection() {
  return (
    <section id="ka-tas-notiek" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Process</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Kā tas notiek
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Vienkāršs un pārskatāms process no sākuma līdz ilgtermiņa rezultātam.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/20 to-accent/0" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative text-center"
              >
                <div className="relative mx-auto w-20 h-20 rounded-2xl bg-card border-2 border-accent/20 flex items-center justify-center mb-6 shadow-lg shadow-accent/5">
                  <step.icon className="w-8 h-8 text-accent" />
                  <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                <div className="mt-4 inline-flex px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                  {step.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}