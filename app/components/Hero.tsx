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
    <section className="w-full max-w-[1520px] mx-auto px-4 py-20 text-center">
      <h1 className="text-7xl font-semibold mb-8">
        <span className="text-[#181a1c] pr-2">Поставки из </span>
        <span className="text-[#181a1c]">
          <ChinaLogo className="h-15 mb-2 -mr-2 inline-block" /> Китая:
        </span>
        <br />
        <span className="text-[#ababab]">от фабрики до вашей двери</span>
      </h1>
      <p className="text-xl font-regular text-[#181a1c] max-w-3xl mx-auto mb-12">
        Единое окно для вашего бизнеса и частных запросов. Найдем, проверим,
        доставим. Минимальные усилия — гарантированный результат
      </p>
      <div className="relative max-w-6xl mx-auto">
        <img
          src={imgLeftBox}
          className="absolute bottom-50 left-40 rounded-3xl max-w-[203px]"
        />
        <img
          src={imgSearch}
          className="absolute bottom-10 left-0 rounded-3xl max-w-[333px]"
        />
        <img
          src={imgHero}
          alt="Поставки из Китая"
          className="w-full rounded-3xl max-w-[600px] mx-auto"
        />

        <img
          src={imgRightBox}
          className="absolute bottom-30 right-40 rounded-3xl max-w-[203px]"
        />
        <img
          src={imgKey}
          className="absolute bottom-60 right-6 rounded-3xl max-w-[333px]"
        />
      </div>
    </section>
  );
}
