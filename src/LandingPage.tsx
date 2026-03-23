/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Search, 
  Target, 
  Layers, 
  Zap,
  TrendingUp,
  XCircle,
  Users,
  ChevronRight,
  Mail,
  BookOpen
} from 'lucide-react';

export default function LandingPage() {
  const [insightsData, setInsightsData] = React.useState({
    nombre: '',
    email: ''
  });

  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Diagnostic Test State
  const [testStep, setTestStep] = React.useState(0);
  const [testAnswers, setTestAnswers] = React.useState<number[]>([]);
  const [testResult, setTestResult] = React.useState<'desordenado' | 'proceso' | 'estructurado' | null>(null);

  const questions = [
    {
      q: "¿Tienes una estrategia clara de crecimiento?",
      options: ["Sí", "Más o menos", "No"]
    },
    {
      q: "¿Tus redes generan ventas constantes?",
      options: ["Sí", "A veces", "No"]
    },
    {
      q: "¿Tienes un sistema de ventas estructurado?",
      options: ["Sí", "Parcial", "No"]
    },
    {
      q: "¿Sabes exactamente qué está frenando tu negocio?",
      options: ["Sí", "Tengo una idea", "No"]
    }
  ];

  const handleAnswer = (optionIndex: number) => {
    const newAnswers = [...testAnswers, optionIndex];
    setTestAnswers(newAnswers);
    
    if (testStep < questions.length - 1) {
      setTestStep(testStep + 1);
    } else {
      // Calculate result: 0 is best (Sí), 2 is worst (No)
      const totalScore = newAnswers.reduce((acc, curr) => acc + curr, 0);
      if (totalScore >= 6) setTestResult('desordenado');
      else if (totalScore >= 3) setTestResult('proceso');
      else setTestResult('estructurado');
    }
  };

  const resetTest = () => {
    setTestStep(0);
    setTestAnswers([]);
    setTestResult(null);
  };

  const handleInsightsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setInsightsData({ nombre: '', email: '' });
    } catch (error) {
      setStatus('error');
    }
  };

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
            <a href="#problema" className="hover:text-biem-primary transition-colors">Problema</a>
            <a href="#metodologia" className="hover:text-biem-primary transition-colors">Metodología</a>
            <Link to="/quienes-somos" className="hover:text-biem-primary transition-colors">Conoce BIEM</Link>
            <a href="#form" className="px-6 py-2.5 bg-biem-accent text-white rounded-lg hover:bg-biem-accent-hover transition-all shadow-lg shadow-biem-accent/20">
              Diagnóstico Estratégico
            </a>
          </div>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[1px] w-8 bg-biem-primary"></div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-biem-primary">
                  Firma Consultora de Negocios
                </span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black tracking-tight text-biem-primary mb-8 leading-[0.95]">
                Convertimos negocios en <span className="text-biem-accent">sistemas</span> de crecimiento y ventas
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl leading-relaxed font-medium">
                BIEM es una firma consultora que diagnostica, estructura y activa negocios para que crezcan con dirección, no con improvisación.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
                <div className="flex flex-col border-l-2 border-biem-secondary pl-6 py-2">
                  <p className="text-biem-primary/40 text-sm font-bold uppercase tracking-widest mb-1">El Compromiso</p>
                  <p className="text-biem-primary font-bold text-lg italic">"No hacemos marketing por hacer. Diseñamos sistemas que generan resultados."</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.a
                  href="#form"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-biem-accent text-white font-black rounded-xl hover:bg-biem-accent-hover transition-all shadow-xl shadow-biem-accent/20 text-lg uppercase tracking-tight"
                >
                  Obtener diagnóstico estratégico
                </motion.a>
                <Link
                  to="/quienes-somos"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-white text-biem-primary font-black rounded-xl border-2 border-biem-secondary hover:border-biem-primary transition-all text-lg uppercase tracking-tight"
                >
                  Ver cómo trabajamos
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://lh3.googleusercontent.com/d/1gXJdfcWKP1HXO6YswAAPYKL4RsydjBa6" 
                  alt="Convertimos negocios en sistemas - BIEM" 
                  className="w-full h-[600px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-biem-primary/40 to-transparent"></div>
              </div>
              {/* Decorative Floating Element */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl z-20 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-biem-secondary/20 rounded-xl text-biem-primary">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-biem-primary/40 uppercase tracking-widest">Crecimiento</p>
                    <p className="text-xl font-black text-biem-primary">+124%</p>
                  </div>
                </div>
                <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-biem-accent"
                  ></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Background Grid Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full -z-10 opacity-[0.03] pointer-events-none text-biem-primary">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>
      </section>

      {/* 2. PROBLEMA */}
      <section id="problema" className="py-32 bg-biem-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight tracking-tight">
                La mayoría de los negocios no fallan por falta de esfuerzo.<br/>
                <span className="text-biem-secondary italic">Fallan por falta de estructura.</span>
              </h2>
              <p className="text-biem-secondary/60 text-xl mb-12 max-w-lg">
                El esfuerzo desordenado es el mayor enemigo del crecimiento. Sin un sistema, solo estás quemando recursos.
              </p>
            </motion.div>

            <div className="space-y-4">
              {[
                "No tienen claridad estratégica",
                "No entienden su modelo de crecimiento",
                "Ejecutan sin dirección",
                "Confunden actividad con avance",
                "Dependen de acciones aisladas"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm"
                >
                  <AlertCircle className="text-biem-accent shrink-0" size={24} />
                  <span className="text-lg font-bold text-slate-200">{item}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-8 flex items-center gap-4 text-biem-accent"
              >
                <ArrowRight size={32} />
                <span className="text-2xl font-black uppercase tracking-tighter italic">Y por eso, no escalan.</span>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUÉ ES BIEM */}
      <section className="py-32 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight text-biem-primary">
                BIEM no es una agencia tradicional.
              </h2>
              <p className="text-2xl text-slate-600 font-medium leading-relaxed">
                Somos una firma que combina diagnóstico, estrategia y ejecución técnica. Integramos lo que la mayoría trabaja separado.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2.5rem] overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
                alt="Reunión estratégica BIEM" 
                className="w-full h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Diagnóstico de negocio", icon: <Search size={32} /> },
              { title: "Estrategia de crecimiento", icon: <Target size={32} /> },
              { title: "Estructura operativa", icon: <Layers size={32} /> },
              { title: "Activación digital", icon: <Zap size={32} /> }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, borderColor: '#dfc3fa', backgroundColor: 'rgba(223, 195, 250, 0.1)' }}
                className="p-10 border border-slate-100 rounded-3xl transition-all group"
              >
                <div className="mb-8 text-biem-primary/30 group-hover:text-biem-primary transition-colors">
                  {item.icon}
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-biem-primary shrink-0" size={20} />
                  <h3 className="text-xl font-black tracking-tight">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LÍNEAS DE SERVICIO */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-biem-primary">Trabajamos en dos niveles</h2>
            <div className="h-1.5 w-24 bg-biem-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Nivel 1 */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-6xl font-black text-biem-secondary/30">01</span>
                <div className="p-4 bg-biem-secondary/20 rounded-2xl text-biem-primary">
                  <TrendingUp size={32} />
                </div>
              </div>
              <h3 className="text-3xl font-black mb-8 tracking-tight uppercase text-biem-primary">Consultoría estratégica</h3>
              <ul className="space-y-6 flex-grow">
                {[
                  "Diagnóstico profundo del negocio",
                  "Definición de modelo de crecimiento",
                  "Estructura de oferta, comunicación y ventas"
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                    <ChevronRight className="text-biem-primary mt-1 shrink-0" size={20} />
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nivel 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="text-6xl font-black text-biem-secondary/30">02</span>
                <div className="p-4 bg-biem-primary/5 rounded-2xl text-biem-primary">
                  <Zap size={32} />
                </div>
              </div>
              <h3 className="text-3xl font-black mb-8 tracking-tight uppercase text-biem-primary">Implementación y activación</h3>
              <ul className="space-y-6 flex-grow">
                {[
                  "Sistemas digitales",
                  "Contenido estratégico",
                  "Automatización y embudos",
                  "Optimización continua"
                ].map((li, i) => (
                  <li key={i} className="flex items-start gap-4 text-lg text-slate-600 font-medium">
                    <ChevronRight className="text-biem-primary mt-1 shrink-0" size={20} />
                    {li}
                  </li>
                ))}
              </ul>
              <div className="mt-10 pt-8 border-t border-slate-100">
                <p className="text-sm font-black text-biem-primary uppercase tracking-widest mb-6">También integramos capacidades avanzadas para optimizar la operación y las ventas:</p>
                <ul className="space-y-4">
                  {[
                    "Asistentes de ventas personalizados",
                    "Asistentes de servicio al cliente digital",
                    "Automatización de conversaciones y procesos",
                    "Sistemas de respuesta y seguimiento"
                  ].map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-base text-slate-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-biem-accent rounded-full mt-2 shrink-0"></div>
                      {li}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-biem-primary font-bold italic border-l-2 border-biem-accent pl-4">
                  Estos sistemas no son herramientas sueltas. Son parte de la estructura que permite escalar un negocio sin depender de procesos manuales.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-2xl font-black uppercase italic tracking-tighter">
            <div className="flex items-center gap-4 text-slate-400">
              <ArrowRight />
              <span>Estrategia sin ejecución no sirve.</span>
            </div>
            <div className="flex items-center gap-4 text-biem-primary">
              <ArrowRight />
              <span>Ejecución sin estrategia no escala.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. METODOLOGÍA */}
      <section id="metodologia" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[0.9] tracking-tight text-biem-primary">
                Nuestro enfoque no es creativo.<br/>
                <span className="text-biem-primary italic">Es estructural.</span>
              </h2>
              <p className="text-xl text-slate-600 font-medium mb-10">
                Trabajamos bajo un sistema riguroso para garantizar que cada acción tenga un propósito comercial claro.
              </p>
              <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2070" 
                  alt="Metodología BIEM" 
                  className="w-full h-[250px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                { title: "Análisis", desc: "Identificamos la raíz del problema, no los síntomas." },
                { title: "Claridad", desc: "Definimos dirección, enfoque y modelo." },
                { title: "Arquitectura", desc: "Construimos el sistema que soporta el crecimiento." },
                { title: "Ejecución", desc: "Activamos y medimos." }
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border-l-4 border-biem-secondary hover:border-biem-primary transition-all bg-white shadow-sm"
                >
                  <span className="text-xs font-black text-biem-primary uppercase tracking-widest mb-4 block">Fase 0{i+1}</span>
                  <h4 className="text-2xl font-black mb-4 uppercase tracking-tight text-biem-primary">{step.title}</h4>
                  <p className="text-slate-600 font-medium leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRANSFORMACIÓN */}
      <section className="py-32 bg-biem-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Esto es lo que pasa cuando hay estructura</h2>
            <p className="text-biem-secondary text-2xl font-black italic tracking-tighter uppercase">No es marketing. Es sistema.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { from: "Negocios sin dirección", to: "Negocios con sistema claro de crecimiento" },
              { from: "Marcas inexistentes", to: "Marcas posicionadas estratégicamente" },
              { from: "Empresas fuera de lo digital", to: "Empresas activas y generando demanda" },
              { from: "Esfuerzo desorganizado", to: "Resultados medibles" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-3xl">
                <div className="flex-1 text-center md:text-right text-biem-secondary/40 font-bold line-through opacity-50">{item.from}</div>
                <ArrowRight className="text-biem-accent shrink-0 rotate-90 md:rotate-0" size={24} />
                <div className="flex-1 text-center md:text-left text-white font-black text-xl tracking-tight">{item.to}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📩 SECCIÓN: BIEM INSIGHTS */}
      <section id="insights" className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Elements for Structure */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-100"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-100"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-slate-50 -translate-x-1/2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-40"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-biem-primary text-white rounded-2xl flex items-center justify-center shadow-lg shadow-biem-primary/20">
                  <BookOpen size={24} />
                </div>
                <div>
                  <span className="text-xs font-black tracking-[0.4em] uppercase text-biem-primary block">Inteligencia de Negocio</span>
                  <span className="text-lg font-black text-biem-primary tracking-tight">BIEM INSIGHTS</span>
                </div>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tight text-biem-primary leading-[0.9] lg:max-w-md">
                No necesitas más contenido.<br/>
                <span className="text-biem-accent italic">Necesitas mejores decisiones.</span>
              </h2>
              
              <p className="text-xl text-slate-600 font-medium mb-12 leading-relaxed max-w-lg">
                BIEM INSIGHTS es nuestro canal estratégico donde compartimos análisis profundos, enfoques no convencionales y estrategias reales para estructurar y escalar negocios.
              </p>
              
              <div className="p-8 bg-biem-secondary/10 rounded-3xl border border-biem-secondary/30 mb-12">
                <p className="text-biem-primary font-black uppercase tracking-widest text-xs mb-4 flex items-center gap-3">
                  <div className="w-6 h-[2px] bg-biem-primary"></div>
                  El Compromiso de Valor
                </p>
                <p className="text-xl text-biem-primary font-bold italic leading-snug">
                  "Cero ruido. Cero relleno. Solo enviamos lo que tiene el potencial de mover la aguja en tu estructura comercial."
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: "Análisis Real", desc: "Qué está funcionando hoy." },
                  { title: "Diagnóstico", desc: "Errores que frenan el flujo." },
                  { title: "Estrategia", desc: "Decisiones de alto impacto." },
                  { title: "Estructura", desc: "Sistemas para escalar." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 p-1 bg-biem-primary/10 rounded-full">
                      <CheckCircle2 className="text-biem-primary" size={16} />
                    </div>
                    <div>
                      <h4 className="font-black text-biem-primary uppercase tracking-tight text-sm mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-10 md:p-16 rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(83,46,142,0.12)] border border-slate-100 relative z-10"
              >
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-biem-primary mb-4">¡Bienvenido a BIEM Insights!</h3>
                    <p className="text-slate-600 font-medium mb-8">Hemos enviado un correo de confirmación. Prepárate para recibir inteligencia de negocio real.</p>
                    <button 
                      onClick={() => setStatus('idle')}
                      className="text-biem-primary font-bold uppercase tracking-widest text-sm hover:underline"
                    >
                      Volver al formulario
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleInsightsSubmit} className="space-y-10">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-biem-primary tracking-tight">Suscríbete al canal</h3>
                      <p className="text-slate-500 font-medium">Únete a líderes que prefieren la estrategia sobre la improvisación.</p>
                    </div>

                    <div className="space-y-8">
                      <div>
                        <label className="block text-[10px] font-black text-biem-primary/40 uppercase tracking-[0.3em] mb-3">Nombre</label>
                        <input
                          type="text"
                          required
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-biem-primary text-xl font-bold focus:outline-none focus:border-biem-primary transition-all placeholder:text-slate-300"
                          placeholder="Tu nombre"
                          value={insightsData.nombre}
                          onChange={(e) => setInsightsData({...insightsData, nombre: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-biem-primary/40 uppercase tracking-[0.3em] mb-3">Correo electrónico</label>
                        <input
                          type="email"
                          required
                          className="w-full px-0 py-4 bg-transparent border-b-2 border-slate-100 text-biem-primary text-xl font-bold focus:outline-none focus:border-biem-primary transition-all placeholder:text-slate-300"
                          placeholder="email@empresa.com"
                          value={insightsData.email}
                          onChange={(e) => setInsightsData({...insightsData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full py-6 bg-biem-accent text-white font-black rounded-2xl hover:bg-biem-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all text-xl uppercase tracking-tight shadow-xl shadow-biem-accent/20 flex items-center justify-center gap-3 group"
                      >
                        {status === 'submitting' ? 'Procesando...' : (
                          <>
                            Recibir BIEM INSIGHTS
                            <Mail size={24} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                      <div className="flex items-center justify-center gap-2 text-biem-primary/40">
                        <Zap size={14} />
                        <p className="text-xs font-bold uppercase tracking-widest">
                          Sin ruido. Solo valor aplicable.
                        </p>
                      </div>
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Bloque de activación - Entry to Consultancy */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 p-10 bg-biem-primary text-white rounded-[3rem] shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                  <Target size={120} />
                </div>
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-biem-accent rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                    Bonus de Registro
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">Empieza con claridad estratégica</h4>
                  <p className="text-biem-secondary/80 text-lg font-medium leading-relaxed mb-6">
                    Al registrarte, recibirás de inmediato nuestro <span className="text-white font-bold">Diagnóstico de Errores Críticos</span>: un análisis de los 5 fallos estructurales que frenan el 90% de los negocios y la hoja de ruta para solucionarlos.
                  </p>
                  <div className="flex items-center gap-2 text-biem-accent font-black uppercase tracking-tighter italic">
                    <ArrowRight size={20} />
                    <span>Tu primer paso hacia la consultoría.</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENFOQUE (FILTRADO DURO) */}
      <section id="enfoque" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-biem-primary">BIEM no es para todo el mundo.</h2>
            <div className="h-1.5 w-24 bg-biem-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Sí */}
            <div className="p-12 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tight flex items-center gap-3 text-emerald-900">
                <CheckCircle2 className="text-emerald-600" />
                Trabajamos con:
              </h3>
              <ul className="space-y-6">
                {[
                  "Negocios que quieren escalar",
                  "Equipos que toman decisiones",
                  "Marcas que entienden el valor de la estrategia"
                ].map((li, i) => (
                  <li key={i} className="text-lg font-bold text-slate-700 flex items-center gap-4">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    {li}
                  </li>
                ))}
              </ul>
            </div>

            {/* No */}
            <div className="p-12 bg-red-50/50 rounded-[2.5rem] border border-red-100">
              <h3 className="text-2xl font-black mb-10 uppercase tracking-tight flex items-center gap-3 text-red-900">
                <XCircle className="text-red-600" />
                No trabajamos con:
              </h3>
              <ul className="space-y-6">
                {[
                  "Quien busca “posts bonitos”",
                  "Quien no está listo para estructurarse",
                  "Quien quiere resultados sin proceso"
                ].map((li, i) => (
                  <li key={i} className="text-lg font-bold text-slate-700 flex items-center gap-4 opacity-70">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CERCANÍA */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Users className="mx-auto mb-10 text-biem-secondary" size={64} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight text-biem-primary">
            Trabajamos de cerca.<br/>
            <span className="text-biem-accent italic">Pero no trabajamos a la ligera.</span>
          </h2>
          <p className="text-2xl text-slate-600 font-medium leading-relaxed">
            Nos involucramos en tu negocio como un socio estratégico, no como un proveedor más. Tu crecimiento es la métrica de nuestro éxito.
          </p>
        </div>
      </section>

      {/* 🧠 3. MINI TEST (DIAGNÓSTICO RÁPIDO) */}
      <section className="py-32 bg-[#dfc3fa]/10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-biem-primary">
              ¿En qué estado está tu negocio hoy?
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              Responde estas preguntas y entiende por qué no estás creciendo como deberías.
            </p>
          </div>

          <motion.div 
            layout
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-biem-secondary/30 relative"
          >
            {!testResult ? (
              <div className="space-y-10">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-black text-biem-primary/40 uppercase tracking-[0.3em]">Pregunta {testStep + 1} de {questions.length}</span>
                  <div className="flex gap-1">
                    {questions.map((_, i) => (
                      <div key={i} className={`h-1 w-8 rounded-full transition-all ${i <= testStep ? 'bg-biem-primary' : 'bg-slate-100'}`}></div>
                    ))}
                  </div>
                </div>

                <motion.h3 
                  key={testStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-2xl md:text-3xl font-black text-biem-primary tracking-tight mb-10"
                >
                  {questions[testStep].q}
                </motion.h3>

                <div className="grid gap-4">
                  {questions[testStep].options.map((option, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, x: 10 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswer(i)}
                      className="w-full p-6 text-left border-2 border-slate-100 rounded-2xl text-lg font-bold text-biem-primary hover:border-biem-primary hover:bg-biem-primary/5 transition-all flex justify-between items-center group"
                    >
                      {option}
                      <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                {testResult === 'desordenado' && (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <div className="w-10 h-10 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl font-black text-red-600 uppercase tracking-tighter italic">🔴 Desordenado</h3>
                    <p className="text-2xl font-bold text-biem-primary">Tu negocio está operando sin estructura.</p>
                    <p className="text-slate-600 text-lg">Necesitas claridad urgente.</p>
                  </div>
                )}
                {testResult === 'proceso' && (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <div className="w-10 h-10 bg-amber-600 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl font-black text-amber-600 uppercase tracking-tighter italic">🟡 En proceso</h3>
                    <p className="text-2xl font-bold text-biem-primary">Hay avances, pero no hay un sistema sólido.</p>
                    <p className="text-slate-600 text-lg">Estás cerca, pero no estás optimizado.</p>
                  </div>
                )}
                {testResult === 'estructurado' && (
                  <div className="space-y-6">
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-4xl font-black text-emerald-600 uppercase tracking-tighter italic">🟢 Estructurado</h3>
                    <p className="text-2xl font-bold text-biem-primary">Tienes bases, pero puedes escalar mejor con estrategia.</p>
                  </div>
                )}

                <div className="mt-12 space-y-4">
                  <motion.a
                    href="#form"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-biem-accent text-white font-black rounded-xl shadow-xl shadow-biem-accent/20 text-lg uppercase tracking-tight"
                  >
                    Solicitar diagnóstico estratégico
                  </motion.a>
                  <button 
                    onClick={resetTest}
                    className="block mx-auto text-xs font-black text-biem-primary/40 uppercase tracking-widest hover:text-biem-primary transition-colors"
                  >
                    Repetir test
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 9. CTA FINAL */}
      <section id="form" className="py-32 bg-biem-primary text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tight">
                Si tu negocio no está creciendo, no necesitas más contenido.
              </h2>
              <p className="text-3xl font-black italic uppercase tracking-tighter mb-12 text-biem-secondary">
                Necesitas estructura.
              </p>
              
              <div className="p-8 bg-white/10 rounded-3xl border border-white/20 backdrop-blur-md">
                <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 italic">Solicita hoy mismo:</p>
                <p className="text-2xl font-black tracking-tight">Diagnóstico Estratégico de Negocio</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl"
            >
              <iframe 
                width="540" 
                height="305" 
                src="https://ac1acf0a.sibforms.com/serve/MUIFAMW7ZYPxD6tMMYxak-GksTlTNvrTt-fihmq6g2f-PwVzB40t6KfGs7cwiHzGaVKI8crJyq9KljUo0-Ag0P5vipwwlAwgwA1jVBUsr25YAm-JA6Nmignkn7VTkHND2obikjSJs7Gn3MDeBDAT92EBIGrCEa3CJpp_ColRsz3HGn5LLfhkT_DXGWi0zCjlpHh4IouFmYUwbiRdyQ==" 
                frameBorder="0" 
                scrolling="auto" 
                allowFullScreen 
                style={{ display: 'block', margin: '0 auto', maxWidth: '100%', border: 'none' }}
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20"></div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white">
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
