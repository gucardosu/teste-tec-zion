import { motion } from 'framer-motion';
import linhaJornada from '../assets/linha-jornada.svg';
import circuloAmarelo from '../assets/circulo-amarelo.svg';
import iconeAmarelo from '../assets/icone-amarelo.png';
import JourneyPoint from '../components/JourneyPoint';

export default function Journey() {
  return (
    <section id="jornada" className="w-full bg-[#F5F5F5] flex justify-center relative z-20 py-24 border-t border-gray-200 overflow-hidden">
      <div className="w-full max-w-[1440px] px-12 flex flex-col items-center gap-16">
        
        <div className="flex flex-col gap-4 max-w-3xl text-center items-center relative z-20">
          <h2 className="text-4xl font-extrabold text-[#003454] uppercase tracking-wide">
            Sua jornada com a <span className="text-[#CCA349]">HØST</span>
          </h2>
          <p className="text-[#534C49] text-lg leading-relaxed max-w-2xl">
            Não importa em qual fase seu negócio está, a HØST cuida de cada etapa da sua operação para entregar tranquilidade, eficiência e resultados.
          </p>
        </div>

        <div className="relative w-full max-w-[700px] mx-auto hidden lg:block mt-16 mb-24">
          
          <img 
            src={linhaJornada} 
            alt="Linha do tempo" 
            className="w-full h-auto object-contain block opacity-80"
          />

          <div className="absolute top-[0%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-24 h-24">
            <img src={circuloAmarelo} alt="Círculo Amarelo" className="absolute w-full h-full object-contain" />
            <img src={iconeAmarelo} alt="Ícone Amarelo" className="absolute w-9 h-9 object-contain z-10 -translate-y-1.5" />
          </div>

          <JourneyPoint 
            number={1} title="Comece do jeito certo" description="Estruturamos seu negócio com processos claros e estratégias práticas."
            dotPosition="top-[0%] left-[50%]"
            textPosition="top-[35px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={2} title="Planejamento estratégico" description="Diagnóstico e plano de ação para resultados mensuráveis."
            dotPosition="top-[16.6%] left-[100%]"
            textPosition="top-1/2 left-[40px] -translate-y-1/2" textAlign="text-left"
          />

          <JourneyPoint 
            number={3} title="Outsourcing de Equipamentos" description="Reduza custos e aumente sua eficiência operacional."
            dotPosition="top-[33.3%] left-[50%]"
            textPosition="top-[35px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={4} title="Serviços organizados" description="Centralizamos a gestão de serviços essenciais para operação."
            dotPosition="top-[50%] left-[0%]"
            textPosition="top-1/2 right-[40px] -translate-y-1/2" textAlign="text-right"
          />

          <JourneyPoint 
            number={5} title="Conexões valiosas" description="Rede exclusiva de fornecedores, parceiros e especialistas confiáveis."
            dotPosition="top-[66.6%] left-[50%]"
            textPosition="top-[35px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={6} title="Resultados consistentes" description="Economia, eficiência e um ecossistema otimizado."
            dotPosition="top-[83.3%] left-[100%]"
            textPosition="top-1/2 left-[40px] -translate-y-1/2" textAlign="text-left"
          />

          <JourneyPoint 
            number={7} title="Crescimento contínuo" description="Estamos ao seu lado para ajustar, escalar e inovar conforme seu negócio evoluir."
            dotPosition="top-[100%] left-[50%]"
            textPosition="top-[35px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

        </div>

        <div className="lg:hidden flex flex-col gap-6 mt-10 w-full max-w-md">
          {[
            {n:1, t:"Comece do jeito certo", d:"Estruturamos seu negócio com processos claros e estratégias práticas."},
            {n:2, t:"Planejamento estratégico", d:"Diagnóstico e plano de ação para resultados mensuráveis."},
            {n:3, t:"Outsourcing de Equipamentos", d:"Reduza custos e aumente sua eficiência operacional."},
            {n:4, t:"Serviços organizados", d:"Centralizamos a gestão de serviços essenciais para operação."},
            {n:5, t:"Conexões valiosas", d:"Rede exclusiva de fornecedores, parceiros e especialistas confiáveis."},
            {n:6, t:"Resultados consistentes", d:"Economia, eficiência e um ecossistema otimizado."},
            {n:7, t:"Crescimento contínuo", d:"Estamos ao seu lado para ajustar, escalar e inovar conforme seu negócio evoluir."}
          ].map(passo => (
            <div key={passo.n} className="flex gap-4 items-center bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-[#003454] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-lg">{passo.n}</span>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#003454] font-bold text-sm uppercase">{passo.t}</h4>
                <p className="text-[#534C49] text-xs mt-1">{passo.d}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}