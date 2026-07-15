"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import awardPhoto from "~/img/state-award.jpg";
import chainReaction from "~/img/portfolio-1.jpg";
import scholarship from "~/img/portfolio-2.jpg";
import worldFestival from "~/img/portfolio-3.jpg";
import gratitude from "~/img/portfolio-4.jpg";
import certificate from "~/img/portfolio-6.jpg";
import caseWinner from "~/img/portfolio-8.jpg";
import olympiad from "~/img/portfolio-9.jpg";
import pgCase from "~/img/portfolio-10.jpg";
import chemistryDiploma from "~/img/portfolio-11.jpg";
import chemistryDiplomaTwo from "~/img/portfolio-12.jpg";

type Proof = {
  year: string;
  place: string;
  title: string;
  image: StaticImageData;
};

const milestones = [
  {
    years: "2014—2016",
    label: "Основа",
    title: "Химия стала моей системой мышления.",
    text: "Начал с побед на олимпиадах в Навои и Ташкенте. Затем — три призовых результата на Всерос по общей и неорганической химии, включая первое место в лабораторном этапе.",
  },
  {
    years: "2016—2018",
    label: "Международный опыт",
    title: "Учился там, где теория встречается с индустрией.",
    text: "Получил стипендии Правительства Российской Федерации, Президента Российской Федерации и Республики Татарстан, а также участвовал во Всемирном фестивале молодёжи и студентов и выступал на международных научных конференциях.",
  },
  {
    years: "2018—2020",
    label: "Практика",
    title: "Проверял знания на реальных задачах.",
    text: "Вошёл в финал Unilever Chain Reaction, победил в 24-часовом Chain Reaction Hack и в кейс-чемпионатах по химии, науке материалов и бизнес-менеджменту. В 2020 году выиграл олимпиаду Open Doors по химии.",
  },
  {
    years: "2024—2026",
    label: "Сегодня",
    title: "Исследования, преподавание и ответственность.",
    text: "Подтвердил английский на уровне C1, защитил PhD по биоразлагаемым полимерным композиционным материалам. Работаю на кафедре химических технологий и веду студентов в исследования, конференции и конкурсы.",
  },
];

const proofs: Proof[] = [
  { year: "2015", place: "Ташкент", title: "I место на международной олимпиаде «Будущее большой химии»", image: chemistryDiploma },
  { year: "2016", place: "2016", title: "Призовые места на Всерос по общей и неорганической химии", image: chemistryDiplomaTwo },
  { year: "2017", place: "Москва · Сочи", title: "XIX Всемирный фестиваль молодёжи и студентов", image: worldFestival },
  { year: "2018", place: "2018", title: "Вклад в научную и студенческую работу университета", image: gratitude },
  { year: "2019", place: "Москва", title: "Победа в 24-часовом Chain Reaction Hack", image: chainReaction },
  { year: "2019", place: "2019", title: "Победа в инженерном кейс-чемпионате СИБУРа", image: caseWinner },
  { year: "2019", place: "Новомосковск", title: "P&G Unsolvable Quest — технический кейс-чемпионат", image: pgCase },
  { year: "2019", place: "2019", title: "Государственная стипендия Республики Татарстан", image: scholarship },
  { year: "2020", place: "Open Doors", title: "Победитель международной олимпиады по химии", image: olympiad },
  { year: "2019", place: "2019", title: "Благодарность за развитие студенческих проектов и олимпиад", image: certificate },
];

const reveal = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

const sectionIds = ["top", "story", "path", "award", "proofs", "media", "science", "contact"];

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-none stroke-current">
      <path d="M16 5v21M8 18l8 8 8-8" strokeWidth="1.5" />
    </svg>
  );
}

function useNarrowViewport() {
  const [isNarrow, setIsNarrow] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 900px)");
    const update = () => setIsNarrow(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isNarrow;
}

