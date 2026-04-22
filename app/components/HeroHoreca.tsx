"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChinaLogo, CircleCheck } from "../constants";

const imgHero = "/images/horeca/horeca_main.png";
const imgLeftBox = "/images/horeca/blur_left.png";
const imgRightBox = "/images/horeca/blur_right.png";
const imgSearch = "/images/horeca/chat_left.png";
const imgKey = "/images/horeca/chat_right.png";

export default function HeroHoreca() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section className="w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto px-4 pb-0 pt-10 md:pt-20 md:pb-20 text-center pb-20 md:mb-0 overflow-hidden">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8 leading-[32px] md:leading-[99%] ">
        <span className="text-[#ababab]">HoReCa из Китая:</span>
        <span className="text-[#181a1c]">
          от фабрики <br className="hidden md:block" /> до кухни с выгодой до
          50%
        </span>
      </h1>
      <p className="text-[14px] md:text-lg lg:text-xl font-semibold text-[#181a1c] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
        Оснащаем рестораны, отели и фуд-корты лучшей профессиональной техникой
        напрямую с заводов для бесперебойной работы вашей кухни и бизнеса.
      </p>
      <div className="mx-auto flex max-w-md flex-col items-stretch gap-2 px-2 sm:inline-flex sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 md:gap-4">
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3 text-left text-sm font-semibold sm:justify-start sm:rounded-3xl sm:px-4 sm:py-4 sm:text-base">
          <CircleCheck className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
          <span className="min-w-0">3 контракта с топ фабриками</span>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-white px-3 py-3 text-left text-sm font-semibold sm:justify-start sm:rounded-3xl sm:px-4 sm:py-4 sm:text-base">
          <CircleCheck className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
          <span className="min-w-0">Любое оборудование</span>
        </div>
      </div>
      <div ref={containerRef} className="relative max-w-6xl mx-auto md:mt-10">
        {/* Декоративные изображения - скрыты на мобильных */}
        <motion.img
          src={imgLeftBox}
          className=" md:block absolute top-10 md:top-4 -left-10 md:left-10 lg:left-10 rounded-2xl md:rounded-3xl max-w-[120px] md:max-w-[303px] z-10"
          alt=""
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src={imgSearch}
          className=" md:block absolute -bottom-14 -md:bottom-6 scale-75 md:scale-100 md:bottom-10 -left-10 md:left-0 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[300px] z-10"
          alt=""
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        />
        <motion.div
          className="relative z-100 w-full max-w-[450px] md:max-w-[650px] mx-auto min-h-[280px] md:min-h-[450px]"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <motion.div
            style={{ y: yHero }}
            // className="relative w-[70%] mx-auto h-full min-h-[280px] md:min-h-[450px]"
            className="relative w-[50%] mx-auto h-full max-w-[440px]"
          >
            <img
              src={imgHero}
              alt="Поставки из Китая"
              className="w-full h-full object-cover object-center rounded-2xl md:rounded-3xl"
            />
          </motion.div>
        </motion.div>
        <motion.img
          src={imgRightBox}
          className=" md:block absolute bottom-4 md:bottom-0 -right-10 md:right-10 lg:right-0 rounded-2xl md:rounded-3xl max-w-[100px] md:max-w-[326px] z-10"
          alt=""
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        />
        <motion.img
          src={imgKey}
          className=" lg:block absolute top-20 scale-55 md:scale-100 -right-15 -md:right-12 md:right-6 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[260px] z-10"
          alt=""
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        />
      </div>
    </section>
  );
}
