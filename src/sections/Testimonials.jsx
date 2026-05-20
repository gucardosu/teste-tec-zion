import { useState } from "react";
import { motion } from "framer-motion";
import bgTexture from "../assets/bg-texture.svg";
import aspasImg from "../assets/aspas.png";
import sombraAspas from "../assets/sombra aspas.svg"; // <-- Sua sombra importada aqui!
import masterchefLogo from "../assets/masterchef logo.svg";
import logoDora from "../assets/dora logo.svg";
import logoTemplo from "../assets/templo logo.svg";
import logoTasty from "../assets/tasty grill logo.svg";
import logoJordao from "../assets/jordao logo.svg";
import logoTaua from "../assets/taua logo.svg";
import logoEstancia from "../assets/estancia logo.jpg";

const depoimentos = [
  {
    id: 1,
    nome: "Hugo Dantas",
    cargo: "Gerente Geral — MYK São Paulo",
    texto: "Nossa experiência com a Host Soluções tem sido extremamente positiva desde o início da parceria. Encontramos uma equipe comprometida, ágil e com uma visão estratégica que vai além da entrega técnica, entendendo de fato as necessidades do nosso negócio. Além disso, contamos com um atendimento próximo e personalizado, que faz toda a diferença no dia a dia da operação e na evolução dos nossos projetos.",
    estrelas: 5,
  },
  {
    id: 2,
    nome: "Pedro",
    cargo: "Proprietário - Bar Genuíno",
    texto: "Estamos trabalhando com a Host Solução há 1 ano e 6 meses e a experiência tem sido excelente. Máquinas de gelo de alta qualidade, praticamente sem necessidade de manutenção corretiva, com manutenção preventiva sempre rigorosamente em dia. Além disso, tivemos uma grande economia em comparação à compra de gelo com fornecedores. Outro grande diferencial é o atendimento, sempre excelente, ágil e muito humano. Excelente parceria!",
    estrelas: 5,
  },
  {
    id: 3,
    nome: "Murilo Cardoso",
    cargo: "Diretor de Operações — ConnectX",
    texto: "A HØST superou todas as nossas expectativas no fornecimento e gestão de equipamentos. A eficiência operacional que conquistamos nos permitiu focar totalmente na expansão do nosso modelo de negócios com total segurança.",
    estrelas: 5,
  }
];

const logosParceiros = [
  { id: 1, name: "Masterchef", src: masterchefLogo },
  { id: 2, name: "Dora", src: logoDora },
  { id: 3, name: "Templo", src: logoTemplo },
  { id: 4, name: "Tasty Grill", src: logoTasty },
  { id: 5, name: "Jordão", src: logoJordao },
  { id: 6, name: "Rede Tauá", src: logoTaua },
  { id: 7, name: "Estância", src: logoEstancia },
];

const carouselLogos = [...logosParceiros, ...logosParceiros, ...logosParceiros];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (depoimentos.length - 1 || 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? depoimentos.length - 2 : prev - 1));
  };

  return (
    <section className="w-full min-h-[100vh] bg-[#EBEBEB] flex flex-col justify-between pt-24 relative overflow-hidden select-none">
      <div
        className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none z-0"
        style={{
          backgroundImage: `url(${bgTexture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between z-10 relative flex-1 pb-16">
        
        {/* LADO ESQUERDO: Ajustado para 55% para dar mais espaço para as aspas gigantes */}
        <div className="w-full lg:w-[55%] flex flex-col gap-10 relative z-10">
          <h2 className="text-4xl md:text-[46px] font-bold text-[#003454] uppercase tracking-wide leading-[1.15] font-sans drop-shadow-sm">
            Negócios que <br />
            simplificaram com a <span className="text-[#CCA349]">HØST</span>
          </h2>
          <div className="relative w-full overflow-hidden min-h-[460px] md:min-h-[400px]">
            <motion.div
              className="flex gap-6 w-full"
              animate={{ x: `-${currentIndex * 50}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {depoimentos.map((item) => (
                <div
                  key={item.id}
                  // Adicionado shadow-2xl e shadow-black/10 para uma sombra bem definida nos cards
                  className="bg-white rounded-[24px] p-8 md:p-10 shadow-2xl shadow-black/10 min-w-[100%] md:min-w-[calc(50%-12px)] max-w-[100%] md:max-w-[calc(50%-12px)] flex flex-col justify-between border border-gray-100"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-14 h-14 bg-[#111] rounded-full flex items-center justify-center text-white shrink-0 shadow-inner">
                        <svg className="w-7 h-7 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[#003454] font-bold text-lg leading-tight font-sans">{item.nome}</h4>
                        <span className="text-gray-400 text-xs mt-0.5 font-medium">{item.cargo}</span>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-5">
                      {[...Array(item.estrelas)].map((_, i) => (
                        <svg key={i} className="w-[18px] h-[18px] text-[#CCA349]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#534C49] text-[14.5px] leading-relaxed font-normal tracking-wide text-left">
                      {item.texto}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <button onClick={prevSlide} className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-[#003454] text-sm hover:bg-[#003454] hover:text-white hover:border-[#003454] transition-all duration-300">
              &#10094;
            </button>
            <div className="flex gap-2">
              {[...Array(depoimentos.length - 1)].map((_, i) => (
                <span key={i} className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "w-5 bg-[#003454]" : "w-2 bg-gray-400"}`} />
              ))}
            </div>
            <button onClick={nextSlide} className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center text-[#003454] text-sm hover:bg-[#003454] hover:text-white hover:border-[#003454] transition-all duration-300">
              &#10095;
            </button>
          </div>
        </div>

        {/* LADO DIREITO: ASPAS GIGANTES COM A SOMBRA SVG SEPARADA */}
        <div className="hidden lg:flex w-[45%] justify-end items-center relative h-full">
          <div className="relative flex flex-col items-center justify-center -mr-10">
            {/* A imagem principal da aspa (Bem maior agora, forçando max-w-none) */}
            <motion.img
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={aspasImg}
              alt="Aspas Decorativas Gigantes"
              className="lg:w-[750px] w-[500px] max-w-none object-contain relative z-10 select-none pointer-events-none"
            />
            
            {/* A imagem da Sombra (SVG) Posicionada embaixo das aspas */}
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              src={sombraAspas}
              alt="Sombra das aspas"
              className="absolute -bottom-16 z-0 lg:w-[600px] w-[400px] max-w-none object-contain select-none pointer-events-none opacity-80"
            />
          </div>
        </div>
      </div>
      
      {/* FAIXA INFERIOR BRANCA */}
      <div className="w-full bg-white py-8 border-t border-gray-200/60 overflow-hidden relative mt-auto flex items-center z-10">
        <div className="w-full relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap items-center shrink-0 min-w-full"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          >
            <div className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24 shrink-0">
              {carouselLogos.map((logo, index) => (
                <div key={`bloco1-${index}`} className="h-16 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <img src={logo.src} alt={logo.name} className="h-full max-w-[160px] object-contain" />
                </div>
              ))}
            </div>
            <div className="flex gap-16 md:gap-24 items-center pr-16 md:pr-24 shrink-0">
              {carouselLogos.map((logo, index) => (
                <div key={`bloco2-${index}`} className="h-16 flex items-center justify-center transition-transform hover:scale-110 duration-300">
                  <img src={logo.src} alt={logo.name} className="h-full max-w-[160px] object-contain" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}