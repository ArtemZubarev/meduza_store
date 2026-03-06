"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckboxIcon } from "../constants";

const imgHoreca = "/images/horeca.png";

export default function Horeca() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xImg = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      ref={sectionRef}
      id="horeca"
      className="bg-[#181a1c] w-full rounded-[40px] md:rounded-[70px] my-10 md:my-20 overflow-hidden"
    >
      <div className="w-full mx-auto relative">
        <div className="grid max-w-[1520px] mx-auto lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <div className="flex flex-col justify-center py-10 md:py-20 px-4 md:px-10">
            <div className="md:flex items-start gap-12">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="bg-white px-4 md:px-6 py-3 md:py-5 rounded-2xl md:rounded-3xl text-sm md:text-base font-semibold">
                  NEW
                </span>
              </div>
              <div className="">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight max-w-[612px]">
                  Прямые контракты с 3 крупнейшими фабриками Китая в сфере
                  HoReCa
                </h2>
                <p className="text-sm md:text-base font-medium text-white mb-4 md:mb-6 max-w-[540px]">
                  Станем вашим внешним отделом снабжения: от профессиональной
                  тепловой техники до сложных кухонных линий. Гарантируем
                  заводские цены и полное соответствие международным стандартам
                  пищевой безопасности.
                </p>
                <div className="flex items-start gap-2 max-w-[500px] mb-6 md:mb-8">
                  <CheckboxIcon className="w-5 h-5 md:w-[22px] md:h-[22px] mt-0.5 flex-shrink-0" />
                  <p className="text-sm md:text-base font-medium text-[#adff78]">
                    Благодаря этим соглашениям мы получили доступ{" "}
                    <br className="hidden sm:block" /> к лучшему оборудованию
                    мирового уровня.
                  </p>
                </div>
                <button className="w-full md:max-w-[222px] cursor-pointer bg-white px-6 md:px-8 py-3 md:py-4 rounded-2xl md:rounded-3xl text-sm md:text-base text-[#181a1c] font-semibold hover:bg-[#5ab2ff] hover:text-white transition-colors">
                  Перейти в каталог
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[30px] md:rounded-[65px] h-[260px] md:h-full max-h-[662px]">
            <motion.img
              src={imgHoreca}
              alt="HoReCa оборудование"
              style={{ x: xImg, objectPosition: "center 60%" }}
              className="w-full h-full object-cover md:absolute md:top-0 md:right-0 md:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
