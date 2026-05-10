import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, Target, MessageCircle, RotateCcw, Flame, Handshake,
  BookOpen, Users
} from 'lucide-react';

const problems = [
  { icon: BookOpen, title: 'Komandas noteikumi', text: 'Komandas kārtības un iekšējo noteikumu izveide' },
  { icon: Shield, title: 'Vērtības', text: 'Komandas vērtību definēšana un nostiprināšana' },
  { icon: Target, title: 'Mērķi', text: 'Mērķu nospraušana komandai un katram sportistam individuāli' },
  { icon: MessageCircle, title: 'Komunikācija', text: 'Savstarpējā sadarbība un efektīva komunikācija' },
  { icon: RotateCcw, title: 'Atgriezeniskā saite', text: 'Atgriezeniskās saites sniegšana un saņemšana' },
  { icon: Flame, title: 'Motivācija', text: 'Stress, neveiksmes un motivācijas uzturēšana' },
  { icon: Handshake, title: 'Konfliktu risināšana', text: 'Konstruktīva konfliktu risināšana komandā' },
  { icon: Users, title: 'Ārējā sadarbība', text: 'Sadarbība ar vecākiem, tiesnešiem, sponsoriem un medijiem' },
];

export default function ProblemsSolved() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Problēmu risināšana</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Kādas problēmas palīdz risināt
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Koučings dod rīkus un metodes ikdienas izaicinājumu pārvarēšanai.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-white text-base">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}