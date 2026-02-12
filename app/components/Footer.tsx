const imgLogo = "/images/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#181a1c] rounded-t-[70px] mt-20 py-16">
      <div className="w-full max-w-[1520px] mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 */}
          <div>
            <img src={imgLogo} alt="MeduzaStore" className="h-10 mb-8" />
            <p className="text-4xl font-bold text-white mb-4">
              +7 812 998 02 78
            </p>
            <p className="text-xl text-white mb-2">с 10-18</p>
            <p className="text-xl text-white mb-4">с 10-20</p>
            <p className="text-4xl font-bold text-white">@meduzamen</p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Меню</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-xl text-[#404549] hover:text-white transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  className="text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Процесс
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#cases"
                  className="text-xl text-[#404549] hover:text-white transition-colors"
                >
                  Кейсы
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">New</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#design"
                  className="text-xl text-[#adff78] hover:text-white transition-colors"
                >
                  Дизайн
                </a>
              </li>
              <li>
                <a
                  href="#horeca"
                  className="text-xl text-[#5ab2ff] hover:text-white transition-colors"
                >
                  HoReCa
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <div className="bg-[#404549] rounded-3xl p-6 mb-6">
              <h4 className="text-xl font-bold text-white mb-4">
                Скачайте презентацию
                <br />
                для своего босса
              </h4>
              <button className="bg-[#5ab2ff] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
                Скачать
              </button>
            </div>
            <div className="bg-[#404549] rounded-3xl p-6">
              <p className="text-xl font-medium text-white mb-2">Наш офис:</p>
              <p className="text-xl font-bold text-white">
                Санкт-Петербург, Московское шоссе, 7<br />
                ТРК "Торговый двор"
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#404549] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <p className="text-xl text-white">
              ИП Васенин Сергей Станиславович / ИНН 434586016397 / ОГРНИП
              324430000003612
            </p>
            <button className="bg-white px-8 py-4 rounded-full text-[#181a1c] font-semibold hover:bg-[#5ab2ff] hover:text-white transition-colors">
              Бесплатная консультация
            </button>
          </div>
          <div className="flex gap-8 text-xl text-white">
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
