import { ProcessStep } from "../constants";

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-[#181a1c] rounded-[70px] py-20 my-20"
    >
      <div className="w-full max-w-[1520px] grid lg:grid-cols-2 gap-6 mx-auto px-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 mb-[34px]">
            <span className="bg-[#404549] px-18 py-5 text-base font-semibold text-[#8c959d] rounded-3xl ">
              Процесс
            </span>
          </div>
          <h2 className="text-7xl font-bold mb-[90px]">
            <span className="text-[#404549]">Как мы работаем:</span>
            <br />
            <span className="text-white">алгоритм успеха</span>
          </h2>
          {/* CTA */}
          <div className="">
            <button className="bg-gradient-to-r from-[#1572a1] to-[#27a6e6] px-12 py-5 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-opacity">
              Бесплатный подсчёт
            </button>
          </div>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-[#404549] rounded-[50px] p-12">
            <div className="flex items-center gap-4 mb-[36px]">
              <ProcessStep step={1} />
              <h3 className="text-4xl font-bold text-white">
                Запрос и аналитика
              </h3>
            </div>

            <p className="text-xl font-bold text-white mb-2">Брифинг</p>
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
            <div className="flex items-center gap-4 mb-[36px]">
              <ProcessStep step={2} />
              <h3 className="text-4xl font-bold text-white">
                Поиск, верификация и расчет
              </h3>
            </div>

            <p className="text-xl font-bold text-white mb-2">Скаутинг и КП</p>
            <p className="text-base text-white max-w-3xl">
              Мы находим и верифицируем оптимальную фабрику/поставщика по вашим
              критериям. Исключаем посредников, получаем цены и только после
              этого формируем комплексное Коммерческое Предложение (КП) с учетом
              всех затрат.
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
            <div className="flex items-center gap-4 mb-[36px]">
              <ProcessStep step={3} />
              <h3 className="text-4xl font-bold text-white">
                Выкуп, контроль и гарантия
              </h3>
            </div>
            <p className="text-xl font-bold text-white mb-2">
              Транзакция и инспекция
            </p>
            <p className="text-base text-white max-w-3xl">
              Мы проводим безопасный выкуп и заключаем необходимые договоры. Мы
              берем на себя всю валютную и юридическую сторону сделки,
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
            <div className="flex items-center gap-4 mb-[36px]">
              <ProcessStep step={4} />
              <h3 className="text-4xl font-bold text-white">
                Логистика «под ключ»
              </h3>
            </div>
            <p className="text-xl font-bold text-white mb-2">
              Финальный аккорд
            </p>

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
      </div>
    </section>
  );
}
