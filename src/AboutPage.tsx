/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  Layers, 
  Zap,
  TrendingUp,
  Search,
  ChevronRight,
  ShieldCheck,
  Cpu,
  BarChart3
} from 'lucide-react';

export default function AboutPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-biem-secondary selection:text-biem-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1Fo1BOklHV3ED5TPlqZQM2FwTO_fogleF" 
              alt="BIEM Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wider">
            <Link to="/" className="hover:text-biem-primary transition-colors">Inicio</Link>
            <Link to="/quienes-somos" className="text-biem-primary border-b-2 border-biem-accent">Conoce BIEM</Link>
            <a href="/#form" className="px-6 py-2.5 bg-biem-accent text-white rounded-lg hover:bg-biem-accent-hover transition-all shadow-lg shadow-biem-accent/20">
              Diagnóstico Estratégico
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO (QUIÉNES SOMOS) */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-biem-primary"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-biem-primary">
                  Nuestra Identidad
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-biem-primary mb-8 leading-[0.95]">
                BIEM no es una agencia.<br/>
                <span className="text-biem-accent italic">Es una firma que estructura negocios para crecer.</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-600 mb-10 leading-relaxed font-medium">
                Combinamos diagnóstico, estrategia y ejecución para transformar negocios en sistemas de crecimiento sostenibles.
              </p>

              <div className="inline-flex items-center gap-4 p-6 bg-biem-primary text-white rounded-2xl shadow-xl">
                <ShieldCheck className="text-biem-secondary" size={32} />
                <p className="text-xl font-bold italic">
                  "No trabajamos con acciones aisladas. Trabajamos con estructura."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-biem-primary fill-current">
            <path d="M0 100 L100 0 L100 100 Z" />
          </svg>
        </div>
      </section>

      {/* 2. QUIÉNES SOMOS (PROFUNDIDAD) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight text-biem-primary leading-tight">
                BIEM nace de una realidad clara:
              </h2>
              <div className="space-y-8">
                <p className="text-3xl font-black text-biem-accent italic leading-tight">
                  La mayoría de los negocios no falla por falta de esfuerzo, falla por falta de dirección.
                </p>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  Por eso, no nos posicionamos como una agencia tradicional. Somos el socio estratégico que tu negocio necesita para dejar de improvisar.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {[
                { title: "Analiza el negocio en profundidad", icon: <Search /> },
                { title: "Define una dirección clara", icon: <Target /> },
                { title: "Construye la estructura necesaria", icon: <Layers /> },
                { title: "Activa el crecimiento con intención", icon: <Zap /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 group hover:border-biem-secondary transition-all"
                >
                  <div className="p-4 bg-white text-biem-primary rounded-2xl shadow-sm group-hover:bg-biem-primary group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <span className="text-xl font-black text-biem-primary uppercase tracking-tight">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUÉ HACEMOS (CLARIDAD) */}
      <section className="py-32 bg-biem-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
            >
              No vendemos servicios.<br/>
              <span className="text-biem-secondary italic">Diseñamos sistemas de crecimiento.</span>
            </motion.h2>
            <p className="text-2xl text-biem-secondary/60 font-medium max-w-3xl mx-auto">
              Integramos lo que normalmente está separado para que el negocio funcione como un todo.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {["Estrategia", "Operación", "Marketing", "Ventas"].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-biem-accent rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-biem-accent/20">
                  <span className="text-2xl font-black">0{i+1}</span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-widest">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
      </section>

      {/* 4. SERVICIOS DESGLOSADOS */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-biem-primary">Nuestras Capacidades</h2>
            <div className="h-1.5 w-24 bg-biem-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Consultoría Estratégica",
                icon: <Target size={32} />,
                items: [
                  "Diagnóstico profundo del negocio",
                  "Identificación de problemas estructurales",
                  "Definición de modelo de crecimiento",
                  "Claridad en oferta, comunicación y ventas"
                ]
              },
              {
                title: "Arquitectura de Negocio",
                icon: <Layers size={32} />,
                items: [
                  "Diseño de estructura operativa",
                  "Organización de procesos",
                  "Definición de sistema de ventas",
                  "Optimización de flujo de clientes"
                ]
              },
              {
                title: "Activación Digital",
                icon: <Zap size={32} />,
                items: [
                  "Estrategia de contenido",
                  "Presencia digital estructurada",
                  "Implementación de canales",
                  "Ejecución con intención (no por volumen)"
                ]
              },
              {
                title: "Automatización y Sistemas",
                icon: <Cpu size={32} />,
                items: [
                  "Asistentes de ventas personalizados",
                  "Asistentes de servicio al cliente digital",
                  "Automatización de procesos",
                  "Seguimiento y conversión automatizada"
                ]
              },
              {
                title: "Optimización y Escalamiento",
                icon: <BarChart3 size={32} />,
                items: [
                  "Análisis de rendimiento",
                  "Ajustes estratégicos",
                  "Mejora continua",
                  "Preparación para crecimiento"
                ]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full group hover:shadow-xl transition-all"
              >
                <div className="p-4 bg-biem-secondary/20 text-biem-primary rounded-2xl w-fit mb-8 group-hover:bg-biem-primary group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black mb-8 tracking-tight uppercase text-biem-primary">{service.title}</h3>
                <ul className="space-y-4 flex-grow">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-600 font-medium">
                      <ChevronRight className="text-biem-accent mt-1 shrink-0" size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CÓMO TRABAJAMOS (METODOLOGÍA) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-biem-primary">
                Nuestro trabajo no es improvisado.
              </h2>
              <p className="text-2xl text-slate-600 font-medium mb-12">
                Seguimos un sistema claro diseñado para llevar tu negocio de la confusión a la estructura.
              </p>
              <div className="flex flex-col gap-4">
                {["Análisis", "Claridad", "Estructura", "Activación", "Optimización"].map((step, i) => (
                  <div key={i} className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full bg-biem-primary text-white flex items-center justify-center font-black text-xl shadow-lg">
                      {i + 1}
                    </div>
                    <span className="text-2xl font-black text-biem-primary uppercase tracking-tighter">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                  alt="Metodología de trabajo BIEM" 
                  className="w-full h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-biem-accent p-10 rounded-[2.5rem] shadow-2xl text-white max-w-xs">
                <p className="text-2xl font-black italic leading-tight">
                  "El orden es el primer paso hacia el crecimiento."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ENFOQUE (FILTRADO) */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black mb-12 tracking-tight text-biem-primary uppercase"
          >
            No trabajamos con todo el mundo.
          </motion.h2>
          <p className="text-2xl text-slate-600 font-medium mb-16">
            Trabajamos con negocios que:
          </p>
          
          <div className="grid gap-6">
            {[
              "Están listos para crecer",
              "Entienden el valor de la estrategia",
              "Quieren estructura, no improvisación"
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border-2 border-biem-secondary/30 flex items-center justify-center gap-6 group hover:border-biem-primary transition-all"
              >
                <CheckCircle2 className="text-biem-accent" size={32} />
                <span className="text-2xl font-black text-biem-primary uppercase tracking-tight">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="py-32 bg-biem-primary text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tight leading-[0.9]">
            Si quieres dejar de operar por intuición y empezar a crecer con estructura:
          </h2>
          
          <motion.a
            href="/#form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-4 px-12 py-6 bg-biem-accent text-white font-black rounded-2xl shadow-2xl shadow-biem-accent/40 text-2xl uppercase tracking-tight group"
          >
            Solicitar diagnóstico estratégico
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-biem-secondary rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <Link to="/" className="flex items-center">
            <img 
              src="https://lh3.googleusercontent.com/d/1Fo1BOklHV3ED5TPlqZQM2FwTO_fogleF" 
              alt="BIEM Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          <div className="flex gap-12 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            <a href="https://www.linkedin.com/company/biem-digital-agency/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="hover:text-biem-primary transition-colors">LinkedIn</a>
            <a href="https://www.instagram.com/biemdigitalrd/?hl=es" target="_blank" rel="noopener noreferrer" className="hover:text-biem-primary transition-colors">Instagram</a>
            <a href="/privacidad" className="hover:text-biem-primary transition-colors">Privacidad</a>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} BIEM CONSULTING GROUP.
          </p>
        </div>
      </footer>
    </div>
  );
}