function TimelineCard({ item, index }: { item: (typeof milestones)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const prefersReducedMotion = useReducedMotion();
  const isNarrow = useNarrowViewport();
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -36 : 36, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.2, 1]);

  return (
    <motion.article
      ref={ref}
      style={prefersReducedMotion ? undefined : isNarrow ? { opacity } : { x, opacity }}
      className="timeline-card"
    >
      <div className="timeline-meta">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>{item.label}</span>
      </div>
      <div>
        <p className="timeline-year">{item.years}</p>
        <h3>{item.title}</h3>
        <p className="timeline-copy">{item.text}</p>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const awardRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const { scrollYProgress: awardProgress } = useScroll({ target: awardRef, offset: ["start end", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 160]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.08]);
  const awardY = useTransform(awardProgress, [0, 1], [-60, 60]);

  useEffect(() => {
    const isTypingTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;
      const tagName = target.tagName.toLowerCase();
      return target.isContentEditable || tagName === "input" || tagName === "textarea" || tagName === "select";
    };

    const scrollToSection = (direction: 1 | -1) => {
      const sections = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
      if (!sections.length) return;

      const anchor = window.scrollY + window.innerHeight * 0.42;
      const currentIndex = sections.reduce((closestIndex, section, index) => {
        const currentDistance = Math.abs(section.offsetTop - anchor);
        const closestDistance = Math.abs(sections[closestIndex]!.offsetTop - anchor);
        return currentDistance < closestDistance ? index : closestIndex;
      }, 0);
      const nextIndex = Math.min(Math.max(currentIndex + direction, 0), sections.length - 1);

      sections[nextIndex]?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.altKey || event.shiftKey || isTypingTarget(event.target)) return;
      if (event.target instanceof HTMLElement && event.target.closest(".proofs-track")) return;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        scrollToSection(1);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        scrollToSection(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prefersReducedMotion]);

  return (
    <main>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <section ref={heroRef} id="top" className="hero-section">
        <motion.div
          className="hero-image"
          style={prefersReducedMotion ? undefined : { y: heroY, scale: heroScale }}
        >
          <Image src={awardPhoto} alt="Хаёт Истамов на церемонии вручения государственной награды" fill priority sizes="100vw" />
        </motion.div>
        <div className="hero-shade" />
        <div className="hero-content page-shell">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.8 }} className="eyebrow hero-eyebrow">
            Учёный · преподаватель · химический инженер
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            Хаёт<br />Истамов
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.8 }} className="hero-bottom">
            <p>Химическая технология, научная работа и образование — одна траектория длиной более десяти лет.</p>
            <a href="#story" className="scroll-link">Смотреть путь <ArrowDown /></a>
          </motion.div>
        </div>
      </section>

      <section id="story" className="intro-section page-shell">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="eyebrow">О моей работе</p>
          <h2>Превращаю сложные знания<br />в понятные решения.</h2>
        </motion.div>
        <motion.div className="intro-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.12, duration: 0.8 }}>
          <p>Исследую полимерные материалы и преподаю химическую технологию. В работе для меня одинаково важны точность эксперимента, ясность объяснения и польза результата.</p>
          <p>Работаю с полимерными и композиционными материалами, веду студентов через исследования, конференции и практические задачи, а также развиваю научную и учебную работу в университете.</p>
        </motion.div>
      </section>

      <section id="path" className="path-section">
        <div className="page-shell path-grid">
          <div className="path-heading">
            <p className="eyebrow">Профессиональный путь · 2014—2026</p>
            <h2>Не коллекция наград.<br />Последовательность решений.</h2>
          </div>
          <div className="timeline-list">
            {milestones.map((item, index) => <TimelineCard key={item.years} item={item} index={index} />)}
          </div>
        </div>
      </section>

      <section ref={awardRef} id="award" className="award-section">
        <motion.div className="award-photo" style={prefersReducedMotion ? undefined : { y: awardY }}>
          <Image src={awardPhoto} alt="Вручение государственной награды Президентом Республики Узбекистан" fill sizes="100vw" />
        </motion.div>
        <div className="award-overlay" />
        <motion.div className="award-copy page-shell" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.45 }} transition={{ duration: 0.9 }}>
          <p className="eyebrow">Государственное признание</p>
          <h2>Награда — не финальная точка.<br />Это начало масштабных проектов.</h2>
          <p>Церемония вручения государственной награды Президентом Республики Узбекистан.</p>
        </motion.div>
      </section>

      <section id="proofs" className="proofs-section">
        <div className="page-shell proofs-heading">
          <p className="eyebrow">Документы и результаты по достижениям</p>
          <h2>Факты говорят<br />точнее громких слов.</h2>
          <p>Каждый документ — отдельный этап: олимпиада, исследование, стипендия или инженерная задача, за которой стоит конкретная работа и конкретный результат.</p>
        </div>
        <div
          className="proofs-track"
          aria-label="Документы о достижениях"
          tabIndex={0}
          onKeyDown={(event) => {
            if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
            event.preventDefault();
            event.currentTarget.scrollBy({
              left: event.key === "ArrowRight" ? 340 : -340,
              behavior: prefersReducedMotion ? "auto" : "smooth",
            });
          }}
        >
          {proofs.map((proof, index) => (
            <motion.figure
              key={`${proof.year}-${proof.title}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px -80px" }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.04, 0.2) }}
              className="proof-card"
            >
              <div className="proof-image"><Image src={proof.image} alt={proof.title} fill sizes="(max-width: 768px) 72vw, 360px" /></div>
              <figcaption>
                <span>{proof.year} · {proof.place}</span>
                <p>{proof.title}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      <section id="media" className="media-section">
        <div className="page-shell media-grid">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }}>
            <p className="eyebrow">СМИ обо мне</p>
            <h2>Площадки, где я делюсь проектами и новостями.</h2>
            <p className="media-count"><strong>3</strong><span>материала</span></p>
          </motion.div>
          <motion.div className="media-links" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.45 }} transition={{ delay: 0.12, duration: 0.8 }}>
            <a href="https://t.me/Istamov_Hayot" target="_blank" rel="noreferrer">
              <span>Telegram</span>
              <strong>@Istamov_Hayot</strong>
            </a>
            <a href="https://www.instagram.com/istamov_hayot" target="_blank" rel="noreferrer">
              <span>Instagram</span>
              <strong>@istamov_hayot</strong>
            </a>
            <a href="https://youtube.com/@hayot_istamov?feature=shared" target="_blank" rel="noreferrer">
              <span>YouTube</span>
              <strong>Hayot Istamov</strong>
            </a>
          </motion.div>
        </div>
      </section>

      <section id="science" className="science-section page-shell">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Исследование · 2025</p>
          <h2>Материалы,<br />снижающие экологическую нагрузку на природу.</h2>
        </motion.div>
        <motion.div className="science-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.12, duration: 0.8 }}>
          <p>В диссертации исследовал получение биоразлагаемых композиционных материалов на основе синтетических полимеров, которые помогают снижать экологическую нагрузку на природу.</p>
          <p>Сегодня продолжаю научную работу вместе со студентами — от первой гипотезы до конференции и практического результата.</p>
        </motion.div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="page-shell footer-grid">
          <div><p className="eyebrow">Связь</p><h2>Продолжим<br />разговор.</h2></div>
          <div className="footer-links">
            <a href="https://t.me/Istamov_Hayot" target="_blank" rel="noreferrer">Telegram <span>@Istamov_Hayot ↗</span></a>
            <a href="https://www.instagram.com/istamov_hayot" target="_blank" rel="noreferrer">Instagram <span>@istamov_hayot ↗</span></a>
            <a href="https://youtube.com/@hayot_istamov?feature=shared" target="_blank" rel="noreferrer">YouTube <span>↗</span></a>
            <a href="mailto:hayot.istamov@gmail.com">Email <span>↗</span></a>
          </div>
        </div>
        <div className="page-shell footer-bottom"><span>Хаёт Истамов</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </main>
  );
}
