import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Vai koučings ir piemērots jauniešu komandām?',
    a: 'Jā, koučings ir piemērots komandām no U-14 vecuma. Metodes tiek pielāgotas vecumam un komandas specifikai, lai nodarbības būtu saprotamas, iesaistošas un efektīvas.',
  },
  {
    q: 'Cik ilgi parasti ilgst sadarbība?',
    a: 'Sākuma programma ietver 10 stundas — 2 stundas trenera apmācībai un 8 stundas komandas darbam. Pēc tam ir iespēja turpināt sadarbību ar papildus sesijām vai mentoringu.',
  },
  {
    q: 'Vai koučings aizvieto trenera darbu?',
    a: 'Nē, koučings papildina trenera darbu. Koučs palīdz uzlabot komandas komunikāciju, sadarbību un motivāciju, kamēr treneris turpina strādāt ar sportisko sagatavotību.',
  },
  {
    q: 'Kā notiek pirmā tikšanās?',
    a: 'Pirmajā bezmaksas konsultācijā apspriežam komandas situāciju, izaicinājumus un mērķus. Pēc tam piedāvājam individuāli pielāgotu programmu.',
  },
  {
    q: 'Vai sesijas notiek klātienē vai attālināti?',
    a: 'Komandas koučinga sesijas notiek klātienē, jo tiešā mijiedarbība ir būtiska komandas dinamikas uzlabošanai. Individuālais mentorings trenerim var notikt arī attālināti.',
  },
  {
    q: 'Kāda ir atšķirība starp koučingu un psiholoģisko konsultēšanu?',
    a: 'Koučings ir orientēts uz nākotni un mērķu sasniegšanu. Mēs strādājam ar potenciālu, resursiem un rīcības plānu, nevis analizējam pagātnes traumas vai veicam terapiju.',
  },
];

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-semibold text-foreground text-base pr-8 group-hover:text-accent transition-colors">
          {faq.q}
        </span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="buj" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">BUJ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Biežāk uzdotie jautājumi
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl p-6 sm:p-8 border border-border shadow-sm"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}