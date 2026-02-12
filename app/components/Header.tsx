import Link from "next/link";
import { Logo, TgLogo } from "../constants";

const navLinks = [
  { href: "#", label: "Главная" },
  { href: "#about", label: "О нас" },
  { href: "#process", label: "Процесс" },
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Кейсы" },
  { href: "#horeca", label: "HoReСa" },
  { href: "#design", label: "Дизайн" },
];

export default function Header() {
  return (
    <header className="w-full max-w-[1520px] mx-auto px-4 py-6 mt-8">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-8">
        {/* Логотип слева */}
        <div className="flex items-center">
          <Link className="hover:opacity-70 transition-opacity " href="/">
            <Logo className="h-10" />
          </Link>
        </div>

        {/* Меню по центру */}
        <div className="flex justify-center">
          <nav className="lg:inline-flex items-center justify-center gap-8 text-base font-semibold bg-white rounded-3xl px-16 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#5ab2ff] transition-colors font-normal"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Кнопка контактов справа */}
        <div className="flex items-center justify-end gap-2">
          <a
            href="https://t.me/xvasyax"
            target="_blank"
            className="hover:opacity-70 transition-opacity cursor-pointer"
          >
            <TgLogo className="h-10 cursor-pointer" />
          </a>
          <button className="bg-white px-8 py-4 rounded-3xl font-normal hover:bg-[#5ab2ff] hover:text-white transition-colors cursor-pointer">
            Контакты
          </button>
        </div>
      </div>
    </header>
  );
}
