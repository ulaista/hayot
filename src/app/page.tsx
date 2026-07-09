"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FaTelegramPlane, FaYoutube } from "react-icons/fa";
import { HiArrowUpRight, HiBeaker, HiGlobeAlt } from "react-icons/hi2";
import portrait from "~/img/1.jpeg";
import lecture from "~/img/2.jpg";
import { works } from "./portfolio/works";

type Language = "ru" | "uz";

const content = {
  ru: {
    langLabel: "RU",
    switchLabel: "O‘zbekcha",
    nav: ["О миссии", "Экспертиза", "Публикации", "Контакты"],
    badge: "Презентационный сайт учёного и преподавателя",
    title: "Истамов Ҳаёт Йўлчиевич",
    subtitle:
      "Химик-исследователь, старший преподаватель Навоийского государственного горно-технологического университета и автор работ о биоразлагаемых полимерных композитах.",
    primaryCta: "Связаться",
    secondaryCta: "Смотреть лекции",
    facts: [
      ["Направление", "Органическая химия и материалы"],
      ["Фокус", "Биоразлагаемые композиты"],
      ["Регион", "Навоий, Узбекистан"],
    ],
    aboutTitle: "Наука, образование и экологичные материалы",
    aboutText:
      "Публичные источники связывают Hayot Istamov с Навоийским государственным горно-технологическим университетом, преподаванием химии и исследованиями синтетических полимеров, которые могут разлагаться более экологично. Поэтому сайт оформлен как профессиональная визитка молодого учёного: строго, технологично и с акцентом на доверие.",
    sourceNote:
      "Информация основана на открытых источниках: профиль Google Scholar, автореферат диссертации на ZiyoNET, публикация E3S Web of Conferences и указ Президента Узбекистана о награждении «Mard o‘g‘lon».",
    expertiseTitle: "Ключевые направления",
    expertise: [
      {
        title: "Биоразлагаемые полимерные материалы",
        text: "Исследование композиционных материалов на основе синтетических полимеров и природных модификаторов.",
      },
      {
        title: "Химическое образование",
        text: "Объяснение сложной химии через понятные лекции, практику и визуальные демонстрации.",
      },
      {
        title: "Научная коммуникация",
        text: "Публикации, выступления и популяризация технологий, которые уменьшают экологическую нагрузку.",
      },
    ],
    highlightsTitle: "Факты из открытых источников",
    highlights: [
      "Старший преподаватель Навоийского государственного горно-технологического университета.",
      "Автор исследования о биоразложении поливинилхлорида с использованием модифицированного рисового крахмала.",
      "Тема PhD-автореферата: получение и исследование биоразлагаемых композиционных материалов на основе синтетических полимеров.",
      "Отмечен в списке награждённых государственной премией «Mard o‘g‘lon».",
    ],
    galleryTitle: "Визуальный профиль",
    contactTitle: "Открыт к профессиональному диалогу",
    contactText:
      "Для образовательных проектов, научных коллабораций, лекций и медиа-запросов можно связаться через Telegram или посмотреть материалы на YouTube.",
    telegram: "Telegram",
    youtube: "YouTube канал",
  },
  uz: {
    langLabel: "UZ",
    switchLabel: "Русский",
    nav: ["Missiya", "Ekspertiza", "Nashrlar", "Aloqa"],
    badge: "Olim va pedagog uchun zamonaviy taqdimot sayti",
    title: "Istamov Hayot Yo‘lchiyevich",
    subtitle:
      "Kimyogar-tadqiqotchi, Navoiy davlat konchilik va texnologiyalar universiteti katta o‘qituvchisi hamda biologik parchalanadigan polimer kompozitlari bo‘yicha ilmiy ishlar muallifi.",
    primaryCta: "Bog‘lanish",
    secondaryCta: "Ma’ruzalarni ko‘rish",
    facts: [
      ["Yo‘nalish", "Organik kimyo va materiallar"],
      ["Fokus", "Bioparchalanuvchi kompozitlar"],
      ["Hudud", "Navoiy, O‘zbekiston"],
    ],
    aboutTitle: "Ilm-fan, ta’lim va ekologik materiallar",
    aboutText:
      "Ochiq manbalar Hayot Istamovni Navoiy davlat konchilik va texnologiyalar universiteti, kimyo ta’limi va ekologik jihatdan qulayroq parchalanishi mumkin bo‘lgan sintetik polimerlar tadqiqotlari bilan bog‘laydi. Shu sababli sayt yosh olimning ishonchli, texnologik va professional vizitkasi sifatida ishlab chiqildi.",
    sourceNote:
      "Ma’lumotlar ochiq manbalarga tayangan: Google Scholar profili, ZiyoNET’dagi dissertatsiya avtoreferati, E3S Web of Conferences maqolasi va O‘zbekiston Prezidenti qaroridagi «Mard o‘g‘lon» mukofoti ro‘yxati.",
    expertiseTitle: "Asosiy yo‘nalishlar",
    expertise: [
      {
        title: "Bioparchalanuvchi polimer materiallar",
        text: "Sintetik polimerlar va tabiiy modifikatorlar asosidagi kompozitsion materiallarni tadqiq qilish.",
      },
      {
        title: "Kimyo ta’limi",
        text: "Murakkab kimyoni tushunarli ma’ruzalar, amaliyot va vizual namoyishlar orqali yetkazish.",
      },
      {
        title: "Ilmiy kommunikatsiya",
        text: "Ekologik yuklamani kamaytiruvchi texnologiyalar bo‘yicha nashrlar, chiqishlar va targ‘ibot.",
      },
    ],
    highlightsTitle: "Ochiq manbalardagi faktlar",
    highlights: [
      "Navoiy davlat konchilik va texnologiyalar universiteti katta o‘qituvchisi.",
      "Modifikatsiyalangan guruch kraxmali yordamida polivinilxlorid biodegradatsiyasi haqidagi tadqiqot muallifi.",
      "PhD avtoreferati mavzusi: sintetik polimerlar asosida bioparchalanuvchi kompozitsion materiallarni olish va tadqiq qilish.",
      "«Mard o‘g‘lon» davlat mukofoti bilan taqdirlanganlar ro‘yxatida qayd etilgan.",
    ],
    galleryTitle: "Vizual profil",
    contactTitle: "Professional hamkorlik uchun ochiq",
    contactText:
      "Ta’lim loyihalari, ilmiy hamkorlik, ma’ruzalar va media so‘rovlari uchun Telegram orqali bog‘lanish yoki YouTube materiallarini ko‘rish mumkin.",
    telegram: "Telegram",
    youtube: "YouTube kanali",
  },
} satisfies Record<Language, Record<string, unknown>>;

