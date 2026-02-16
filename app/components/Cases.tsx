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

export default function Cases() {
  return (
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
  );
}
