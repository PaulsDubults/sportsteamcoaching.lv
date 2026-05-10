import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'Pēc koučinga sesijām mūsu komandā ievērojami uzlabojās komunikācija. Sportisti sāka atklātāk runāt par problēmām un kopīgi meklēt risinājumus.',
    author: 'Sporta skolas treneris',
    role: 'Basketbols, U-16',
  },
  {
    text: 'Koučings palīdzēja definēt skaidras komandas vērtības. Tagad katrs spēlētājs zina, kāpēc viņš ir šajā komandā un uz ko mēs ejam.',
    author: 'Jauniešu komandas vadītājs',
    role: 'Volejbols, U-18',
  },
  {
    text: 'Mans bērns iemācījās risināt konfliktus un labāk sadarboties ar komandas biedriem. Šīs prasmes viņam noder arī skolā un ikdienā.',
    author: 'Sportista māte',
    role: 'Futbols, U-14',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Atsauksmes</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Ko saka tie, kas jau izmēģināja
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-secondary/50 rounded-3xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              <p className="text-foreground leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-semibold text-foreground">{t.author}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}