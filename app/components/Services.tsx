import {
  SearchIcon,
  KeyIcon,
  RocketIcon,
  CaseIcon,
  LightningIcon,
  GroupIcon,
} from "../constants";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col md:flex-row gap-6 md:gap-12 items-start w-full max-w-[1520px] mx-auto px-4 py-10 md:py-20"
    >
      <div className="flex-shrink-0">
        <span className="bg-white px-4 md:px-6 py-3 md:py-5 rounded-2xl md:rounded-3xl text-sm md:text-base font-semibold">
          Услуги
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 flex-1">
        {/* Service 1 - Подбор товара по запросу */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="mb-3 md:mb-4">
            <SearchIcon className="w-8 h-8 md:w-[33px] md:h-[33px]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Подбор товара по запросу
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Найдем надежных производителей с лучшим соотношением цены и
            качества. Проанализируем рынок и предоставим выборку.
          </p>
        </div>

        {/* Service 2 - Сделки под ключ */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="mb-3 md:mb-4">
            <KeyIcon className="w-8 h-8 md:w-[31px] md:h-[31px]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Сделки под ключ
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            От перевода оплаты до получения товара. Минимизируем ваше участие,
            гарантируя соблюдение сроков и условий договора.
          </p>
        </div>

        {/* Service 3 - Выезд на фабрику */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="mb-3 md:mb-4">
            <RocketIcon className="w-8 h-8 md:w-[35px] md:h-[35px]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Выезд на фабрику
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Личный аудит производства нашими агентами в Китае. Предоставим
            детальный фото- и видеоотчет, чтобы вы были уверены в качестве.
          </p>
        </div>

        {/* Service 4 - Сопровождение в Китае */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="mb-3 md:mb-4">
            <CaseIcon className="w-8 h-8 md:w-[35px] md:h-[35px]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Сопровождение в Китае
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Профессиональная поддержка на выставках и встречах внутри страны.
            Организуем перевод и эффективные переговоры с поставщиками.
          </p>
        </div>

        {/* Service 5 - Достаем невозможное */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="mb-3 md:mb-4">
            <LightningIcon className="w-5 h-7 md:w-[21px] md:h-[30px]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Достаем невозможное
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Поиск редкого оборудования и эксклюзивных позиций, которых нет в
            доступе. Решаем сложные логистические задачи.
          </p>
        </div>

        {/* Service 6 - Дизайн под ключ */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between mb-3 md:mb-4">
            <span className="bg-[#5ab2ff] text-white text-xs md:text-sm px-3 md:px-4 py-1 rounded-full font-semibold">
              Новая услуга
            </span>
            <div>
              <GroupIcon className="w-8 h-8 md:w-[34px] md:h-[34px]" />
            </div>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Дизайн под ключ
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Разработка уникальной упаковки, лого и сайта. Адаптируем продукт под
            ваш рынок, выделяя его среди предложений конкурентов.
          </p>
        </div>

        {/* Service 7 - Спецзадачи и консалтинг */}
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-3">
          <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
            <GroupIcon className="w-10 h-10 md:w-12 md:h-12" />
            <button className="cursor-pointer bg-gradient-to-r from-[#1572a1] to-[#27a6e6] px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base text-white font-semibold hover:opacity-90 transition-opacity">
              Связаться
            </button>
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-[#181a1c] mb-3 md:mb-4">
            Спецзадачи и консалтинг
          </h3>
          <p className="text-sm md:text-base font-medium text-[#181a1c]">
            Обмен крупных сумм юаней, доставка образцов за 7–12 дней. Разработка
            уникальных изделий с нуля: от вашей идеи до серийного воплощения.
          </p>
        </div>
      </div>
    </section>
  );
}
