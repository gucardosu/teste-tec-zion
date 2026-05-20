import { motion } from "framer-motion";

export default function JourneyPoint({
  number,
  title,
  description,
  dotPosition,
  textPosition,
  textAlign,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: number * 0.1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`absolute ${dotPosition} z-10`}
    >
      <div className="absolute -translate-x-1/2 -translate-y-1/2 bg-[#003454] w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-default z-20">
        <span className="text-white font-extrabold text-base">{number}</span>
      </div>

      <div
        className={`absolute ${textPosition} ${textAlign} w-[220px] flex flex-col gap-1 pointer-events-none`}
      >
        <h4 className="text-[#003454] font-bold text-[15px] leading-tight">
          {title}
        </h4>
        <p className="text-[#534C49] text-[12px] leading-snug">{description}</p>
      </div>
    </motion.div>
  );
}
