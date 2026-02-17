"use client";

import { useState } from "react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full max-w-[1520px] mx-auto px-4 py-4 md:py-6 mt-4 md:mt-8">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8">
        {/* Логотип слева */}
        <div className="flex items-center">
          <Link className="hover:opacity-70 transition-opacity" href="/">
            <Logo className="h-8 md:h-10" />
          </Link>
        </div>

        {/* Меню по центру - десктоп */}
        <div className="hidden lg:flex justify-center">
          <nav className="inline-flex items-center justify-center gap-6 xl:gap-8 text-sm xl:text-base font-semibold bg-white rounded-3xl px-8 xl:px-16 py-3 xl:py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#5ab2ff] transition-colors font-semibold whitespace-nowrap"
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
            rel="noopener noreferrer"
            className="hidden sm:block hover:opacity-70 transition-opacity cursor-pointer"
          >
            <TgLogo className="h-8 md:h-10 cursor-pointer" />
          </a>
          <button className="hidden sm:block bg-white px-4 md:px-8 py-2 md:py-4 rounded-2xl md:rounded-3xl text-sm md:text-base font-semibold hover:bg-[#5ab2ff] hover:text-white transition-colors cursor-pointer whitespace-nowrap">
            Контакты
          </button>

          {/* Гамбургер меню - мобильное */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            aria-label="Меню"
          >
            <span
              className={`block w-6 h-0.5 bg-[#181a1c] transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#181a1c] transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#181a1c] transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="text-base font-medium text-[#181a1c] hover:text-[#5ab2ff] transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
              <a
                href="https://t.me/xvasyax"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="hover:opacity-70 transition-opacity"
              >
                <TgLogo className="h-8" />
              </a>
              <button
                onClick={closeMenu}
                className="bg-[#5ab2ff] text-white px-6 py-3 rounded-2xl font-medium hover:bg-[#4a9ee6] transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
