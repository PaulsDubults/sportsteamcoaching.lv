import React from 'react';
import { motion } from 'framer-motion';

export default function ManifestoBanner() {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center gap-12 flex-wrap">
          {[
            { value: '20+', label: 'gadu pieredze' },
            { value: '100%', label: 'fokuss uz rezultātu' },
            { value: 'ICF', label: 'sertificēts koučs' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-4xl sm:text-5xl font-extrabold text-white">{stat.value}</span>
              <span className="text-sm text-white/50">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}