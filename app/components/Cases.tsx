"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CaseImage {
  src: string;
  alt: string;
}

interface CaseData {
  id: string;
  badge: {
    text: string;
    bgColor: string;
    textColor: string;
  };
  title: string;
  product: string;
  description: string[];
  images: CaseImage[];
  gridCols: 3 | 4;
}

const casesData: CaseData[] = [
  {
    id: "case-1",
    badge: {
      text: "Для производства",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: "Тепловые насосы",
    product: "Товар: тепловой насос инверторного типа.",
    description: [
      "Провели полный цикл работ: от переговоров с фабрикой до доставки клиенту",
      "Договорились о производстве инверторных тепловых насосов под заказ",
      "Нанесли логотип заказчика",
      "Перевели техническую документацию на русский язык",
      "Оплату проводили через китайскую компанию с оформлением всех официальных документов",
      "Для безопасной доставки все семь насосов были упакованы в деревянные ящики",
    ],
    images: [
      { src: "/images/case1-1.png", alt: "Тепловой насос 1" },
      { src: "/images/case1-2.png", alt: "Тепловой насос 2" },
      { src: "/images/case1-3.png", alt: "Тепловой насос 3" },
    ],
    gridCols: 3,
  },
  {
    id: "case-2",
    badge: {
      text: "Достали из Голландии",
      bgColor: "#5ab2ff",
      textColor: "white",
    },
    title: "Автономные системы Mastervolt",
    product: "Товар: Автономные системы электроснабжения Mastervolt.",
    description: [
      "Направили официальный запрос на голландский завод напрямую от лица нашей китайской компании",
      "Согласовали все спецификации и получили одобрение",
      "Выкупили товар по официальному инвойсу через юрлицо в КНР",
      "Провели таможенную очистку и приняли груз на нашем складе в Китае",
      "Бережно упаковали и отправили в Россию",
    ],
    images: [
      { src: "/images/case2-1.png", alt: "Mastervolt система 1" },
      { src: "/images/case2-2.png", alt: "Mastervolt система 2" },
      { src: "/images/case2-3.png", alt: "Mastervolt система 3" },
      { src: "/images/case2-4.png", alt: "Mastervolt система 4" },
    ],
    gridCols: 4,
  },
  {
    id: "case-3",
    badge: {
      text: "Для ИП",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: "Купольные посудомойки",
    product:
      "Товар: Купольные посудомойки с дополнительным резервуаром для экономии энергии.",
    description: [
      "Мы не просто нашли производителя, мы провели тщательный отбор, чтобы гарантировать лучшее соотношение цены и качества",
      "Подписание контракта и согласование деталей",
      "Получили одобрение от фабрики на дальнейшую кастомизацию продукта",
      "Приняли товар на складе в Китае и проверили его",
      "Бережно упаковали и отправили клиенту",
    ],
    images: [
      { src: "/images/case3-1.png", alt: "Посудомойка 1" },
      { src: "/images/case3-2.png", alt: "Посудомойка 2" },
      { src: "/images/case3-3.png", alt: "Посудомойка 3" },
    ],
    gridCols: 3,
  },
  // Новые слайды из Figma - требуют заполнения данными
  {
    id: "case-4",
    badge: {
      text: "Бейдж",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: "Надувные купели и бассейны",
    product: "Товар: Надувные бассейны и купели по технологии SUP",

    description: [
      "Выкупили товар под конкретный запрос.",
      "Провели контроль качества, отследили каждый этап производства.",
      "Бережно упаковали и отправили в Россию.",
    ],
    images: [
      {
        src: "/images/cases/4-1.jpg",
        alt: "Упакованные товары в зеленой пленке с лейблами",
      },
      { src: "/images/cases/4-2.jpg", alt: "Черный уличный биотуалет" },
      { src: "/images/cases/4-3.jpg", alt: "Большой синий цилиндр на газоне" },
      { src: "/images/cases/4-4.jpg", alt: "Круглый бассейн с синей водой" },
    ],
    gridCols: 4,
  },
  {
    id: "case-5",
    badge: {
      text: "Для ИП",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: 'Видеопилоны 85"',
    product: 'Товар: Маркетинговые видеопилоны 85" / 4K.',
    description: [
      "Проанализировали запрос и подобрали вариант с характеристиками, превосходящими предложение известной фабрики, но по более выгодной цене.",
      "Обеспечили полное сопровождение: взяли на себя переговоры и контроль сделки на всех этапах взаимодействия с китайской стороной.",
      "Добились рекордных сроков: согласовали производство и отгрузку кастомного оборудования всего за 5 рабочих дней.",
      "Организовали прямую логистику",
    ],
    images: [
      {
        src: "/images/cases/5-1.jpg",
        alt: "",
      },
      { src: "/images/cases/5-2.jpg", alt: "" },
      { src: "/images/cases/5-3.jpg", alt: "" },
      { src: "/images/cases/5-4.jpg", alt: "" },
    ],
    gridCols: 3,
  },
  {
    id: "case-6",
    badge: {
      text: "Для бизнеса",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: "Мангал с электрофильтром",
    product:
      "Товар: Мангальная установка с встроеной вытяжкой и электрофильтром.",
    description: [
      "Мы не просто нашли производителя, мы провели тщательный отбор, чтобы гарантировать лучшее соотношение цены и качества.",
      "Подписание контракта и согласование деталей.",
      "Организовали логистику в более чем 12 городов России.",
    ],
    images: [
      {
        src: "/images/cases/6-1.jpg",
        alt: "",
      },
      { src: "/images/cases/6-2.jpg", alt: "" },
      { src: "/images/cases/6-3.jpg", alt: "" },
      { src: "/images/cases/6-4.jpg", alt: "" },
    ],
    gridCols: 3,
  },
  {
    id: "case-7",
    badge: {
      text: "Для бизнеса",
      bgColor: "#f2f2f2",
      textColor: "#181a1c",
    },
    title: "Упаковочный аппарат",
    product: "Товар: Упаковочный аппарат для алюминиевых контейнеров.",
    description: [
      "Нашли производителя, обсудили детали.",
      "Выкупили товар и провели контроль качества.",
      "Сделали дополнительную упаковку для надежности.",
      "Организовали логистику в несколько регионов России.",
    ],
    images: [
      {
        src: "/images/cases/7-1.jpg",
        alt: "",
      },
      { src: "/images/cases/7-2.jpg", alt: "" },
      { src: "/images/cases/7-3.jpg", alt: "" },
    ],
    gridCols: 3,
  },
];

interface CaseCardProps {
  caseData: CaseData;
}

function CaseCard({ caseData }: CaseCardProps) {
  return (
    <div className="flex flex-col justify-between bg-white w-full rounded-2xl md:rounded-3xl p-4 md:p-8 h-full flex flex-col">
      <div
        className="px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl inline-block mb-4 md:mb-6"
        style={{
          backgroundColor: caseData.badge.bgColor,
          color: caseData.badge.textColor,
        }}
      >
        <span className="font-bold text-sm md:text-lg">
          {caseData.badge.text}
        </span>
      </div>
      <h3 className="text-2xl md:text-4xl font-bold text-[#181a1c] mb-4 md:mb-6">
        {caseData.title}
      </h3>
      <p className="text-sm md:text-base font-medium text-[#181a1c] mb-4 md:mb-6">
        {caseData.product}
      </p>
      <p className="text-sm md:text-base font-medium text-[#181a1c] mb-4 md:mb-6">
        Что мы сделали:
        <br />
        {caseData.description.map((item, index) => (
          <span key={index}>
            - {item}
            {index < caseData.description.length - 1 && <br />}
          </span>
        ))}
      </p>
      <div className={`flex gap-3`}>
        {caseData.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full aspect-square object-cover rounded-xl md:rounded-2xl max-w-[146px] md:max-w-none md:w-[146px] md:h-[146px]"
            width={146}
            height={146}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}

const swiperConfig: SwiperOptions = {
  modules: [Navigation, Pagination],
  spaceBetween: 32,
  slidesPerView: "auto",
  centeredSlides: false,
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: "auto",
      spaceBetween: 32,
    },
  },
};

export default function Cases() {
  return (
    <section id="cases" className="w-full mx-auto px-4 py-10 md:py-20">
      <Swiper {...swiperConfig} className="cases-swiper !pb-12">
        {casesData.map((caseData) => (
          <SwiperSlide key={caseData.id} className="!w-[768px] h-auto">
            <CaseCard caseData={caseData} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
