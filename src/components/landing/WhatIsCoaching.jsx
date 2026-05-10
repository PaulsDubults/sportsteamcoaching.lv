import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Route, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Lightbulb,
    title: 'Apzināt potenciālu',
    text: 'Palīdz katram komandas loceklim un komandai kopumā ieraudzīt savas stiprās puses un neizmantotās iespējas.',
  },
  {
    icon: Target,
    title: 'Definēt mērķus',
    text: 'Skaidri noformulēt komandas un individuālos mērķus, kas motivē un virza uz priekšu.',
  },
  {
    icon: Route,
    title: 'Izstrādāt rīcības plānu',
    text: 'Izveidot konkrētu, reālistisku un izmērāmu ceļu no pašreizējās situācijas līdz vēlamajam rezultātam.',
  },
  {
    icon: Sparkles,
    title: 'Pārvarēt ierobežojumus',
    text: 'Atklāt un pārveidot ierobežojošās pārliecības, kas kavē komandu sasniegt savu labāko sniegumu.',
  },
];

export default function WhatIsCoaching() {
  return (
    <section id="kas-ir-koucings" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Kas ir koučings</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Izaugsmes veicināšanas metode, kas <span className="text-gradient">darbojas</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Koučings ir strukturēta un mērķtiecīga izaugsmes veicināšanas metode, 
              kas palīdz komandām ātrāk un efektīvāk sasniegt savus mērķus. 
              Tas nav padoms no malas — tas ir process, kurā komanda pati atrod 
              labākos risinājumus ar profesionāla kouča atbalstu.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Mums nevis trūkst uzvarētāju mentalitātes, bet bieži pietrūkst attīstītu 
              sadarbības prasmju. Koučings palīdz šo plaisu aizpildīt.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-secondary/50 rounded-2xl p-6 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 border border-transparent hover:border-accent/10"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}