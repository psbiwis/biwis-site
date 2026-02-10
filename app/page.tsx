"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Plane, MessageCircle, ArrowRight, ArrowUp,
  Code, Globe, Megaphone, Mail, Phone, MapPin, Send, 
  Video, GraduationCap, Menu, X, Briefcase, Award, 
  Database, Camera, PenTool, Sparkles
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsappMenu, setShowWhatsappMenu] = useState(false);

  useEffect(() => {
    document.title = "BIWIS | Informatique, Voyage & Formations";
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fermer le menu mobile lors d'un clic sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      <h1 className="sr-only">BIWIS - Services Digitaux, Mobilité Internationale et Formations</h1>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-5 bg-white/95 backdrop-blur-xl z-[150] border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">B</div>
          <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase">BIWIS<span className="text-orange-500">.</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <a href="#accueil" className="hover:text-blue-600 transition">Accueil</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#formations" className="hover:text-blue-600 transition">Formations</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 p-2 z-[160] relative">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[140] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#accueil" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest hover:text-blue-600">Accueil</a>
            <a href="#services" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest hover:text-blue-600">Services</a>
            <a href="#formations" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest hover:text-blue-600">Formations</a>
            <a href="#contact" onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest text-orange-500">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6">
            Digital • Mobilité • Éducation
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tighter uppercase">
            Propulser vos <span className="text-blue-600 italic">Talents</span>, Réussir vos <span className="text-orange-500 italic">Projets</span>.
          </h2>
          <p className="text-slate-500 text-lg mb-10 font-light leading-relaxed max-w-lg">
            Partenaire stratégique à Porto-Novo pour l'innovation technologique, l'assistance voyage et le renforcement de capacités.
          </p>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-2xl shadow-blue-200 inline-flex items-center gap-3 group">
            Démarrer l'aventure <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
        <div className="hidden md:block">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-100" alt="Formation BIWIS" />
        </div>
      </section>

      {/* --- SECTION SERVICES (Avion Animé) --- */}
      <section id="services" className="py-32 px-6 bg-slate-50 relative overflow-hidden">
        <motion.div 
          animate={{ x: ['-20%', '120%'], y: ['10%', '-10%'] }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-0 text-slate-200/40 z-0 pointer-events-none"
        >
          <Plane size={300} strokeWidth={0.5} />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter text-center italic">Nos <span className="text-blue-600">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-800">
            <div className="space-y-6 relative">
              <h3 className="text-xl font-black text-blue-900 mb-8 flex items-center gap-3 uppercase tracking-tighter italic"><div className="w-10 h-1 bg-blue-600 rounded-full"></div> Pôle Digital</h3>
              <ServiceCard icon={<Code />} title="Développement Web" desc="Sites vitrines et applications métiers performantes." />
              <ServiceCard icon={<Video />} title="Montage & Design" desc="Identité visuelle et contenus vidéos impactants." />
              <ServiceCard icon={<Megaphone />} title="Marketing Digital" desc="Ads et gestion d'image de marque stratégique." />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-black text-orange-900 mb-8 flex items-center gap-3 uppercase tracking-tighter italic"><div className="w-10 h-1 bg-orange-500 rounded-full"></div> Pôle Voyage</h3>
              <ServiceCard icon={<GraduationCap />} title="Bourses & Études" desc="Accompagnement Campus France et bourses." color="orange" />
              <ServiceCard icon={<Briefcase />} title="Visas & Immigration" desc="Assistance complète pour visas travail et affaires." color="orange" />
              <ServiceCard icon={<Plane />} title="Billetterie" desc="Réservations de vols aux meilleurs tarifs." color="orange" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FORMATIONS (Catalogue 6 cartes) --- */}
      <section id="formations" className="py-32 px-6 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic mb-6">Catalogue <span className="text-blue-600 underline decoration-orange-500">Formations</span></h2>
              <p className="text-slate-500 font-light italic text-lg leading-relaxed">Boostez vos capacités avec nos programmes intensifs.</p>
            </div>
            <Award className="text-orange-500 hidden md:block" size={80} strokeWidth={1} />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FormationCard icon={<Monitor />} title="Bureautique Pro" desc="Maîtrise complète de Word, Excel et PowerPoint." />
            <FormationCard icon={<Code />} title="Développement Web" desc="Sites modernes avec Next.js, React et Tailwind." />
            <FormationCard icon={<Globe />} title="Social Media" desc="Publicité Meta/Google et gestion de communauté." />
            <FormationCard icon={<Camera />} title="Montage Vidéo" desc="Logiciels pro pour créer des contenus Reels." />
            <FormationCard icon={<PenTool />} title="Design Graphique" desc="Photoshop et Canva pour vos visuels." />
            <FormationCard icon={<Database />} title="Base de données" desc="Structurer et gérer vos données avec SQL." />
          </div>
        </div>
      </section>

      {/* --- BLOC FINAL : CONTACT + FOOTER (FOND NOIR UNIFIÉ + FAISCEAU) --- */}
      <div id="contact" className="relative bg-slate-950 text-white overflow-hidden pt-32">
        <motion.div 
          animate={{ x: ['-150%', '150%'] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent skew-x-12 z-0 pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-5xl font-black mb-12 tracking-tighter uppercase leading-none italic">Contactez-<br/><span className="text-blue-600 underline decoration-orange-500">Nous</span>.</h2>
              <div className="space-y-10 text-white">
                <a href="mailto:biwismakou@gmail.com" className="flex gap-6 items-center group hover:translate-x-2 transition-transform">
                  <div className="p-5 bg-white/5 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all"><Mail /></div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Email</p><p className="font-bold text-lg">biwismakou@gmail.com</p></div>
                </a>
                <div className="flex gap-6 items-start">
                  <div className="p-5 bg-white/5 rounded-2xl text-orange-400"><Phone /></div>
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Appels & WhatsApp</p>
                    <a href="tel:+2290196663055" className="block font-bold text-lg hover:text-orange-400 transition-colors">+229 01 96 66 30 55</a>
                    <a href="tel:+2290140310788" className="block font-bold text-lg hover:text-orange-400 transition-colors">+229 01 40 31 07 88</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-white/5 p-10 rounded-[3rem] space-y-4 backdrop-blur-md border border-white/10 shadow-2xl relative z-10">
              <input type="text" placeholder="Nom Complet" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required />
              <textarea placeholder="Votre message..." rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required></textarea>
              <button type="submit" className="w-full bg-orange-500 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition flex items-center justify-center gap-3">
                <Send size={20} /> Envoyer
              </button>
            </form>
          </div>

          <footer className="py-12 border-t border-white/10 text-center">
            <p className="text-slate-500 text-[9px] font-black tracking-[0.4em] uppercase">
              © {new Date().getFullYear()} BIWIS — DIGITAL • VOYAGE • FORMATION — PORTO-NOVO.
            </p>
          </footer>
        </div>
      </div>

      {/* --- FLOTTANTS --- */}
      <div className="fixed bottom-8 left-8 z-[110] flex flex-col-reverse items-start gap-4">
        <button onClick={() => setShowWhatsappMenu(!showWhatsappMenu)} className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition ring-4 ring-white">
          {showWhatsappMenu ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
        <AnimatePresence>
          {showWhatsappMenu && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3 font-black text-[10px]">
              <a href="https://wa.me/2290196663055" target="_blank" className="bg-white text-green-600 border-2 border-green-500 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 uppercase">WhatsApp 1</a>
              <a href="https://wa.me/2290140310788" target="_blank" className="bg-white text-green-600 border-2 border-green-500 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 uppercase">WhatsApp 2</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button 
            initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[110] bg-blue-600 text-white p-4 rounded-full shadow-2xl"
          >
            <ArrowUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCard({ icon, title, desc, color = "blue" }: { icon: any, title: string, desc: string, color?: string }) {
  const iconColor = color === "blue" ? "text-blue-600 bg-blue-50" : "text-orange-500 bg-orange-50";
  return (
    <div className="flex gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 group transition-all hover:shadow-xl">
      <div className={`p-4 rounded-xl h-fit ${iconColor}`}>{React.cloneElement(icon, { size: 22 })}</div>
      <div><h4 className="font-black text-slate-800 mb-1 uppercase text-sm">{title}</h4><p className="text-slate-500 text-xs leading-relaxed font-light">{desc}</p></div>
    </div>
  );
}

function FormationCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 group flex flex-col items-start relative overflow-hidden">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all relative z-10">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h4 className="font-black uppercase text-lg mb-4 tracking-tighter text-slate-800 relative z-10">{title}</h4>
      <p className="text-slate-500 text-sm font-light leading-relaxed relative z-10">{desc}</p>
    </div>
  );
}