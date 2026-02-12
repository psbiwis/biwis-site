"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Plane, MessageCircle, ArrowRight, ArrowUp,
  Code, Globe, Megaphone, Mail, Phone, MapPin, Send, 
  Video, GraduationCap, Menu, X, Briefcase, Award, 
  Database, Camera, PenTool, Sparkles, CheckCircle2
} from 'lucide-react';

// --- COMPOSANT COMPTEUR ---
function CountingNumber({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000; // 2 secondes
    const increment = end / (duration / 30);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [value]);
  return <span>{count}</span>;
}

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWhatsappMenu, setShowWhatsappMenu] = useState(false);
  const [activePortfolioTab, setActivePortfolioTab] = useState('web');

  useEffect(() => {
    setMounted(true);
    document.title = "BIWIS | Informatique, Voyage & Formations";
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioData = {
    web: [
      { title: "E-Commerce", category: "Next.js", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
      { title: "Dashboard Admin", category: "React", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800" }
    ],
    design: [
      { title: "Identité Visuelle", category: "Branding", img: "https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?q=80&w=800" },
      { title: "Affiches Pros", category: "Graphisme", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800" }
    ]
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const closeMenu = () => setIsMenuOpen(false);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth selection:bg-blue-600 selection:text-white overflow-x-hidden relative">
      
      {/* --- NOUVELLE ANIMATION D'ARRIÈRE-PLAN GLOBALE (Particules) --- */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, 50, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute rounded-full bg-blue-400/10 blur-3xl"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <h1 className="sr-only">BIWIS - Services Digitaux, Mobilité Internationale et Formations</h1>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full flex justify-between items-center p-5 bg-white/95 backdrop-blur-xl z-[150] border-b border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">B</div>
          <span className="text-2xl font-black tracking-tighter text-slate-800 uppercase">BIWIS<span className="text-orange-500">.</span></span>
        </div>

        <div className="hidden md:flex gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-500">
          <a href="#accueil" className="hover:text-blue-600 transition">Accueil</a>
          <a href="#apropos" className="hover:text-blue-600 transition">À Propos</a>
          <a href="#services" className="hover:text-blue-600 transition">Services</a>
          <a href="#portfolio" className="hover:text-blue-600 transition">Portfolio</a>
          <a href="#formations" className="hover:text-blue-600 transition">Formations</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-800 p-2 z-[160] relative">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }} className="fixed inset-0 bg-white z-[140] flex flex-col items-center justify-center gap-8 md:hidden text-center">
            {['accueil', 'apropos', 'services', 'portfolio', 'formations', 'contact'].map((id) => (
              <a key={id} href={`#${id}`} onClick={closeMenu} className="text-2xl font-black uppercase tracking-widest hover:text-blue-600">
                {id === 'apropos' ? 'À Propos' : id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section id="accueil" className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-6">Digital • Mobilité • Éducation</div>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 tracking-tighter uppercase">
            Propulser vos <span className="text-blue-600 italic">Talents</span>, Réussir vos <span className="text-orange-500 italic">Projets</span>.
          </h2>
          <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-2xl shadow-blue-200 inline-flex items-center gap-3 group">
            Démarrer l'aventure <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </a>
        </motion.div>
        <div className="hidden md:block">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" className="rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-100" alt="Formation BIWIS" />
        </div>
      </section>

      {/* --- SECTION À PROPOS --- */}
      <section id="apropos" className="py-32 px-6 bg-white border-t border-slate-50 z-10 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-orange-500/10 rounded-[4rem] blur-2xl" />
            <img src="/public/Biwis.png" className="rounded-[3rem] relative z-10 shadow-2xl border border-slate-100" alt="À Propos de BIWIS" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase italic tracking-tighter">Votre partenaire de <span className="text-blue-600">Confiance</span>.</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-light italic">"Notre mission est de briser les barrières technologiques et géographiques pour les talents d'aujourd'hui."</p>
            <div className="space-y-4">
              {["Innovation Digitale", "Accompagnement Voyage", "Formations Pratiques"].map((text) => (
                <div key={text} className="flex items-center gap-4 font-bold text-slate-800">
                  <CheckCircle2 className="text-orange-500" /> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES --- */}
      <section id="services" className="py-32 px-6 bg-slate-50 relative overflow-hidden z-10">
        <motion.div animate={{ x: ['-20%', '120%'], y: ['10%', '-10%'] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-0 text-slate-200/40 z-0 pointer-events-none">
          <Plane size={300} strokeWidth={0.5} />
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-20 uppercase tracking-tighter italic">Nos <span className="text-blue-600">Services</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-800 text-left">
            <div className="space-y-6">
              <h3 className="text-xl font-black text-blue-900 mb-8 flex items-center gap-3 uppercase italic"><div className="w-10 h-1 bg-blue-600"></div> Pôle Digital</h3>
              <ServiceCard icon={<Code />} title="Développement Web" desc="Sites vitrines et applications métiers performantes." />
              <ServiceCard icon={<Video />} title="Montage & Design" desc="Identité visuelle et contenus impactants." />
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-black text-orange-900 mb-8 flex items-center gap-3 uppercase italic"><div className="w-10 h-1 bg-orange-500"></div> Pôle Voyage</h3>
              <ServiceCard icon={<GraduationCap />} title="Bourses & Études" desc="Accompagnement Campus France et bourses." color="orange" />
              <ServiceCard icon={<Plane />} title="Billetterie" desc="Réservations de vols au meilleur prix." color="orange" />
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION PORTFOLIO (TABS) + COMPTEURS STATS --- */}
      <section id="portfolio" className="py-32 px-6 bg-white z-10 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase italic tracking-tighter">Nos <span className="text-blue-600">Réalisations</span></h2>
          <div className="flex justify-center gap-4 mb-16">
            {['web', 'design'].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActivePortfolioTab(tab)}
                className={`px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all ${activePortfolioTab === tab ? 'bg-blue-600 text-white shadow-xl' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
              >
                {tab === 'web' ? 'Web & App' : 'Graphisme'}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activePortfolioTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              {portfolioData[activePortfolioTab as keyof typeof portfolioData].map((item, idx) => (
                <div key={idx} className="group relative rounded-[2rem] overflow-hidden border border-slate-100 bg-slate-50">
                  <img src={item.img} className="w-full h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.title} />
                  <div className="p-8 text-left">
                    <span className="text-blue-600 text-[9px] font-black uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-xl font-black uppercase mt-2">{item.title}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* COMPTEURS STATISTIQUES ANIMÉS AJOUTÉS ICI */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-slate-100">
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black text-blue-600 tracking-tighter"><CountingNumber value={150} />+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Étudiants Formés</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black text-orange-500 tracking-tighter"><CountingNumber value={45} />+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Visas Obtenus</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black text-blue-600 tracking-tighter"><CountingNumber value={80} />+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Projets Web</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl md:text-6xl font-black text-orange-500 tracking-tighter"><CountingNumber value={12} />+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Pays d'Études</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FORMATIONS --- */}
      <section id="formations" className="py-32 px-6 bg-slate-50 border-t border-slate-100 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter italic text-center mb-20">Catalogue <span className="text-blue-600">Formations</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FormationCard icon={<Monitor />} title="Bureautique Pro" desc="Maîtrise complète de Word, Excel et PowerPoint." />
            <FormationCard icon={<Code />} title="Développement Web" desc="Sites modernes avec Next.js et Tailwind CSS, sans oublier WordPress et bien d'autres." />
            <FormationCard icon={<Globe />} title="Social Media" desc="Publicité Meta/Google et gestion d'image." />
            <FormationCard icon={<Camera />} title="Montage Vidéo" desc="Logiciels pro pour créer des contenus impactants." />
            <FormationCard icon={<PenTool />} title="Design Graphique" desc="Photoshop et Canva pour vos visuels." />
            <FormationCard icon={<Database />} title="Base de données" desc="Structurer et gérer vos données avec SQL." />
          </div>
        </div>
      </section>

      {/* --- CONTACT + FOOTER (SCANNER NÉON) --- */}
      <div id="contact" className="relative bg-slate-950 text-white pt-32 overflow-hidden z-20">
        
        {/* FAISCEAU LUMINEUX SCANNER */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[3px] z-50 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, #3b82f6 50%, transparent 100%)',
            boxShadow: '0 0 20px 4px #3b82f6',
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-5xl font-black mb-12 uppercase italic">Contactez-<br/><span className="text-blue-600 decoration-orange-500 underline">Nous</span>.</h2>
              <div className="space-y-8">
                <a href="mailto:biwismakou@gmail.com" className="flex gap-6 items-center hover:translate-x-2 transition-transform">
                  <div className="p-5 bg-white/5 rounded-2xl text-blue-400"><Mail /></div>
                  <div><p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Email</p><p className="font-bold">biwismakou@gmail.com</p></div>
                </a>
                <div className="flex gap-6 items-start">
                  <div className="p-5 bg-white/5 rounded-2xl text-orange-400"><Phone /></div>
                  <div>
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Appels & WhatsApp</p>
                    <p className="font-bold">+229 01 96 66 30 55</p>
                    <p className="font-bold">+229 01 40 31 07 88</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="bg-white/5 p-10 rounded-[3rem] space-y-4 border border-white/10 shadow-2xl">
              <input type="text" placeholder="Nom Complet" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required />
              <input type="email" placeholder="Email" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required />
              <textarea placeholder="Votre message..." rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-orange-500 text-white" required></textarea>
              <button type="submit" className="w-full bg-orange-500 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-orange-600 transition flex items-center justify-center gap-3">
                <Send size={20} /> Envoyer
              </button>
            </form>
          </div>
          <footer className="py-12 border-t border-white/10 text-center text-slate-500 text-[9px] font-black tracking-[0.4em] uppercase">
            © 2026 BIWIS — PORTO-NOVO — BÉNIN
          </footer>
        </div>
      </div>

      {/* --- FLOTTANTS --- */}
      <div className="fixed bottom-8 left-8 z-[110] flex flex-col-reverse items-start gap-4">
        <button onClick={() => setShowWhatsappMenu(!showWhatsappMenu)} className="bg-green-500 text-white p-4 rounded-full shadow-2xl ring-4 ring-white">
          {showWhatsappMenu ? <X size={28} /> : <MessageCircle size={28} />}
        </button>
        <AnimatePresence>
          {showWhatsappMenu && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col gap-3 font-black text-[10px]">
              <a href="https://wa.me/2290196663055" target="_blank" className="bg-white text-green-600 border-2 border-green-500 px-5 py-3 rounded-2xl shadow-xl uppercase">WhatsApp 1</a>
              <a href="https://wa.me/2290140310788" target="_blank" className="bg-white text-green-600 border-2 border-green-500 px-5 py-3 rounded-2xl shadow-xl uppercase">WhatsApp 2</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} onClick={scrollToTop} className="fixed bottom-8 right-8 z-[110] bg-blue-600 text-white p-4 rounded-full shadow-2xl">
            <ArrowUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

function ServiceCard({ icon, title, desc, color = "blue" }: any) {
  const iconColor = color === "blue" ? "text-blue-600 bg-blue-50" : "text-orange-500 bg-orange-50";
  return (
    <div className="flex gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 group transition-all hover:shadow-xl relative z-10">
      <div className={`p-4 rounded-xl h-fit ${iconColor}`}>{React.cloneElement(icon, { size: 22 })}</div>
      <div><h4 className="font-black text-slate-800 mb-1 uppercase text-sm">{title}</h4><p className="text-slate-500 text-xs font-light">{desc}</p></div>
    </div>
  );
}

function FormationCard({ icon, title, desc }: any) {
  return (
    <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-blue-100 hover:bg-white transition-all duration-500 group flex flex-col items-start relative z-10">
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h4 className="font-black uppercase text-lg mb-4 tracking-tighter text-slate-800">{title}</h4>
      <p className="text-slate-500 text-sm font-light">{desc}</p>
    </div>
  );
}