const anchors = ["mission", "expertise", "publications", "contact"];

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = content[language];
  const previewWorks = useMemo(() => works.slice(0, 6), []);

  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#155e75_0,#020617_34%,#020617_100%)] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="#top" className="text-sm font-semibold tracking-[0.35em]">
            HAYOT ISTAMOV
          </Link>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {t.nav.map((item, index) => (
              <Link
                key={item}
                href={`#${anchors[index]}`}
                className="transition hover:text-cyan-200"
              >
                {item}
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setLanguage(language === "ru" ? "uz" : "ru")}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/20"
            aria-label="Change language"
          >
            <HiGlobeAlt className="h-4 w-4" />
            {t.langLabel} / {t.switchLabel}
          </button>
        </nav>
      </header>

      <section
        id="top"
        className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:pt-28"
      >
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/40 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_24px_#6ee7b7]" />
            {t.badge}
          </div>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            {t.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {t.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-950/40 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              {t.primaryCta}
              <HiArrowUpRight className="h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              <FaYoutube className="h-5 w-5 text-red-300" />
              {t.secondaryCta}
            </Link>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {t.facts.map(([label, value]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200/80">
                  {label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 min-h-[560px]">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute bottom-10 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="relative ml-auto max-w-lg rounded-[2.5rem] border border-white/10 bg-white/10 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <Image
              src={portrait}
              alt="Hayot Istamov portrait"
              priority
              className="h-[620px] rounded-[2rem] object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-0 max-w-xs rounded-3xl border border-white/10 bg-slate-900/90 p-5 shadow-2xl backdrop-blur">
            <div className="mb-3 inline-flex rounded-2xl bg-cyan-300/15 p-3 text-cyan-200">
              <HiBeaker className="h-7 w-7" />
            </div>
            <p className="text-sm leading-6 text-slate-300">{t.sourceNote}</p>
          </div>
        </div>
      </section>

      <section id="mission" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <Image
            src={lecture}
            alt="Hayot Istamov lecture photo"
            className="h-full max-h-[560px] rounded-[2rem] object-cover shadow-2xl shadow-black/30"
          />
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur md:p-12">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-200">
              {anchors[0]}
            </p>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              {t.aboutTitle}
            </h2>
            <p className="mt-6 text-lg leading-9 text-slate-300">
              {t.aboutText}
            </p>
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl px-5 py-20">
        <h2 className="text-4xl font-black tracking-tight md:text-5xl">
          {t.expertiseTitle}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {t.expertise.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-cyan-300/10"
            >
              <div className="mb-8 text-6xl font-black text-white/10 group-hover:text-cyan-200/20">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="publications" className="mx-auto max-w-7xl px-5 py-20">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              {t.highlightsTitle}
            </h2>
            <div className="mt-8 space-y-4">
              {t.highlights.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-300" />
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-8 text-4xl font-black tracking-tight md:text-5xl">
              {t.galleryTitle}
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {previewWorks.map((work, index) => (
                <Image
                  key={`${work.art}-${index}`}
                  src={work.art}
                  alt={`Hayot Istamov gallery ${index + 1}`}
                  width={340}
                  height={430}
                  className="h-48 rounded-3xl object-cover shadow-xl shadow-black/25 transition hover:scale-[1.03] md:h-64"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20">
        <div className="overflow-hidden rounded-[2.5rem] border border-cyan-200/20 bg-cyan-300 p-[1px] shadow-2xl shadow-cyan-950/30">
          <div className="grid gap-8 rounded-[2.45rem] bg-slate-950 p-8 md:p-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {t.contactText}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:flex-col">
              <Link
                href="https://t.me/Istamov_Hayot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-cyan-300 px-7 py-4 font-black text-slate-950 transition hover:bg-cyan-200"
              >
                <FaTelegramPlane className="h-5 w-5" />
                {t.telegram}
              </Link>
              <Link
                href="https://youtube.com/@hayot_istamov?feature=shared"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-black text-white transition hover:bg-white/15"
              >
                <FaYoutube className="h-5 w-5 text-red-300" />
                {t.youtube}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
