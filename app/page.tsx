import About from "./components/About";
import Hero from "./components/Hero";

// Локальные изображения из Figma
const imgLogo = "/images/logo.png";

const imgFeatureLogistics = "/images/feature-logistics.png";
const imgFeatureFree = "/images/feature-free.png";
const imgFeatureAnyCargo = "/images/feature-any-cargo.png";
const imgFeatureTransparent = "/images/feature-transparent.png";
const imgHoreca = "/images/horeca.png";

// Кейсы - изображения
const imgCase1_1 = "/images/case1-1.png";
const imgCase1_2 = "/images/case1-2.png";
const imgCase1_3 = "/images/case1-3.png";
const imgCase2_1 = "/images/case2-1.png";
const imgCase2_2 = "/images/case2-2.png";
const imgCase2_3 = "/images/case2-3.png";
const imgCase2_4 = "/images/case2-4.png";
const imgCase3_1 = "/images/case3-1.png";
const imgCase3_2 = "/images/case3-2.png";
const imgCase3_3 = "/images/case3-3.png";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f2f2f2] font-[var(--font-manrope)]">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />

      {/* Features Section */}
      <section className="w-full max-w-[1520px] mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Бесплатный подбор товара
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Нулевой риск на старте. Мы инвестируем свое время, чтобы вы
              сэкономили свои деньги.
            </p>
            <img src={imgFeatureFree} alt="" className="w-full rounded-2xl" />
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Любые виды грузов
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Мультиотраслевой охват. От 200 наушников до тяжелого промышленного
              оборудования.
            </p>
            <img
              src={imgFeatureAnyCargo}
              alt=""
              className="w-full rounded-2xl"
            />
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Удобные варианты логистики
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Выбирайте скорость или цену. Авиа, Ж/Д, море или авто. Оптимизация
              маршрута под ваш KPI.
            </p>
            <img
              src={imgFeatureLogistics}
              alt=""
              className="w-full rounded-2xl"
            />
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Прозрачное ведение сделки
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Контроль 360°. Заключение сделки, фотоотчеты с фабрик и понятная
              смета без скрытых комиссий.
            </p>
            <img
              src={imgFeatureTransparent}
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="bg-[#181a1c] rounded-[70px] py-20 my-20">
        <div className="w-full max-w-[1520px] mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <span className="bg-[#404549] px-6 py-3 rounded-full text-base font-semibold text-[#8c959d]">
              Процесс
            </span>
          </div>
          <h2 className="text-7xl font-bold mb-20">
            <span className="text-[#404549]">Как мы работаем:</span>
            <br />
            <span className="text-white">алгоритм успеха</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-[#404549] rounded-[50px] p-12">
              <p className="text-xl font-bold text-white mb-4">Брифинг</p>
              <h3 className="text-4xl font-bold text-white mb-6">
                Запрос и аналитика
              </h3>
              <p className="text-base text-white max-w-3xl">
                Вы формируете запрос. Это может быть ссылка на товар, одно фото,
                артикул, или просто описание идеи. Мы проводим глубокий анализ
                потребностей и составляем ТЗ для поиска.
              </p>
              <p className="text-base text-white max-w-3xl mt-4">
                <span className="font-extrabold text-[#adff78]">Суть: </span>
                Мы превращаем ваш минимальный импульс в четкий запрос для рынка.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#404549] rounded-[50px] p-12">
              <p className="text-xl font-bold text-white mb-4">Скаутинг и КП</p>
              <h3 className="text-4xl font-bold text-white mb-6">
                Поиск, верификация и расчет
              </h3>
              <p className="text-base text-white max-w-3xl">
                Мы находим и верифицируем оптимальную фабрику/поставщика по
                вашим критериям. Исключаем посредников, получаем цены и только
                после этого формируем комплексное Коммерческое Предложение (КП)
                с учетом всех затрат.
              </p>
              <p className="text-base text-white max-w-3xl mt-4">
                <span className="font-extrabold text-[#adff78]">Суть: </span>
                Мы представляем вам досье на производителя и точную смету.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#f2f2f2] rounded-[50px] p-12">
              <h3 className="text-4xl font-bold text-[#181a1c] mb-6">
                Сделка полностью прозрачна
              </h3>
              <div className="grid md:grid-cols-2 gap-8 text-base text-[#181a1c] max-w-3xl">
                <p className="font-medium">
                  Заключаем договор, согласовываем спецификацию
                </p>
                <p className="font-medium">
                  Оплата актуальными для Вас способами: безналичный расчет /
                  наличные в СПБ
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-[#404549] rounded-[50px] p-12">
              <p className="text-xl font-bold text-white mb-4">
                Транзакция и инспекция
              </p>
              <h3 className="text-4xl font-bold text-white mb-6">
                Выкуп, контроль и гарантия
              </h3>
              <p className="text-base text-white max-w-3xl">
                Мы проводим безопасный выкуп и заключаем необходимые договоры.
                Мы берем на себя всю валютную и юридическую сторону сделки,
                гарантируя, что только проверенный и идеальный товар попадает в
                логистическую цепь.
              </p>
              <p className="text-base text-white max-w-3xl mt-4">
                <span className="font-extrabold text-[#adff78]">Суть: </span>
                Мы устраняем все риски между вашей оплатой и моментом отгрузки.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-[#404549] rounded-[50px] p-12">
              <p className="text-xl font-bold text-white mb-4">
                Финальный аккорд
              </p>
              <h3 className="text-4xl font-bold text-white mb-6">
                Логистика «под ключ»
              </h3>
              <p className="text-base text-white max-w-3xl">
                Проводим контрольную проверку товара перед погрузкой. Организуем
                оптимальный маршрут (авиа, море, авто или Ж/Д) и обеспечиваем
                безопасное движение груза. После прибытия в РФ вы выбираете:
                самовывоз с нашего склада или отправка любой транспортной
                компанией до вашего пункта назначения.
              </p>
              <p className="text-base text-white max-w-3xl mt-4">
                <span className="font-extrabold text-[#adff78]">Суть: </span>
                Мы завершаем путь. Вы просто забираете готовый к работе актив.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-16">
            <button className="bg-gradient-to-r from-[#1572a1] to-[#27a6e6] px-12 py-5 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-opacity">
              Бесплатный подсчёт
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="w-full max-w-[1520px] mx-auto px-4 py-20"
      >
        <div className="flex items-center gap-4 mb-12">
          <span className="bg-white px-6 py-3 rounded-full text-base font-semibold">
            Услуги
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Подбор товара по запросу
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              Найдем надежных производителей с лучшим соотношением цены и
              качества. Проанализируем рынок и предоставим выборку.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Сделки под ключ
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              От перевода оплаты до получения товара. Минимизируем ваше участие,
              гарантируя соблюдение сроков и условий договора.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Выезд на фабрику
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              Личный аудит производства нашими агентами в Китае. Предоставим
              детальный фото- и видеоотчет, чтобы вы были уверены в качестве.
            </p>
          </div>

          {/* Service 4 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Сопровождение в Китае
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              Профессиональная поддержка на выставках и встречах внутри страны.
              Организуем перевод и эффективные переговоры с поставщиками.
            </p>
          </div>

          {/* Service 5 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Достаем невозможное
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              Поиск редкого оборудования и эксклюзивных позиций, которых нет в
              доступе. Решаем сложные логистические задачи.
            </p>
          </div>

          {/* Service 6 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#181a1c]">
                Дизайн под ключ
              </h3>
              <span className="bg-[#5ab2ff] text-white text-sm px-4 py-1 rounded-full font-semibold">
                Новая услуга
              </span>
            </div>
            <p className="text-base font-medium text-[#181a1c]">
              Разработка уникальной упаковки, лого и сайта. Адаптируем продукт
              под ваш рынок, выделяя его среди предложений конкурентов.
            </p>
          </div>

          {/* Service 7 */}
          <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow col-span-full lg:col-span-3">
            <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
              Спецзадачи и консалтинг
            </h3>
            <p className="text-base font-medium text-[#181a1c]">
              Обмен крупных сумм юаней, доставка образцов за 7–12 дней.
              Разработка уникальных изделий с нуля: от вашей идеи до серийного
              воплощения.
            </p>
            <button className="mt-6 bg-gradient-to-r from-[#1572a1] to-[#27a6e6] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
              Связаться
            </button>
          </div>
        </div>
      </section>

      {/* HoReCa Section */}
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

      {/* Stats Section */}
      <section className="w-full max-w-[1520px] mx-auto px-4 py-20 text-center">
        <p className="text-7xl font-bold text-[#ababab] mb-4">
          Ежегодно реализуем
        </p>
        <p className="text-7xl font-bold text-[#181a1c]">
          &gt;500 успешных сделок
        </p>
      </section>

      {/* Case Studies */}
      <section id="cases" className="w-full max-w-[1520px] mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="bg-[#f2f2f2] px-6 py-3 rounded-2xl inline-block mb-6">
              <span className="font-bold text-lg">Для производства</span>
            </div>
            <h3 className="text-4xl font-bold text-[#181a1c] mb-6">
              Тепловые насосы
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Товар: тепловой насос инверторного типа.
            </p>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Что мы сделали:
              <br />
              - Провели полный цикл работ: от переговоров с фабрикой до доставки
              клиенту
              <br />
              - Договорились о производстве инверторных тепловых насосов под
              заказ
              <br />
              - Нанесли логотип заказчика
              <br />
              - Перевели техническую документацию на русский язык
              <br />
              - Оплату проводили через китайскую компанию с оформлением всех
              официальных документов
              <br />- Для безопасной доставки все семь насосов были упакованы в
              деревянные ящики
            </p>
            <div className="grid grid-cols-3 gap-2">
              <img
                src={imgCase1_1}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase1_2}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase1_3}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="bg-[#5ab2ff] text-white px-6 py-3 rounded-2xl inline-block mb-6">
              <span className="font-semibold">Достали из Голландии</span>
            </div>
            <h3 className="text-4xl font-bold text-[#181a1c] mb-6">
              Автономные системы Mastervolt
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Товар: Автономные системы электроснабжения Mastervolt.
            </p>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Что мы сделали:
              <br />
              - Направили официальный запрос на голландский завод напрямую от
              лица нашей китайской компании
              <br />
              - Согласовали все спецификации и получили одобрение
              <br />
              - Выкупили товар по официальному инвойсу через юрлицо в КНР
              <br />
              - Провели таможенную очистку и приняли груз на нашем складе в
              Китае
              <br />- Бережно упаковали и отправили в Россию
            </p>
            <div className="grid grid-cols-4 gap-2">
              <img
                src={imgCase2_1}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase2_2}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase2_3}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase2_4}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-white rounded-3xl p-8">
            <div className="bg-[#f2f2f2] px-6 py-3 rounded-2xl inline-block mb-6">
              <span className="font-bold text-lg">Для ИП</span>
            </div>
            <h3 className="text-4xl font-bold text-[#181a1c] mb-6">
              Купольные посудомойки
            </h3>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Товар: Купольные посудомойки с дополнительным резервуаром для
              экономии энергии.
            </p>
            <p className="text-base font-medium text-[#181a1c] mb-6">
              Что мы сделали:
              <br />
              - Мы не просто нашли производителя, мы провели тщательный отбор,
              чтобы гарантировать лучшее соотношение цены и качества
              <br />
              - Подписание контракта и согласование деталей
              <br />
              - Получили одобрение от фабрики на дальнейшую кастомизацию
              продукта
              <br />
              - Приняли товар на складе в Китае и проверили его
              <br />- Бережно упаковали и отправили клиенту
            </p>
            <div className="grid grid-cols-3 gap-2">
              <img
                src={imgCase3_1}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase3_2}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
              <img
                src={imgCase3_3}
                alt=""
                className="w-full h-32 object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
