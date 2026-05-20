import linhaJornada from '../assets/linha-jornada.svg';
import circuloAmarelo from '../assets/circulo-amarelo.svg';
import iconeAmarelo from '../assets/icone-amarelo.png';
import JourneyPoint from '../components/JourneyPoint';

export default function Journey() {
  return (
    <section id="jornada" className="w-full bg-[#F5F5F5] flex justify-center relative z-20 py-16 border-t border-gray-200 overflow-hidden">
      <div className="w-full max-w-[1440px] px-8 flex flex-col items-center gap-12">
        
        <div className="flex flex-col gap-3 max-w-2xl text-center items-center relative z-20">
          <h2 className="text-3xl font-extrabold text-[#003454] uppercase tracking-wide">
            Sua jornada com a <span className="text-[#CCA349]">HØST</span>
          </h2>
          <p className="text-[#534C49] text-base leading-relaxed max-w-xl">
            Não importa em qual fase seu negócio está, a HØST cuida de cada etapa da sua operação para entregar tranquilidade, eficiência e resultados.
          </p>
        </div>

        <div className="relative w-full max-w-[600px] mx-auto hidden lg:block mt-10 mb-20">
          
          <img 
            src={linhaJornada} 
            alt="Linha do tempo" 
            className="w-full h-auto object-contain block opacity-80"
          />

          <div className="absolute top-[0%] left-[10%] -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-20 h-20">
            <img src={circuloAmarelo} alt="Círculo Amarelo" className="absolute w-full h-full object-contain" />
            <img src={iconeAmarelo} alt="Ícone Amarelo" className="absolute w-7 h-7 object-contain z-10 -translate-y-1" />
          </div>

          <JourneyPoint 
            number={1} title="Comece do jeito certo" description="Estruturamos seu negócio com processos claros e estratégias práticas."
            dotPosition="top-[0%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={2} title="Planejamento estratégico" description="Diagnóstico e plano de ação para resultados mensuráveis."
            dotPosition="top-[16.6%] left-[100%]"
            textPosition="top-1/2 left-[30px] -translate-y-1/2" textAlign="text-left"
          />

          <JourneyPoint 
            number={3} title="Outsourcing de Equipamentos" description="Reduza custos e aumente sua eficiência operacional."
            dotPosition="top-[33.3%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={4} title="Serviços organizados" description="Centralizamos a gestão de serviços essenciais para operação."
            dotPosition="top-[50%] left-[0%]"
            textPosition="top-1/2 right-[30px] -translate-y-1/2" textAlign="text-right"
          />

          <JourneyPoint 
            number={5} title="Conexões valiosas" description="Rede exclusiva de fornecedores, parceiros e especialistas confiáveis."
            dotPosition="top-[66.6%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

          <JourneyPoint 
            number={6} title="Resultados consistentes" description="Economia, eficiência e um ecossistema otimizado."
            dotPosition="top-[83.3%] left-[100%]"
            textPosition="top-1/2 left-[30px] -translate-y-1/2" textAlign="text-left"
          />

          <JourneyPoint 
            number={7} title="Crescimento contínuo" description="Estamos ao seu lado para ajustar, escalar e inovar conforme seu negócio evoluir."
            dotPosition="top-[100%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2" textAlign="text-center"
          />

        </div>
      </div>
    </section>
  );
}