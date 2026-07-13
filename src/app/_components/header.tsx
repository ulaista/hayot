"use client";

import { useEffect, useState } from "react";

const links = [
  ["О работе", "#story"],
  ["Путь", "#path"],
  ["Достижения", "#proofs"],
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <a className="site-logo" href="#top" onClick={() => setOpen(false)} aria-label="Хаёт Истамов — на главную">HI<span>·</span></a>
      <nav aria-label="Основная навигация">
        {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      </nav>
      <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Закрыть меню" : "Открыть меню"}>
        <span /><span />
      </button>
      <a className="header-contact" href="#science">Исследования <span>↘</span></a>
    </header>
  );
}
