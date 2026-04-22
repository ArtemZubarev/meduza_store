const imgHoreca = "/images/horeca.png";
const imgPromo = "/images/promo.png";

type ProductItem = {
  type: "product";
  id: string;
  image: string;
  imageMaxWidth?: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  badge?: string;
  reviewUrl?: string;
};

type PromoItem = {
  type: "promo";
  id: string;
  title: string;
  body: string;
  ctaLabel: string;
  href?: string;
};

export type HorecaCatalogItem = ProductItem | PromoItem;

const catalogItems: HorecaCatalogItem[] = [
  {
    type: "product",
    id: "1",
    image: "/images/products/01.png",
    imageMaxWidth: "350px",
    alt: "Профессиональное HoReCa оборудование",
    title: "Вытяжка с электрофильтром",
    description:
      "Промышленная кухонная вытяжка с электрофильтром обеспечивает до 97% очистки воздуха от жира и дыма.Надёжное решение для профессиональных кухонь.",
    price: "от 111 000 Р",
    badge: "Топ продукт",
    reviewUrl:
      "https://www.instagram.com/reel/DTvinHNDSos/?igsh=MXN6dHFqa212anZzbQ==",
  },
  {
    type: "product",
    id: "2",
    image: "/images/products/02.png",
    imageMaxWidth: "240px",
    alt: "Купольная посудомоечная машина",
    title: "Купольная посудомоечная машина",
    description:
      "Обеспечивает эффективную высокотемпературную и быстрый цикл 2–3 минуты. Трёхцилиндровый резервуар с повторным использованием подогретой воды снижают энергопотребление.",
    price: "176 400 Р",
    reviewUrl:
      "https://www.instagram.com/reel/DRVE73SDfhS/?igsh=MTNqbmt4OXhyMGZ2bA==",
  },
  {
    type: "product",
    id: "3",
    image: "/images/products/03.png",
    imageMaxWidth: "210px",
    alt: "Аппарат для запайки контейнеров",
    title: "Аппарат для запайки контейнеров",
    badge: "Высокий спрос",
    description:
      "Обеспечивает быструю и герметичную упаковку продуктов с точным контролем температуры. Эффективное решение для пищевого производства и dark-kitchen.",
    price: "44 100 Р",
    reviewUrl:
      "https://www.instagram.com/reel/DTf3CoLDTTH/?igsh=a2Y4ZnluZDI3MHg0",
  },

  {
    type: "product",
    id: "5",
    image: "/images/products/04.png",
    imageMaxWidth: "247px",
    alt: "Роторный автоматический слайсер",
    title: "Роторный автоматический слайсер",
    description:
      "Нарезает до 300–500 кг нарезки в час и подходит для любых продуктов. Комплект из 3 ножей и прочная конструкция обеспечивают стабильную работу на профессиональной кухне.",
    price: "от 145 000 Р",
    badge: "Новинка",
    reviewUrl:
      "https://www.instagram.com/reel/DSp-MMdjW-U/?igsh=MTQ3Zm5oYTQ1ajRtMA==",
  },
  {
    type: "product",
    id: "6",
    image: "/images/products/05.png",
    imageMaxWidth: "276px",
    alt: "Мангал с системой фильтрации дыма",
    title: "Мангал с системой фильтрации дыма",
    description:
      "Установка с системой фильтрации эффективно удаляет дым и запахи, корпус из нержавеющей стали 4 мм, мощность вытяжки 900–1500 Вт, электро-фильтр без замены — решение для проф кухни.",
    price: "от 143 000 Р",
    reviewUrl:
      "https://www.instagram.com/reel/DSAsTOKjUYz/?igsh=MXNrNXNpaDVtcmh1MA==",
  },
  {
    type: "promo",
    id: "4",
    title:
      "Большое количество каталогов вы можете найти в нашем телеграм-канале",
    body: "Если вы уже посмотрели и не нашли необходимый Вам товар, то мы с радостью найдем его для Вас на фабриках Китая.",
    ctaLabel: "К каналу",
    href: "https://t.me/meduzastor",
  },
  {
    type: "product",
    id: "7",
    image: "/images/products/06.png",
    imageMaxWidth: "310px",
    alt: "Аппарат для производства пельменей",
    title: "Аппарат для производства пельменей",
    description:
      "от 4000 пельменей в час с имитацией ручной лепки. Корпус из пищевой нержавеющей стали с удобной конвейерной подачей продукции. Стабильное качество для крупных пищевых производств.",
    price: "253 000 Р",
    badge: "Топ",
    reviewUrl:
      "https://www.instagram.com/reel/DTs6FC4DReL/?igsh=MXFsZ3ZiMDVkZ3I1eQ==",
  },
  {
    type: "product",
    id: "8",
    image: "/images/products/07.png",
    imageMaxWidth: "279px",
    alt: "Фильтр для фритюрного масла",
    title: "Фильтр для фритюрного масла",
    description:
      "Профессиональное устройство разработаннное для увеличения срока службы и качество масла. Аппарат избавляет его от всех вредных примесей – нагара и полимеров триглицеридов.",
    price: "от 72 000 Р",
    badge: "Выгодно",
    reviewUrl:
      "https://www.instagram.com/reel/DUQ9yF-jam6/?igsh=MWhsbmJnNWk3czhwaw==",
  },
  {
    type: "product",
    id: "9",
    image: "/images/products/08.png",
    imageMaxWidth: "207px",
    alt: "Аппарат для производства роллов",
    title: "Аппарат для производства роллов",
    description:
      "Автоматическое формирование идеальных рисовых матов и роллов с хирургической точностью. Компактный дизайн и высокая производительность для быстрой отдачи заказов в суши-барах.",
    price: "от 820 000 Р",
    reviewUrl:
      "https://www.instagram.com/reel/DT0maIrjRgh/?igsh=OHAyYWY1aGY2d245",
  },
  {
    type: "product",
    id: "11",
    image: "/images/products/09.png",
    imageMaxWidth: "260px",
    alt: "Аппарат для приготовления питы и лаваша",
    title: "Аппарат для приготовления питы и лаваша",
    description:
      "Гидравлический аппарат прессового типа с большим количеством регулировок (толщина / время зажатия /температура) создан для выпекания круглого лаваша и питы.",
    price: "от 123 000 Р",
    reviewUrl:
      "https://www.instagram.com/reel/DUjErbjDYd7/?igsh=cWZxZXA1NGpjcXdh",
  },
  {
    type: "promo",
    id: "10",
    title: "HoReCa под ключ: от изящной тарелки до мощного промышленного цеха.",
    body: "Оснастим ваш бизнес профессиональным оборудованием. Экономьте бюджет с технологиями, которые работают на ваш успех 24/7.",
    ctaLabel: "Обсудим?",
    href: "https://t.me/meduzamen",
  },
];

