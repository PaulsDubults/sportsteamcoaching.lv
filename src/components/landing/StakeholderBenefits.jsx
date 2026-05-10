import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stakeholders = [
  {
    title: 'Treneriem',
    color: 'bg-primary',
    benefits: [
      'Komandas vērtību definēšana un ievērošana',
      'Komandas mērķu skaidra formulēšana',
      'Sadarbības, komunikācijas un motivācijas uzlabošana',
      'Līderības prasmju attīstīšana',
      'Sportisko rezultātu paaugstināšana',
    ],
  },
  {
    title: 'Sportistiem',
    color: 'bg-accent',
    benefits: [
      'Sadarbības, komunikācijas un līderības prasmju attīstīšana',
      'Augstāki sportiskie sasniegumi',
      'Konfliktu risināšanas prasmes',
      'Ātrāka integrēšanās jaunā komandā',
    ],
  },
  {
    title: 'Vecākiem',
    color: 'bg-chart-3',
    benefits: [
      'Bērns iegūst prasmes, kas noder arī ārpus sporta',
      'Pieaug motivācija palikt komandā un sportā',
      'Lielāka iespēja sasniegt labākus rezultātus',
    ],
  },
];

export default function StakeholderBenefits() {
  return (
    <section id="ieguvumi" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Ieguvumi</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Vērtība katrai iesaistītajai pusei
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {stakeholders.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-border bg-card"
            >
              <div className={`${group.color} px-8 py-5`}>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="p-8 space-y-4">
                {group.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}