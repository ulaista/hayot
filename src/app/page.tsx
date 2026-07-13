"use client";

import Image, { type StaticImageData } from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
    text: "Начал с побед на олимпиадах в Навои и Ташкенте. Затем — три призовых результата на всероссийской олимпиаде по общей и неорганической химии в Казани, включая первое место в лабораторном этапе.",
  },
  {
    years: "2016—2018",
    label: "Международный опыт",
    title: "Учился там, где теория встречается с индустрией.",
    text: "Получил стипендии Правительства и Президента Российской Федерации, участвовал во Всемирном фестивале молодёжи и студентов и выступал на международных научных конференциях.",
  },
  {
    years: "2018—2020",
    label: "Практика",
    title: "Проверял знания на реальных задачах.",
    text: "Вошёл в финал Unilever Chain Reaction, победил в 24-часовом Chain Reaction Hack и инженерном кейс-чемпионате СИБУРа. В 2020 году выиграл олимпиаду Open Doors по химии.",
  },
  {
    years: "2024—2026",
    label: "Сегодня",
    title: "Исследования, преподавание и ответственность.",
    text: "Подтвердил английский на уровне C1, защитил PhD по биоразлагаемым композиционным материалам. Работаю старшим преподавателем и веду студентов в исследования, конференции и конкурсы.",
  },
];

const proofs: Proof[] = [
  { year: "2015", place: "Ташкент", title: "I место на международной олимпиаде «Будущее большой химии»", image: chemistryDiploma },
  { year: "2016", place: "Казань", title: "Призовые места на олимпиаде по общей и неорганической химии", image: chemistryDiplomaTwo },
  { year: "2017", place: "Москва · Сочи", title: "XIX Всемирный фестиваль молодёжи и студентов", image: worldFestival },
  { year: "2018", place: "Казань", title: "Вклад в научную и студенческую работу университета", image: gratitude },
  { year: "2019", place: "Москва", title: "Победа в 24-часовом Chain Reaction Hack", image: chainReaction },
  { year: "2019", place: "Казань", title: "Победа в инженерном кейс-чемпионате СИБУРа", image: caseWinner },
  { year: "2019", place: "Новомосковск", title: "P&G Unsolvable Quest — технический кейс-чемпионат", image: pgCase },
  { year: "2019", place: "Казань", title: "Государственная стипендия Республики Татарстан", image: scholarship },
  { year: "2020", place: "Open Doors", title: "Победитель международной олимпиады по химии", image: olympiad },
  { year: "2019", place: "Казань", title: "Благодарность за развитие студенческого сообщества", image: certificate },
];

const reveal = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0 },
};

function ArrowDown() {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-5 w-5 fill-none stroke-current">
      <path d="M16 5v21M8 18l8 8 8-8" strokeWidth="1.5" />
    </svg>
  );
}

function TimelineCard({ item, index }: { item: (typeof milestones)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const prefersReducedMotion = useReducedMotion();
  const x = useTransform(scrollYProgress, [0, 1], [index % 2 === 0 ? -36 : 36, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.45], [0.2, 1]);

  return (
    <motion.article
      ref={ref}
      style={prefersReducedMotion ? undefined : { x, opacity }}
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
            Учёный · преподаватель · инженер
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
          <p className="eyebrow">О работе</p>
          <h2>Превращаю сложные знания<br />в понятные решения.</h2>
        </motion.div>
        <motion.div className="intro-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.12, duration: 0.8 }}>
          <p>Исследую полимерные материалы и преподаю химическую технологию. В работе для меня одинаково важны точность эксперимента, ясность объяснения и польза результата.</p>
          <div className="stat-row">
            <div><strong>26</strong><span>достижений<br />в портфолио</span></div>
            <div><strong>PhD</strong><span>технические<br />науки</span></div>
            <div><strong>C1</strong><span>английский<br />язык</span></div>
          </div>
        </motion.div>
      </section>

      <section id="path" className="path-section">
        <div className="page-shell path-grid">
          <div className="path-heading">
            <p className="eyebrow">Путь · 2014—2026</p>
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
          <h2>Награда — не финальная точка.<br />Это масштаб ответственности.</h2>
          <p>Церемония вручения государственной награды Президентом Республики Узбекистан.</p>
        </motion.div>
      </section>

      <section id="proofs" className="proofs-section">
        <div className="page-shell proofs-heading">
          <p className="eyebrow">Документы и результаты</p>
          <h2>Факты говорят<br />точнее громких слов.</h2>
          <p>Каждый документ — отдельный этап: олимпиада, исследование, стипендия или инженерная задача.</p>
        </div>
        <div className="proofs-track" aria-label="Документы о достижениях">
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

      <section id="science" className="science-section page-shell">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">Исследование · 2025</p>
          <h2>Материалы,<br />которые умеют исчезать.</h2>
        </motion.div>
        <motion.div className="science-copy" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} transition={{ delay: 0.12, duration: 0.8 }}>
          <p>В диссертации исследовал получение биоразлагаемых композиционных материалов на основе синтетических полимеров.</p>
          <p>Сегодня продолжаю научную работу вместе со студентами — от первой гипотезы до конференции и практического результата.</p>
        </motion.div>
      </section>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div><p className="eyebrow">Связь</p><h2>Продолжим<br />разговор.</h2></div>
          <div className="footer-links">
            <a href="https://youtube.com/@hayot_istamov?feature=shared" target="_blank" rel="noreferrer">YouTube <span>↗</span></a>
            <a href="mailto:hayot.istamov@gmail.com">Email <span>↗</span></a>
          </div>
        </div>
        <div className="page-shell footer-bottom"><span>Хаёт Истамов</span><a href="#top">Наверх ↑</a></div>
      </footer>
    </main>
  );
}
