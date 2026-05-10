import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { base44 } from '@/api/base44Client';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    await base44.integrations.Core.SendEmail({
      to: 'janisdubults73@inbox.lv',
      subject: `Jauns pieteikums no ${form.name}`,
      body: `Vārds: ${form.name}\nE-pasts: ${form.email}\nTālrunis: ${form.phone}\n\nZiņojums:\n${form.message}`,
    });

    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="kontakti" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm tracking-wider uppercase">Sazināties</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Sāksim jūsu komandas izaugsmes ceļu
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              Aizpildiet pieteikuma formu vai sazinaties ar mums tieši. 
              Pirmā konsultācija ir bezmaksas — kopā izvērtēsim jūsu komandas vajadzības.
            </p>

            <div className="mt-10 space-y-6">
              <a href="tel:26521261" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/50">Tālrunis</p>
                  <p className="text-lg font-semibold text-white">26 521 261</p>
                </div>
              </a>

              <a href="mailto:janisdubults73@inbox.lv" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/50">E-pasts</p>
                  <p className="text-lg font-semibold text-white">janisdubults73@inbox.lv</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sent ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/10 flex flex-col items-center justify-center text-center min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white">Paldies par pieteikumu!</h3>
                <p className="mt-3 text-white/60">Sazināsimies ar jums tuvākajā laikā.</p>
                <Button
                  onClick={() => setSent(false)}
                  variant="outline"
                  className="mt-8 border-white/20 text-white hover:bg-white/10 rounded-full"
                >
                  Nosūtīt vēl vienu
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/10 space-y-5"
              >
                <h3 className="text-xl font-bold text-white mb-6">Pieteikt konsultāciju</h3>

                <div>
                  <label className="text-sm font-medium text-white/70 mb-1.5 block">Vārds, uzvārds</label>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jūsu vārds un uzvārds"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white/70 mb-1.5 block">E-pasts</label>
                  <Input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jusu@epasts.lv"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white/70 mb-1.5 block">Tālrunis</label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+371 ..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl focus:border-accent"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-white/70 mb-1.5 block">Ziņojums</label>
                  <Textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Pastāstiet par savu komandu un vajadzībām..."
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl focus:border-accent min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-accent hover:bg-accent/90 text-white rounded-full h-14 text-base font-semibold shadow-lg shadow-accent/25"
                >
                  {sending ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Nosūta...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Nosūtīt pieteikumu
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}