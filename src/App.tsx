/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  Check, 
  X, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Clock, 
  MessageSquare, 
  Send,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const HexBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 hex-bg opacity-30 animate-[pulse_10s_ease-in-out_infinite]"></div>
    <div className="absolute inset-0 matrix-bg opacity-50"></div>
    <div className="scanline"></div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-hacker-black/80 backdrop-blur-md border-b border-neon-green/10 py-4 px-6 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Unlock className="text-neon-green w-6 h-6 neon-glow" />
      <span className="font-bold text-xl tracking-tighter neon-glow">
        CLONESEC <span className="text-neon-green">PRO</span>
      </span>
    </div>
    <div className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest text-white/60">
      <a href="#provas" className="hover:text-neon-green transition-colors">Provas</a>
      <a href="#metodo" className="hover:text-neon-green transition-colors">Método</a>
      <a href="#depoimentos" className="hover:text-neon-green transition-colors">Depoimentos</a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 px-6 max-w-5xl mx-auto text-center z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="inline-block px-4 py-1 border border-neon-green/30 rounded-full text-[10px] uppercase tracking-[0.2em] text-neon-green mb-6 bg-neon-green/5">
        Acesso Restrito: Protocolo H-Inject Ativo
      </div>
      <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 tracking-tight">
        Leia as mensagens do WhatsApp dele em <span className="text-neon-green underline decoration-neon-green/30">7 minutos</span>… sem tocar no celular dele!
      </h1>
      <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto">
        Testado por 13.482 mulheres e 6.119 homens – <span className="text-white font-bold">96% obtiveram PROVAS</span> em menos de 24 h.
      </p>
      
      <a 
        href="#survey"
        className="inline-flex items-center gap-3 bg-hacker-black border-2 border-neon-green px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-wider hover:bg-neon-green hover:text-hacker-black transition-all duration-300 neon-border group"
      >
        Quero acesso imediato
        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-white/40 uppercase tracking-widest">
        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-green" /> 100% Invisível</div>
        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-green" /> Sem Root/Jailbreak</div>
        <div className="flex items-center gap-2"><Check className="w-4 h-4 text-neon-green" /> Android & iOS</div>
      </div>
    </motion.div>
  </section>
);

const SocialProof = () => (
  <section id="provas" className="relative py-20 px-6 z-10 bg-white/5 backdrop-blur-sm border-y border-white/5">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Dor & Ganho: Resultados Reais</h2>
        <p className="text-white/60">Essas imagens chegaram aos clientes depois de seguirem os 3 passos que você vai receber agora.</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-hacker-black/80 p-4 rounded-xl border border-white/10">
          <div className="aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden relative mb-4">
            <img 
              src="https://i.ibb.co/YCVLJ1H/Gemini-Generated-Image-mqqesxmqqesxmqqe.png" 
              alt="WhatsApp Print 1" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
              <div className="bg-neon-green/20 border border-neon-green/40 p-3 rounded-lg backdrop-blur-md">
                <p className="text-sm font-bold text-neon-green">"Baby, vou te pegar no motel 19 h"</p>
                <p className="text-[10px] text-white/60">Mensagem ocultada e recuperada</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-white/40 italic">Print 1: Conversa interceptada em tempo real.</p>
        </div>
        
        <div className="bg-hacker-black/80 p-4 rounded-xl border border-white/10">
          <div className="aspect-[9/16] bg-zinc-900 rounded-lg overflow-hidden relative mb-4">
            <img 
              src="https://i.ibb.co/Z6CDLS7w/Gemini-Generated-Image-68dqzc68dqzc68dq.png" 
              alt="Pix Print" 
              className="w-full h-full object-cover opacity-50 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
              <div className="bg-neon-green/20 border border-neon-green/40 p-3 rounded-lg backdrop-blur-md">
                <p className="text-sm font-bold text-neon-green">Comprovante Pix: R$ 250,00</p>
                <p className="text-[10px] text-white/60">Destino: Motel Paradiso</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-center text-white/40 italic">Print 2: Movimentação financeira monitorada.</p>
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-medium leading-relaxed">
          “Se você já sentiu o coração disparar ao ver ele(ela) sorrir pro celular…<br/>
          Se já pegou o aparelho virado pra baixo…<br/>
          Se já ouviu <span className="text-neon-green">'é só minha prima'</span>…<br/>
          <span className="font-bold">Você precisa de verdades, não desculpas.</span>”
        </p>
      </div>
    </div>
  </section>
);

