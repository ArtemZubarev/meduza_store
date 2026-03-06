"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "free",
    title: "Бесплатный подбор товара",
    description:
      "Нулевой риск на старте. Мы инвестируем свое время, чтобы вы сэкономили свои деньги.",
    image: "/images/feature-free.png",
    imgClasses: "max-w-[315px] ",
  },
  {
    id: "cargo",
    title: "Любые виды грузов",
    description:
      "Мультиотраслевой охват. От 200 наушников до тяжелого промышленного оборудования.",
    image: "/images/feature-any-cargo.png",
    imgClasses: "max-w-[359px] -bottom-7",
  },
  {
    id: "logistics",
    title: "Удобные варианты логистики",
    description:
      "Выбирайте скорость или цену. Авиа, Ж/Д, море или авто. Оптимизация маршрута под ваш KPI.",
    image: "/images/feature-logistics.png",
    imgClasses: "max-w-[568px] bottom-0 left-0",
  },
  {
    id: "transparent",
    title: "Прозрачное ведение сделки",
    description:
      "Контроль 360°. Заключение сделки, фотоотчеты с фабрик и понятная смета без скрытых комиссий.",
    image: "/images/feature-transparent.png",
    imgClasses: "max-w-[285px] -bottom-23",
  },
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-8 md:py-10">
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.id}
            className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 relative pb-32 md:pb-40 overflow-hidden"
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-1 md:mb-1 min-h-[3.5rem] md:min-h-[4.5rem] leading-tight">
              {feature.title}
            </h3>
            <p className="text-sm md:text-base font-medium text-[#181a1c] mb-4 md:mb-6">
              {feature.description}
            </p>
            <img
              src={feature.image}
              alt={feature.title}
              className={`rounded-xl md:rounded-2xl absolute left-1/2 -translate-x-1/2 ${feature.imgClasses}`}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