function ProductCard({ item }: { item: ProductItem }) {
  return (
    <article className="relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm md:rounded-3xl">
      {/* Фиксированная высота области фото — тогда заголовки в ряду начинаются на одной Y */}
      <div className="relative flex h-[260px] w-full shrink-0 items-center justify-center overflow-hidden px-4 pt-4 sm:h-[280px] md:h-[300px] md:px-6 md:pt-6">
        {item.badge ? (
          <span className="absolute top-3 right-3 z-10 rounded-full bg-[#5ab2ff] px-3 py-1 text-xs font-semibold text-white">
            {item.badge}
          </span>
        ) : null}
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-full w-auto max-w-full object-contain"
          style={{ maxWidth: item.imageMaxWidth ?? "100%" }}
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2 p-4 md:p-6">
        {/* Две строки по высоте — выравнивание заголовков в ряду */}
        <h3 className="line-clamp-3 min-h-[3.25rem] text-xl leading-snug font-bold text-[#181a1c] md:min-h-[3.5rem] md:text-2xl">
          {item.title}
        </h3>
        {/* Фиксированная «коробка» под описание — одна высота у всех карточек в ряду */}
        <p className="line-clamp-5 min-h-[7.5rem] flex-1 text-sm leading-snug font-medium text-[#404549] md:min-h-[8rem] md:text-base">
          {item.description}
        </p>
        <div className="mt-auto flex gap-2 pt-1">
          <button
            type="button"
            className="max-w-[165px] min-h-11 flex-1 cursor-pointer rounded-2xl bg-[#5ab2ff] px-3 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4a9ee6] md:rounded-3xl md:px-4"
          >
            {item.price}
          </button>
          <a
            target="_blank"
            href={item.reviewUrl}
            className="max-w-[165px] min-h-11 flex-1 cursor-pointer rounded-2xl bg-[#e8e8e8] px-3 py-4 text-center text-sm font-semibold text-[#181a1c] transition-colors hover:bg-[#dedede] md:rounded-3xl md:px-4"
          >
            Смотреть обзор
          </a>
        </div>
      </div>
    </article>
  );
}

function PromoCard({ item }: { item: PromoItem }) {
  return (
    <article
      className="flex h-full min-h-0 w-full flex-col rounded-2xl shadow-sm md:rounded-3xl"
      style={{
        background:
          item.id === "4"
            ? "linear-gradient(180deg, #1572A1 0%, #27A6E6 122.64%)"
            : "#181a1c",
      }}
    >
      {item.id === "10" ? (
        <div className="w-full shrink-0 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
          <img
            src={imgHoreca}
            alt="Horeca"
            className="h-[200px] w-full object-cover sm:h-[230px] md:h-[260px]"
          />
        </div>
      ) : null}
      {item.id === "4" ? (
        <div className="w-full shrink-0 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
          <img
            src={imgPromo}
            alt="Horeca"
            className="w-[90%] object-cover mx-auto pt-4"
          />
        </div>
      ) : null}

      <div className="flex min-h-min flex-1 flex-col gap-2 p-4 pb-5 md:p-6 md:pb-6">
        <h3 className="line-clamp-3 min-h-[3.25rem] text-xl leading-snug font-bold text-white md:min-h-[3.5rem] md:text-2xl">
          {item.title}
        </h3>
        <p className="line-clamp-5 min-h-[7.5rem] flex-1 text-sm leading-snug font-medium text-[#fff] md:min-h-[8rem] md:text-base">
          {item.body}
        </p>
        <div className="mt-auto flex shrink-0 gap-2 pt-1">
          <a
            href={item.href}
            target="_blank"
            style={{
              background: item.id === "4" ? "#fff" : "",
              color: item.id === "4" ? "#181a1c" : "",
            }}
            className="min-h-11 w-full cursor-pointer rounded-2xl bg-[#5ab2ff] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4a9ee6] sm:py-4 md:rounded-3xl md:px-8"
          >
            {item.ctaLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function HorecaCatalogGrid() {
  return (
    <section className="w-full px-4 py-8 md:py-12">
      <div className="mx-auto w-full max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1520px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {catalogItems.map((item) => (
            <div key={item.id} className="h-full min-h-0 w-full">
              {item.type === "product" ? (
                <ProductCard item={item} />
              ) : (
                <PromoCard item={item} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