const Checklist = () => {
  const [checked, setChecked] = useState<number[]>([]);
  const items = [
    "Ele vira o celular quando você se aproxima?",
    "Whatsapp 'online' de madrugada, mas diz que estava dormindo?",
    "Apagou foto de perfil ou trocou senha recentemente?",
    "Reação nervosa quando você pega o celular?",
    "Histórico de traição no passado dele(a)?"
  ];

  const toggle = (index: number) => {
    if (checked.includes(index)) {
      setChecked(checked.filter(i => i !== index));
    } else {
      setChecked([...checked, index]);
    }
  };

  return (
    <section className="relative py-20 px-6 z-10">
      <div className="max-w-3xl mx-auto bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Auto-questionário rápido</h2>
        <p className="text-white/60 mb-8 text-center">Marque quanto se aplica à sua situação:</p>
        
        <div className="space-y-4 mb-10">
          {items.map((item, i) => (
            <div 
              key={i} 
              onClick={() => toggle(i)}
              className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${checked.includes(i) ? 'bg-neon-green/10 border-neon-green' : 'bg-white/5 border-white/10 hover:border-white/20'}`}
            >
              <div className={`w-6 h-6 rounded flex items-center justify-center border ${checked.includes(i) ? 'bg-neon-green border-neon-green' : 'border-white/30'}`}>
                {checked.includes(i) && <Check className="w-4 h-4 text-hacker-black" />}
              </div>
              <span className={checked.includes(i) ? 'text-white' : 'text-white/70'}>{item}</span>
            </div>
          ))}
        </div>

        {checked.length >= 3 && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-500/10 border border-red-500/30 p-6 rounded-2xl text-center"
          >
            <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-3" />
            <p className="text-red-500 font-bold">ALERTA DE RISCO ALTO</p>
            <p className="text-sm text-white/80">
              Se marcou ≥ 3, 89% das pessoas nessa lista encontraram uma traição ativa – e você também pode.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

const Solution = () => (
  <section id="metodo" className="relative py-20 px-6 z-10">
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">A Tecnologia por trás do <span className="text-neon-green">CloneSec Pro</span></h2>
          <p className="text-lg text-white/70 mb-8">
            “CloneSec Pro não é aplicativo rastreador da loja – é o <span className="text-white font-bold">protocolo H-Inject</span> que cria espelho do WhatsApp dele no seu celular em menos de 7 minutos.”
          </p>
          <ul className="space-y-4">
            {[
              { icon: <Clock className="text-neon-green" />, text: "7 min de instalação (reprodução passo-a-passo)" },
              { icon: <ShieldCheck className="text-neon-green" />, text: "Invisível: ícone oculto após ativação" },
              { icon: <Zap className="text-neon-green" />, text: "Atualiza mensagens em tempo real (mesmo que ele apague)" },
              { icon: <Eye className="text-neon-green" />, text: "Backup criptografado na nuvem (acesso de qualquer lugar)" },
              { icon: <Send className="text-neon-green" />, text: "Suporte via Telegram 24h em menos de 15 min" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="mt-1">{item.icon}</div>
                <span className="text-white/80">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-neon-green/20 blur-3xl rounded-full"></div>
          <div className="relative bg-hacker-black border border-neon-green/30 p-8 rounded-3xl neon-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-neon-green/10 rounded-full flex items-center justify-center">
                <ShieldCheck className="text-neon-green w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold">Garantia Absoluta</h3>
                <p className="text-xs text-white/50">Risco Zero para você</p>
              </div>
            </div>
            <p className="text-sm text-white/70 italic mb-6">
              "7 dias ou seu dinheiro de volta. Sem perguntas. Basta mandar um print da última mensagem que você quis hackear e devolvemos 100% no mesmo instante."
            </p>
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neon-green">
              <Check className="w-3 h-3" /> Selo de Segurança Verificado
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="depoimentos" className="relative py-20 px-6 z-10 bg-white/5">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Quem já descobriu a verdade</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            name: "Patrícia", age: 33, city: "GO",
            text: "Descobri que meu marido tinha outra família. Se não fosse o CloneSec, eu continuaria sendo a trouxa. Hoje decido meu futuro.",
            img: "https://picsum.photos/seed/patricia/100/100"
          },
          {
            name: "Marcos", age: 41, city: "RJ",
            text: "Peguei print das conversas, mandei pro advogado. Perdi medo, ganhei prova.",
            img: "https://picsum.photos/seed/marcos/100/100"
          }
        ].map((t, i) => (
          <div key={i} className="bg-hacker-black p-6 rounded-2xl border border-white/10 flex gap-4">
            <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-neon-green/30" referrerPolicy="no-referrer" />
            <div>
              <p className="text-white/80 italic mb-3">"{t.text}"</p>
              <p className="text-xs font-bold text-neon-green">{t.name}, {t.age}, {t.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Offer = () => {
  const [timeLeft, setTimeLeft] = useState(172800); // 48 hours in seconds
  const [vagas, setVagas] = useState(80);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
      if (Math.random() > 0.95) setVagas(v => (v > 3 ? v - 1 : v));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="relative py-20 px-6 z-10">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-900 to-hacker-black border-2 border-neon-green p-8 md:p-16 rounded-[3rem] text-center neon-border">
        <div className="flex justify-center gap-8 mb-8">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Expira em</p>
            <p className="text-2xl font-mono text-neon-green">{formatTime(timeLeft)}</p>
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Vagas Restantes</p>
            <p className="text-2xl font-mono text-red-500">{vagas}</p>
          </div>
        </div>

        <p className="text-xl text-white/60 line-through mb-2">De R$ 97</p>
        <h2 className="text-5xl md:text-7xl font-black mb-4">R$ 27</h2>
        <p className="text-neon-green font-bold mb-10 uppercase tracking-widest">Acesso Vitalício - Pagamento Único</p>

        <a 
          href="https://pay.lowify.com.br/checkout?product_id=T5IPdU"
          className="block w-full bg-neon-green text-hacker-black font-black py-6 rounded-2xl text-2xl uppercase tracking-tighter hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] mb-6 text-center"
        >
          Quero descobrir a verdade agora
        </a>
        
        <div className="flex flex-wrap justify-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
          <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Pagamento Seguro</div>
          <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Liberação Imediata</div>
          <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> 7 Dias de Garantia</div>
        </div>
      </div>
    </section>
  );
};

const PreSaleForm = () => {
  const [step, setStep] = useState(0);
  const questions = [
    { q: "Há quanto tempo você desconfia?", options: ["Dias", "Semanas", "Meses", "Anos"] },
    { q: "Já conseguiu pegar o celular? Qual resultado?", options: ["Não consegui", "Peguei mas estava limpo", "Vi algo suspeito", "Ele(a) não deixa chegar perto"] },
    { q: "Sistema do celular dele(a):", options: ["Android", "iPhone", "Não sei"] },
    { q: "Você tem acesso físico ao celular dele por 7 min?", options: ["Sim", "Talvez", "Dificilmente"] },
    { q: "Qual o principal dado que você precisa?", options: ["Mensagens", "Fotos/Vídeos", "Ligações", "Localização"] },
    { q: "Se descobrir traição, o que pretende fazer?", options: ["Terminar", "Confrontar", "Apenas saber a verdade", "Consultar advogado"] }
  ];

  return (
    <section id="survey" className="relative py-20 px-6 z-10">
      <div className="max-w-2xl mx-auto bg-zinc-900 border border-white/10 p-8 rounded-3xl">
        <div className="flex justify-between items-center mb-8">
          <h3 className="font-bold text-neon-green uppercase tracking-widest text-xs">Triagem de Segurança</h3>
          <span className="text-xs text-white/40">{step + 1} / {questions.length}</span>
        </div>
        
        <div className="w-full bg-white/5 h-1 rounded-full mb-10">
          <div 
            className="bg-neon-green h-full rounded-full transition-all duration-500" 
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h4 className="text-xl font-bold mb-8">{questions[step].q}</h4>
            <div className="grid gap-4">
              {questions[step].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (step < questions.length - 1) {
                      setStep(step + 1);
                    } else {
                      window.location.href = "https://pay.lowify.com.br/checkout?product_id=T5IPdU";
                    }
                  }}
                  className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-neon-green hover:bg-neon-green/5 transition-all flex justify-between items-center group"
                >
                  {opt}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ExitPopup = () => {
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 0) setShow(true);
    };
    document.addEventListener('mouseleave', handleMouseOut);
    return () => document.removeEventListener('mouseleave', handleMouseOut);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-hacker-black/90 backdrop-blur-xl">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-md w-full bg-zinc-900 border-2 border-red-500 p-8 rounded-[2rem] text-center relative"
      >
        <button onClick={() => setShow(false)} className="absolute top-4 right-4 text-white/40 hover:text-white">
          <X className="w-6 h-6" />
        </button>
        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
        <h2 className="text-3xl font-black mb-4">ESPERE!</h2>
        <p className="text-white/70 mb-8">
          Ainda restam <span className="text-red-500 font-bold">3 vagas</span> com 62% de desconto. Não saia sem a sua verdade.
        </p>
        <a 
          href="https://pay.lowify.com.br/checkout?product_id=T5IPdU"
          className="block w-full bg-red-500 text-white font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-red-600 transition-colors text-center"
        >
          Garantir minha vaga agora
        </a>
      </motion.div>
    </div>
  );
};

const Footer = () => (
  <footer className="relative py-12 px-6 z-10 border-t border-white/5 bg-hacker-black">
    <div className="max-w-5xl mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-6">
        <Unlock className="text-neon-green w-5 h-5" />
        <span className="font-bold tracking-tighter">CLONESEC <span className="text-neon-green">PRO</span></span>
      </div>
      <p className="text-[10px] text-white/30 max-w-2xl mx-auto leading-relaxed uppercase tracking-widest mb-8">
        Aviso legal: este material foi criado para fins de segurança da informação e monitoramento dos próprios filhos ou beneficiários. O uso indevido é de responsabilidade do contratante. Atualizações inclusas, cancele quando quiser, sem fidelidade.
      </p>
      <div className="flex justify-center gap-6 text-[10px] text-white/40 uppercase tracking-widest">
        <a href="#" className="hover:text-white">Termos de Uso</a>
        <a href="#" className="hover:text-white">Privacidade</a>
        <a href="#" className="hover:text-white">LGPD</a>
      </div>
    </div>
  </footer>
);

const FixedCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-6 left-0 w-full px-6 z-[60] md:hidden"
        >
          <a 
            href="https://pay.lowify.com.br/checkout?product_id=T5IPdU"
            className="block w-full bg-neon-green text-hacker-black font-black py-4 rounded-xl text-center uppercase tracking-widest shadow-2xl"
          >
            Quero acesso imediato &gt;&gt;
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen relative">
      <HexBackground />
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Checklist />
        <Solution />
        <Testimonials />
        <PreSaleForm />
        <Offer />
      </main>

      <Footer />
      <FixedCTA />
      <ExitPopup />
    </div>
  );
}
