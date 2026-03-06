"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChinaLogo } from "../constants";

const imgHero = "/images/hero.png";
const imgLeftBox = "/images/left-box.png";
const imgRightBox = "/images/right-box.png";
const imgSearch = "/images/search-logistic.png";
const imgKey = "/images/any_key.png";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-10 md:py-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8">
        <span className="text-[#181a1c] pr-2">Поставки из </span>
        <span className="text-[#181a1c]">
          <motion.span
            className="inline-block"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
              delay: 0.2,
            }}
          >
            <ChinaLogo className="h-8 sm:h-10 md:h-12 lg:h-15 mb-1 md:mb-2 -mr-1 md:-mr-2 inline-block" />
          </motion.span>{" "}
          Китая:
        </span>
        <br />
        <span className="text-[#ababab]">от фабрики до вашей двери</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl font-semibold text-[#181a1c] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
        Единое окно для вашего бизнеса и частных запросов. Найдем, проверим,
        доставим. Минимальные усилия — гарантированный результат
      </p>
      <div ref={containerRef} className="relative max-w-6xl mx-auto">
        {/* Декоративные изображения - скрыты на мобильных */}
        <motion.img
          src={imgLeftBox}
          className="hidden md:block absolute bottom-50 left-10 lg:left-40 rounded-2xl md:rounded-3xl max-w-[120px] md:max-w-[203px] z-10"
          alt=""
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src={imgSearch}
          className="hidden md:block absolute bottom-10 left-0 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[333px] z-10"
          alt=""
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        />
        <motion.img
          src={imgHero}
          style={{ y: yHero }}
          alt="Поставки из Китая"
          className="relative z-0 w-full rounded-2xl md:rounded-3xl max-w-[450px] mx-auto md:min-h-[450px]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        />
        <motion.img
          src={imgRightBox}
          className="hidden md:block absolute bottom-30 right-10 lg:right-40 rounded-2xl md:rounded-3xl max-w-[120px] md:max-w-[203px] z-10"
          alt=""
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src={imgKey}
          className="hidden lg:block absolute bottom-60 right-6 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[333px] z-10"
          alt=""
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </section>
  );
}
