import { BigCheckbox } from "../constants";

export default function Stats() {
  return (
    <section className="w-full max-w-[1520px] mx-auto px-4 py-10 md:py-20 md:pb-5 text-center">
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#ababab] mb-2 md:mb-4">
        Ежегодно реализуем
      </p>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#181a1c]">
        <BigCheckbox className="w-8 h-8 sm:w-10 sm:h-10 md:w-[55px] md:h-[55px] -mt-1 md:-mt-2 inline-block" />
        &gt;500 успешных сделок
      </p>
    </section>
  );
}
