import type { Metadata } from "next";
import HeroHoreca from "../components/HeroHoreca";
import HorecaCatalogGrid from "../components/HorecaCatalogGrid";

export const metadata: Metadata = {
  title: "HoReCa — поставки оборудования из Китая | MeduzaStore",
  description:
    "Прямые контракты с фабриками Китая в сфере HoReCa: тепловая техника и кухонные линии, заводские цены и соответствие стандартам пищевой безопасности.",
};

export default function HorecaPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#f2f2f2] w-full">
      <HeroHoreca />
      <HorecaCatalogGrid />

    </div>
  );
}
