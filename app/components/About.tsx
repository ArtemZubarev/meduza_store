export default function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1520px] flex flex-col md:flex-row gap-6 md:gap-12 mx-auto px-4 py-10 md:py-20"
    >
      <div className="flex-shrink-0">
        <span className="flex min-w-[100px] justify-center bg-white px-4 md:px-6 py-3 md:py-5 rounded-2xl md:rounded-3xl text-sm md:text-base text-center font-semibold mt-2">
          О нас
        </span>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8">
            <span className="text-[#181a1c]">Почему «Стор»?</span>
            <br />
            <span className="text-[#ababab]">Вы же не магазин!</span>
          </h2>
        </div>
        <div className="text-base md:text-lg lg:text-xl font-normal text-[#181a1c] space-y-4 md:space-y-6">
          <p>
            Мы не традиционный магазин, заполненный готовым товаром.{" "}
            <span className="font-extrabold">
              MeduzaStore - это хранилище (Store) стратегических ресурсов и
              готовых решений для вашего бизнеса.
            </span>
          </p>
          <p>
            Мы - цифровой мозг, который собирает и структурирует ресурсы
            мирового производства специально для вас. Мы храним не товар, а
            знание, проверенные контакты и безопасные алгоритмы импорта.
          </p>
          <p>
            Мы - ваш персональный интегратор процессов импорта и поставок из
            Китая. Наша миссия проста: устранить сложность и риск, которые
            возникают при работе с зарубежными поставщиками. Мы обеспечиваем
            полную, безопасную и прозрачную сделку.
          </p>
        </div>
      </div>
    </section>
  );
}
