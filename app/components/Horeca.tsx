const imgHoreca = "/images/horeca.png";

export default function Horeca() {
  return (
    <section id="horeca" className="bg-[#181a1c] rounded-[70px] py-20 my-20">
      <div className="w-full max-w-[1520px] mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-white px-6 py-3 rounded-full text-base font-semibold">
            NEW
          </span>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Прямые контракты с 3 крупнейшими фабриками Китая в сфере HoReCa
            </h2>
            <p className="text-base font-medium text-white mb-6">
              Станем вашим внешним отделом снабжения: от профессиональной
              тепловой техники до сложных кухонных линий. Гарантируем
              заводские цены и полное соответствие международным стандартам
              пищевой безопасности.
            </p>
            <p className="text-base font-medium text-[#adff78] mb-8">
              Благодаря этим соглашениям мы получили доступ к лучшему
              оборудованию мирового уровня.
            </p>
            <button className="bg-white px-8 py-4 rounded-full text-[#181a1c] font-semibold hover:bg-[#5ab2ff] hover:text-white transition-colors">
              Перейти в каталог
            </button>
          </div>
          <div className="relative">
            <img
              src={imgHoreca}
              alt="HoReCa оборудование"
              className="w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
