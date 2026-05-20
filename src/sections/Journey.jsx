import linhaJornada from "../assets/linha-jornada.svg";
import circuloAmarelo from "../assets/circulo-amarelo.svg";
import iconeAmarelo from "../assets/icone-amarelo.png";
import JourneyPoint from "../components/JourneyPoint";

export default function Journey() {
  const steps = [
    {
      n: 1,
      t: "Comece do jeito certo",
      d: "Estruturamos seu negócio com processos claros e estratégias práticas.",
    },
    {
      n: 2,
      t: "Planejamento estratégico",
      d: "Diagnóstico e plano de ação para resultados mensuráveis.",
    },
    {
      n: 3,
      t: "Outsourcing de Equipamentos",
      d: "Reduza custos e aumente sua eficiência operacional.",
    },
    {
      n: 4,
      t: "Serviços organizados",
      d: "Centralizamos a gestão de serviços essenciais para operação.",
    },
    {
      n: 5,
      t: "Conexões valiosas",
      d: "Rede exclusiva de fornecedores, parceiros e especialistas confiáveis.",
    },
    {
      n: 6,
      t: "Resultados consistentes",
      d: "Economia, eficiência e um ecossistema otimizado.",
    },
    {
      n: 7,
      t: "Crescimento contínuo",
      d: "Estamos ao seu lado para ajustar, escalar e inovar conforme seu negócio evoluir.",
    },
  ];

  return (
    <section
      id="jornada"
      className="w-full bg-[#F5F5F5] py-16 border-t border-gray-200"
    >
      <div className="w-full max-w-[1440px] px-6 mx-auto flex flex-col items-center gap-12">
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#003454] uppercase tracking-wide mb-4">
            Sua jornada com a <span className="text-[#CCA349]">HØST</span>
          </h2>
          <p className="text-[#534C49] text-sm md:text-base leading-relaxed">
            Não importa em qual fase seu negócio está, a HØST cuida de cada
            etapa da sua operação para entregar tranquilidade, eficiência e
            resultados.
          </p>
        </div>

        <div className="md:hidden flex flex-col gap-8 w-full max-w-[400px]">
          {steps.map((s) => (
            <div key={s.n} className="flex gap-4">
              <div className="w-10 h-10 bg-[#003454] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                {s.n}
              </div>
              <div>
                <h4 className="text-[#003454] font-bold text-sm">{s.t}</h4>
                <p className="text-gray-600 text-xs mt-1">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-[600px] mx-auto hidden md:block mt-10 mb-20">
          <img
            src={linhaJornada}
            alt="Linha do tempo"
            className="w-full opacity-80"
          />

          <div className="absolute top-[-40px] left-[10%] flex items-center justify-center w-20 h-20">
            <img src={circuloAmarelo} className="w-full" />
            <img src={iconeAmarelo} className="absolute w-7 h-7" />
          </div>

          <JourneyPoint
            number={1}
            title="Comece do jeito certo"
            description="Estruturamos seu negócio com processos claros e estratégias práticas."
            dotPosition="top-[0%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2"
            textAlign="text-center"
          />
          <JourneyPoint
            number={2}
            title="Planejamento estratégico"
            description="Diagnóstico e plano de ação para resultados mensuráveis."
            dotPosition="top-[16.6%] left-[100%]"
            textPosition="top-1/2 left-[30px] -translate-y-1/2"
            textAlign="text-left"
          />
          <JourneyPoint
            number={3}
            title="Outsourcing de Equipamentos"
            description="Reduza custos e aumente sua eficiência operacional."
            dotPosition="top-[33.3%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2"
            textAlign="text-center"
          />
          <JourneyPoint
            number={4}
            title="Serviços organizados"
            description="Centralizamos a gestão de serviços essenciais para operação."
            dotPosition="top-[50%] left-[0%]"
            textPosition="top-1/2 right-[30px] -translate-y-1/2"
            textAlign="text-right"
          />
          <JourneyPoint
            number={5}
            title="Conexões valiosas"
            description="Rede exclusiva de fornecedores, parceiros e especialistas confiáveis."
            dotPosition="top-[66.6%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2"
            textAlign="text-center"
          />
          <JourneyPoint
            number={6}
            title="Resultados consistentes"
            description="Economia, eficiência e um ecossistema otimizado."
            dotPosition="top-[83.3%] left-[100%]"
            textPosition="top-1/2 left-[30px] -translate-y-1/2"
            textAlign="text-left"
          />
          <JourneyPoint
            number={7}
            title="Crescimento contínuo"
            description="Estamos ao seu lado para ajustar, escalar e inovar conforme seu negócio evoluir."
            dotPosition="top-[100%] left-[50%]"
            textPosition="top-[30px] left-1/2 -translate-x-1/2"
            textAlign="text-center"
          />
        </div>
      </div>
    </section>
  );
}
