import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-muted-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69ad590a694c7cbbc67f1570/dc814a0dc_Sports_team_coaching_logo_2026_web-S.png"
              alt="Sports Team Coaching logo"
              className="h-72 w-auto"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm">
            <a href="tel:26521261" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              26 521 261
            </a>
            <a href="mailto:janisdubults73@inbox.lv" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              janisdubults73@inbox.lv
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm">
          <p>© {new Date().getFullYear()} SportKoučs · Jānis Dubults. Visas tiesības aizsargātas.</p>
        </div>
      </div>
    </footer>
  );
}