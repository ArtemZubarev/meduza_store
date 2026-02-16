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
  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative pb-50 overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4 min-h-[4.5rem] leading-tight">
              {feature.title}
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              {feature.description}
            </p>
            <img
              src={feature.image}
              alt={feature.title}
              className={`rounded-2xl absolute left-1/2 -translate-x-1/2 ${feature.imgClasses}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
