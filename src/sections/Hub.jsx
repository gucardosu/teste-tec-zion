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
      <div className="w-full max-w-[1440px] px-12 py-24 flex flex-col gap-16">
        <div className="flex flex-col gap-6 max-w-[900px]">
          <h2 className="text-4xl font-extrabold text-[#11374A]">
            O HUB <span className="text-[#CCA349]">HØST</span>
          </h2>

          <h3 className="text-2xl font-bold text-[#CCA349]">
            Menos fornecedores. Mais resultado.
          </h3>

          <div className="flex flex-col gap-4 text-[#666666] text-[17px] leading-[1.8]">
            <p>
              Um HUB é um ponto central que conecta tudo o que você precisa. Ele
              reduz distâncias, elimina complicações e faz com que todo o seu
              negócio funcione de forma integrada e eficiente.
            </p>
            <p>
              Sabemos que gerenciar um negócio no setor de alimentação é um
              grande desafio. Exige habilidade para lidar com fornecedores,
              serviços, equipamentos e equipes, tudo ao mesmo tempo — sem perder
              o foco nos clientes. É por isso que ter um parceiro que simplifica
              sua operação e alivia a carga do dia a dia faz toda a diferença.
            </p>
            <p>
              Com a HØST, você não precisa lidar com múltiplos fornecedores,
              contratos ou processos complicados. Somos a solução que faltava,
              conectamos aquilo que seu negócio precisa para crescer com mais
              resultados e menos esforço.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-2xl font-bold text-[#003454]">
            O QUE VOCÊ ENCONTRA AQUI:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10">
              <img
                src={card1}
                alt="Assinatura"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003454]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl leading-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  Assinatura de
                  <br />
                  Equipamentos
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-white/95 text-sm leading-snug pt-3 font-medium">
                      Máquinas modernas, sem custo de aquisição, com manutenção
                      inclusa para mais segurança e eficiência.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10">
              <img
                src={card2}
                alt="Direcionamento"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CCA349]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl leading-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  Direcionamento
                  <br />
                  Estratégico
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-white/95 text-sm leading-snug pt-3 font-medium">
                      Análise profunda do seu negócio para traçar rotas de
                      crescimento, otimizar custos e maximizar seus lucros no
                      setor.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10">
              <img
                src={card3}
                alt="Comunidade"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003454]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl leading-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  Comunidade
                  <br />
                  HØST
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-white/95 text-sm leading-snug pt-3 font-medium">
                      Conecte-se com outros empreendedores do setor de
                      alimentação, troque experiências e acesse conteúdos
                      exclusivos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10">
              <img
                src={card4}
                alt="Gestão"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#CCA349]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl leading-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  Gestão de
                  <br />
                  Serviços
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-white/95 text-sm leading-snug pt-3 font-medium">
                      Terceirização e controle de serviços essenciais para que
                      você possa focar 100% na qualidade do seu atendimento.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[480px] rounded-2xl overflow-hidden group cursor-pointer shadow-lg shadow-black/10">
              <img
                src={card5}
                alt="Estruturação"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003454]/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <h4 className="text-white font-bold text-2xl leading-tight relative z-10 transition-transform duration-300 group-hover:-translate-y-2">
                  Estruturação e<br />
                  Direcionamento
                </h4>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out relative z-10">
                  <div className="overflow-hidden">
                    <p className="text-white/95 text-sm leading-snug pt-3 font-medium">
                      Apoio completo desde a planta arquitetônica até o fluxo
                      operacional para garantir a máxima eficiência da sua
                      cozinha.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
