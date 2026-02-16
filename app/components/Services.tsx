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
      className="flex gap-12 items-start w-full max-w-[1520px] mx-auto px-4 py-20"
    >
      <div className="flex items-center gap-4 mb-12">
        <span className="bg-white px-6 py-5 rounded-3xl text-base font-semibold">
          Услуги
        </span>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 - Подбор товара по запросу */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <SearchIcon className="w-[33px] h-[33px]" />
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Подбор товара по запросу
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Найдем надежных производителей с лучшим соотношением цены и
            качества. Проанализируем рынок и предоставим выборку.
          </p>
        </div>

        {/* Service 2 - Сделки под ключ */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <KeyIcon className="w-[31px] h-[31px]" />
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Сделки под ключ
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            От перевода оплаты до получения товара. Минимизируем ваше участие,
            гарантируя соблюдение сроков и условий договора.
          </p>
        </div>

        {/* Service 3 - Выезд на фабрику */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <RocketIcon className="w-[35px] h-[35px]" />
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Выезд на фабрику
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Личный аудит производства нашими агентами в Китае. Предоставим
            детальный фото- и видеоотчет, чтобы вы были уверены в качестве.
          </p>
        </div>

        {/* Service 4 - Сопровождение в Китае */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <CaseIcon className="w-[35px] h-[35px]" />
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Сопровождение в Китае
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Профессиональная поддержка на выставках и встречах внутри страны.
            Организуем перевод и эффективные переговоры с поставщиками.
          </p>
        </div>

        {/* Service 5 - Достаем невозможное */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="mb-4">
            <LightningIcon className="w-[21px] h-[30px]" />
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Достаем невозможное
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Поиск редкого оборудования и эксклюзивных позиций, которых нет в
            доступе. Решаем сложные логистические задачи.
          </p>
        </div>

        {/* Service 6 - Дизайн под ключ */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <span className="bg-[#5ab2ff] text-white text-sm px-4 py-1 rounded-full font-semibold">
              Новая услуга
            </span>
            <div>
              <GroupIcon className="w-[34px] h-[34px]" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Дизайн под ключ
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Разработка уникальной упаковки, лого и сайта. Адаптируем продукт под
            ваш рынок, выделяя его среди предложений конкурентов.
          </p>
        </div>

        {/* Service 7 - Спецзадачи и консалтинг */}
        <div className="bg-white rounded-3xl p-8 hover:shadow-xl transition-shadow ">
          <div className="flex items-start gap-4 mb-4">
            <GroupIcon className="w-12 h-12" />
            <button className="cursor-pointer bg-gradient-to-r from-[#1572a1] to-[#27a6e6] px-8 py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity">
              Связаться
            </button>
          </div>
          <div className="mb-4"></div>
          <h3 className="text-2xl font-bold text-[#181a1c] mb-4">
            Спецзадачи и консалтинг
          </h3>
          <p className="text-base font-medium text-[#181a1c]">
            Обмен крупных сумм юаней, доставка образцов за 7–12 дней. Разработка
            уникальных изделий с нуля: от вашей идеи до серийного воплощения.
          </p>
        </div>
      </div>
    </section>
  );
}
