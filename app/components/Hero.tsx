import { ChinaLogo } from "../constants";

const imgHero = "/images/hero.png";
const imgLeftBox = "/images/left-box.png";
const imgRightBox = "/images/right-box.png";
const imgSearch = "/images/search-logistic.png";
const imgKey = "/images/any_key.png";
// const imgHero = "/images/hero.png";
// const imgHero = "/images/hero.png";

export default function Hero() {
  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-10 md:py-20 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-8">
        <span className="text-[#181a1c] pr-2">Поставки из </span>
        <span className="text-[#181a1c]">
          <ChinaLogo className="h-8 sm:h-10 md:h-12 lg:h-15 mb-1 md:mb-2 -mr-1 md:-mr-2 inline-block" />{" "}
          Китая:
        </span>
        <br />
        <span className="text-[#ababab]">от фабрики до вашей двери</span>
      </h1>
      <p className="text-base md:text-lg lg:text-xl font-semibold text-[#181a1c] max-w-3xl mx-auto mb-8 md:mb-12 px-4">
        Единое окно для вашего бизнеса и частных запросов. Найдем, проверим,
        доставим. Минимальные усилия — гарантированный результат
      </p>
      <div className="relative max-w-6xl mx-auto">
        {/* Декоративные изображения - скрыты на мобильных */}
        <img
          src={imgLeftBox}
          className="hidden md:block absolute bottom-50 left-10 lg:left-40 rounded-2xl md:rounded-3xl max-w-[120px] md:max-w-[203px]"
          alt=""
        />
        <img
          src={imgSearch}
          className="hidden md:block absolute bottom-10 left-0 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[333px]"
          alt=""
        />
        <img
          src={imgHero}
          alt="Поставки из Китая"
          className="w-full rounded-2xl md:rounded-3xl max-w-[600px] mx-auto"
        />
        <img
          src={imgRightBox}
          className="hidden md:block absolute bottom-30 right-10 lg:right-40 rounded-2xl md:rounded-3xl max-w-[120px] md:max-w-[203px]"
          alt=""
        />
        <img
          src={imgKey}
          className="hidden lg:block absolute bottom-60 right-6 rounded-2xl md:rounded-3xl max-w-[200px] md:max-w-[333px]"
          alt=""
        />
      </div>
    </section>
  );
}
