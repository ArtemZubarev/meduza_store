import { Logo, TgLogo } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-[#181a1c] rounded-t-[40px] md:rounded-t-[70px] mt-10 md:mt-20 py-8 md:py-16">
      <div className="w-full max-w-[1520px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb- md:mb-12">
          {/* Column 1 */}
          <div className="md:col-span-1">
            <Logo className="h-8 md:h-10 mb-8 md:mb-[78px]" inverted />
            <p className="text-base md:text-xl text-white mb-2">с 10-18</p>
            <p className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-7">
              +7 812 998 02 78
            </p>

            <p className="text-base md:text-xl text-white mb-2">с 10-20</p>

            <p className="text-2xl md:text-4xl font-bold text-white">
              <TgLogo className="h-6 md:h-8 inline-block -ml-2" />
              @meduzamen
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
              Меню
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-base md:text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-base md:text-xl text-[#404549] hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-base md:text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Процесс
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-base md:text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="text-base md:text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Кейсы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
              New
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a
                  href="#design"
                  className="text-base md:text-xl text-[#adff78] hover:text-white transition-colors"
                >
                  Дизайн
                </a>
              </li>
              <li>
                <a
                  href="#horeca"
                  className="text-base md:text-xl text-[#5ab2ff] hover:text-white transition-colors"
                >
                  HoReCa
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="md:col-span-1 lg:col-span-1 border-t md:border-t-0 md:border-l border-[#404549] pt-6 md:pt-0 md:pl-6 lg:pl-12">
            <div className="bg-[#404549] rounded-2xl md:rounded-3xl p-4 md:p-6 mb-4 md:mb-6">
              <h4 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4">
                Скачайте презентацию
                <br />
                для своего босса
              </h4>
              <button className="bg-[#5ab2ff] px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base text-white font-semibold hover:opacity-90 transition-opacity w-full md:w-auto">
                Скачать
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-4 bg-[#404549] rounded-2xl md:rounded-3xl p-4 md:p-6">
              <div className="flex-1">
                <p className="text-base md:text-xl font-medium text-white mb-2">
                  Наш офис:
                </p>
                <p className="text-base md:text-xl font-bold text-white mb-4">
                  Санкт-Петербург, Московское шоссе, 7<br />
                  ТРК &quot;Торговый двор&quot;
                </p>
              </div>
              <a
                href="https://yandex.ru/maps/?pt=30.339408,59.832482&z=16&l=map"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full md:w-[262px] h-[200px] md:h-[201px] rounded-xl md:rounded-2xl overflow-hidden hover:opacity-90 transition-opacity"
              >
                <img
                  src={`https://static-maps.yandex.ru/1.x/?ll=30.339408,59.832482&z=16&size=262,201&pt=30.339408,59.832482,pm2rdm&l=map`}
                  alt="Офис MeduzaStore - Санкт-Петербург, Московское шоссе, 7"
                  className="w-full h-full object-cover"
                  width="262"
                  height="201"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#404549] pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2 md:mb-2">
            <p className="text-sm md:text-sm text-white leading-relaxed">
              ИП Васенин Сергей Станиславович / ИНН 434586016397 / ОГРНИП
              324430000003612
            </p>
            <button className="bg-white px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base text-[#181a1c] font-semibold hover:bg-[#5ab2ff] hover:text-white transition-colors w-full md:w-auto">
              Бесплатная консультация
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-sm md:text-md text-white">
            <a
              href="#"
              className="underline hover:text-[#5ab2ff] transition-colors"
            >
              Согласие на обработку данных
            </a>
            <a
              href="#"
              className="underline hover:text-[#5ab2ff] transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
