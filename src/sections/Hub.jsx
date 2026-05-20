import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";

export default function Hub() {
  return (
    <section
      id="o-que-fazemos"
      className="w-full bg-white flex justify-center relative z-20 overflow-hidden"
    >
      <div className="w-full max-w-[1440px] px-6 md:px-10 py-12 md:py-16 flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-4 max-w-[800px]">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#11374A]">
            O HUB <span className="text-[#CCA349]">HØST</span>
          </h2>

          <h3 className="text-lg md:text-xl font-bold text-[#CCA349]">
            Menos fornecedores. Mais resultado.
          </h3>

          <div className="flex flex-col gap-3 text-[#666666] text-sm md:text-[15px] leading-[1.6]">
            <p>
              Um HUB é um ponto central que conecta tudo o que você precisa. Ele
              reduz distâncias, elimina complicações e faz com que todo o seu
              negócio funcione de forma integrada e eficiente.
            </p>
            <p>
              Sabemos que gerenciar um negócio no setor de alimentação é um
              grande desafio. Exige habilidade para lidar com fornecedores,
              serviços, equipamentos e equipes ao mesmo tempo. É por isso que
              ter um parceiro que simplifica sua operação faz toda a diferença.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-lg md:text-xl font-bold text-[#003454]">
            O QUE VOCÊ ENCONTRA AQUI:
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                img: card1,
                title: "Assinatura de Equipamentos",
                desc: "Máquinas modernas, sem custo de aquisição, com manutenção inclusa.",
                gradiente: "from-[#003454] via-transparent to-transparent",
              },
              {
                img: card2,
                title: "Direcionamento Estratégico",
                desc: "Análise profunda para traçar rotas de crescimento e otimizar custos.",
                gradiente: "from-[#CCA349] via-transparent to-transparent",
              },
              {
                img: card3,
                title: "Comunidade HØST",
                desc: "Conecte-se com empreendedores do setor e acesse conteúdos exclusivos.",
                gradiente: "from-[#003454] via-transparent to-transparent",
              },
              {
                img: card4,
                title: "Gestão de Serviços",
                desc: "Terceirização e controle de serviços para focar no seu atendimento.",
                gradiente: "from-[#CCA349] via-transparent to-transparent",
              },
              {
                img: card5,
                title: "Estruturação e Direcionamento",
                desc: "Apoio desde a planta arquitetônica até o fluxo operacional.",
                gradiente: "from-[#003454] via-transparent to-transparent",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="relative h-[350px] md:h-[400px] rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.gradiente} opacity-90`}
                ></div>

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h4 className="text-white font-bold text-lg md:text-xl leading-tight mb-2">
                    {card.title}
                  </h4>
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
