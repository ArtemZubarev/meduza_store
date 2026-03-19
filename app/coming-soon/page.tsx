import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-[#f2f2f2] px-4">
      <img
        src="/images/penisil.png"
        alt=""
        className="mb-6 w-full max-w-[200px] md:max-w-[300px] mt-10"
      />
      <h1 className="mb-14 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#181a1c] text-center">
        Раздел почти готов <br />{" "}
        <span className=" text-[#ababab]">дорабатываем...</span>
      </h1>

      <Link
        href="/"
        className="bg-white px-8 py-4 rounded-3xl text-base font-semibold text-[#181a1c] hover:bg-[#5ab2ff] hover:text-white transition-colors"
      >
        На главную
      </Link>
    </div>
  );
}
