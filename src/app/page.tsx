"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Typewriter } from "@/components/Typewriter";
import { useReveal } from "@/hooks/use-reveal";

/* ──────────────────── Data ──────────────────── */

const stack = [
  { name: "Node.js", note: "primary" },
  { name: "Python", note: "primary" },
  { name: "React / Next.js", note: "primary" },
  { name: "MongoDB", note: "data" },
  { name: "PostgreSQL", note: "data" },
  { name: "Docker", note: "runtime" },
  { name: "AWS", note: "cloud" },
  { name: "C#", note: "tooling" },
  { name: "Express", note: "framework" },
  { name: "Cybersecurity", note: "specialty" },
  { name: "REST APIs", note: "discipline" },
  { name: "Git / CI/CD", note: "workflow" },
];

const projects = [
  {
    id: "P-01",
    title: "85 Gifts",
    desc: "Modern online gifting platform with occasion-based filtering, personalized recommendations, secure payment processing, and real-time inventory management.",
    tech: "Node.js · MongoDB · Express · React",
    metrics: ["E-Commerce", "Payment API", "Live"],
    image: "/images/projects/85gifts.png",
    href: "https://www.85gifts.com/",
  },
  {
    id: "P-02",
    title: "Jbees Eatery & Lounge",
    desc: "High-performance business website with responsive design, SEO optimization, and clean architecture for fast load times and smooth UX across all devices.",
    tech: "HTML · CSS · JavaScript",
    metrics: ["Responsive", "SEO", "Live"],
    image: "/images/projects/jbees.png",
    href: "https://jbees.com.ng",
  },
  {
    id: "P-03",
    title: "Sage & Silk",
    desc: "Online clothing store with category-based filtering, media-rich product displays, admin upload dashboard, and PCI-compliant checkout with real-time inventory.",
    tech: "Node.js · MongoDB · Express · React",
    metrics: ["E-Commerce", "Admin Panel", "Live"],
    image: "/images/projects/sagesilk.jpg",
    href: "https://sage-silk-gpxx.onrender.com/",
  },
  {
    id: "P-04",
    title: "Audita",
    desc: "Specialized platform for external auditors and eateries to collaborate on financial reviews with secure logins, data entry, and centralized reporting.",
    tech: "Node.js · Express · EJS",
    metrics: ["Secure Auth", "Reporting", "Live"],
    image: "/images/projects/audit.png",
    href: "https://audita-rfxa.onrender.com",
  },
  {
    id: "P-05",
    title: "StreamHive",
    desc: "Fast movie streaming and download platform with admin dashboard, genre browsing, and Netflix-inspired UX built on a scalable Node.js backend.",
    tech: "Node.js · Express · MongoDB",
    metrics: ["Streaming", "Admin Panel", "Live"],
    image: "/images/projects/streamhive.png",
    href: "https://streamhiveapp.onrender.com",
  },
  {
    id: "P-06",
    title: "Submissio",
    desc: "API-powered contact form builder with custom forms, webhook notifications, spam protection, analytics, and full dark mode support.",
    tech: "Node.js · Express · EJS",
    metrics: ["SaaS", "API-first", "Live"],
    image: "/images/projects/submissio.png",
    href: "http://submissio.onrender.com/",
  },
  {
    id: "P-07",
    title: "KonnectiCus",
    desc: "Comprehensive business solutions platform with technology implementation, human capital development, and digital market presence.",
    tech: "HTML · CSS · JavaScript · Bootstrap",
    metrics: ["Business", "Responsive", "Live"],
    image: "/images/projects/konnecticus.png",
    href: "https://konnecticus.netlify.app/",
  },
  {
    id: "P-08",
    title: "Stella Empire",
    desc: "Premier beauty and style platform with expert service booking, intuitive UI, and responsive design for hair, nails, wigs, and luxury accessories.",
    tech: "HTML · CSS · JavaScript",
    metrics: ["Booking", "Responsive", "Live"],
    image: "/images/projects/stellaempire.png",
    href: "http://stellaempire.netlify.app/",
  },
  {
    id: "P-09",
    title: "JhoKitchen",
    desc: "Online food ordering platform with live delivery tracking, restaurant connections, and a smooth ordering experience built on MongoDB and React.",
    tech: "MongoDB · React",
    metrics: ["Delivery", "Real-time", "Live"],
    image: "/images/projects/jhokitchen.jpg",
    href: "https://jhokitchen.netlify.app/",
  },
];

/* ──────────────────── Atoms ──────────────────── */

function Crosshairs() {
  return (
    <div className="crosshair-group">
      <span className="crosshair" />
      <span className="crosshair" />
      <span className="crosshair" />
      <span className="crosshair" />
    </div>
  );
}

function SectionHeader({
  index,
  title,
  caption,
}: {
  index: string;
  title: string;
  caption?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-12 md:mb-20">
      <div className="flex items-center gap-4">
        <span className="label-mono">[{index}]</span>
        <span className="dotted-h w-12 md:w-24 text-foreground" />
        <h2 className="label-mono text-foreground">{title}</h2>
      </div>
      {caption && <span className="label-mono opacity-70">{caption}</span>}
    </div>
  );
}

/* ──────────────────── Nav ──────────────────── */

function Nav() {
  const [active, setActive] = useState("");
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const ids = ["about", "stack", "projects", "contact"];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    const onMove = (e: MouseEvent) =>
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
    window.addEventListener("mousemove", onMove);
    return () => {
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  const links = [
    ["about", "About"],
    ["stack", "Stack"],
    ["projects", "Projects"],
    ["contact", "Contact"],
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-foreground">
      <nav className="flex items-center justify-between px-6 md:px-10 h-12">
        <a href="#top" className="label-mono">
          ◇ OJ / FULL-STACK.ENG
        </a>
        <ul className="hidden md:flex items-center gap-8 label-mono">
          {links.map(([id, label], i) => (
            <li key={id} className="flex items-center gap-2">
              <span className="opacity-60">0{i + 1}</span>
              <a
                href={`#${id}`}
                className={`link-underline ${active === id ? "underline underline-offset-4" : ""}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <span className="hidden md:block label-mono opacity-70 tabular-nums">
            x:{String(coords.x).padStart(4, "0")} · y:{String(coords.y).padStart(4, "0")}
          </span>
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-6 w-6 items-center justify-center label-mono"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "◐" : "◑"}
            </button>
          )}
        </div>
      </nav>
      <div className="dotted-h text-foreground opacity-40" />
    </header>
  );
}

/* ──────────────────── Contact Form ──────────────────── */

const inputClass = "h-11 w-full border border-foreground bg-background px-4 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-2";

function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:jovyodionye@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="label-mono-dim">NAME</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="label-mono-dim">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="label-mono-dim">MESSAGE</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me about your project..."
          className="w-full border border-foreground bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-2 resize-y"
        />
      </div>
      <button
        type="submit"
        className="w-full h-11 border border-foreground bg-foreground text-background label-mono hover:bg-background hover:text-foreground transition-colors cursor-pointer"
      >
        {sent ? "⌁ LAUNCHING MAIL CLIENT..." : "⌁ SEND MESSAGE"}
      </button>
    </form>
  );
}

/* ──────────────────── Page ──────────────────── */

export default function HomePage() {
  useReveal();

  return (
    <div id="top" className="bg-background text-foreground relative">
      <Nav />

      {/* Side rails */}
      <div className="pointer-events-none fixed inset-y-0 left-0 w-6 md:w-10 border-r border-foreground/20 z-10" />
      <div className="pointer-events-none fixed inset-y-0 right-0 w-6 md:w-10 border-l border-foreground/20 z-10" />

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen pt-12 px-6 md:px-10 overflow-hidden">
        <div className="absolute inset-0 bp-grid pointer-events-none" />

        {/* Sheet header */}
        <div className="relative grid grid-cols-12 gap-4 pt-10 label-mono">
          <div className="col-span-3">
            <div className="opacity-60">SHEET</div>
            <div className="mt-1">A-001 · INDEX</div>
          </div>
          <div className="col-span-3">
            <div className="opacity-60">SCALE</div>
            <div className="mt-1">1 : 1</div>
          </div>
          <div className="col-span-3">
            <div className="opacity-60">REV</div>
            <div className="mt-1">07 · 2026.05.12</div>
          </div>
          <div className="col-span-3 text-right">
            <div className="opacity-60">DRAWN BY</div>
            <div className="mt-1">O. JOVITA</div>
          </div>
        </div>

        {/* Title block */}
        <div className="relative mt-16 md:mt-24">
          <div className="flex items-center gap-3 label-mono mb-6">
            <span>$ whoami</span>
            <span className="dotted-h flex-1 text-foreground opacity-60" />
            <span>OK · 0ms</span>
          </div>

          <div className="relative inline-block">
            <Crosshairs />
            <h1 className="text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-[0.85] tracking-[-0.04em] uppercase">
              Odionye
              <br />
              Jovita.
            </h1>
          </div>

          <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-2xl md:text-4xl font-medium tracking-tight">
              <span className="label-mono-dim mr-3">role //</span>
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Security Engineer",
                  "Backend Engineer",
                  "API Designer",
                ]}
              />
            </h2>
            <div className="label-mono opacity-70">
              LAT 9.0820° N · LON 8.6753° E · NIGERIA
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-12 gap-6 max-w-5xl">
            <p className="md:col-span-8 text-base md:text-lg leading-relaxed">
              Full-Stack Developer & Security Engineer — crafting secure APIs,
              robust infrastructure, and clean code with Node.js, Python, and
              cloud-native technologies. Available for freelance and
              collaboration worldwide.
            </p>
            <div className="md:col-span-4 border-t border-foreground pt-3 label-mono">
              <div className="flex justify-between"><span>STATUS</span><span>● AVAILABLE</span></div>
              <div className="flex justify-between mt-1"><span>EXP</span><span>03+ YR</span></div>
              <div className="flex justify-between mt-1"><span>SHIP</span><span>WORLDWIDE</span></div>
            </div>
          </div>

          <div className="mt-10 flex gap-4 flex-wrap">
            <a
              href="/images/JovitaResume.pdf"
              download
              className="inline-flex items-center gap-2 h-11 px-6 border border-foreground bg-foreground text-background label-mono hover:bg-background hover:text-foreground transition-colors"
            >
              ⌁ DOWNLOAD RESUME
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 h-11 px-6 border border-foreground label-mono hover:bg-foreground hover:text-background transition-colors"
            >
              ↗ VIEW RESUME
            </a>
          </div>
        </div>

        {/* Bottom legend */}
        <div className="absolute bottom-6 left-6 md:left-10 right-6 md:right-10 flex items-center justify-between label-mono">
          <span>↓ scroll · sec [01]</span>
          <span className="dotted-h flex-1 mx-6 text-foreground opacity-50" />
          <span>fig. 01 — title block</span>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section
        id="about"
        className="relative px-6 md:px-10 py-32 md:py-44 border-t border-foreground"
      >
        <SectionHeader index="01" title="ABOUT" caption="fig. 02 — bio" />
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2 reveal label-mono">
            <div>NAME</div>
            <div className="mt-1 opacity-70">ODIONYE JOVITA</div>
            <div className="mt-6">ALIAS</div>
            <div className="mt-1 opacity-70">BYJOVE TECH</div>
            <div className="mt-6">FILE</div>
            <div className="mt-1 opacity-70">/about.md</div>
          </div>
          <div className="md:col-span-10 reveal">
            <p className="text-2xl md:text-4xl font-medium tracking-tight leading-[1.2]">
              I&apos;m a full-stack developer who loves to build things that
              matter — and yes, I also enjoy breaking things, but only to
              learn and make them better. Crafting modern web apps with React,
              Node.js, and Python, while diving deep into ethical hacking and
              security testing to keep those apps safe.
            </p>
            <div className="mt-10 dotted-h text-foreground" />
            <div className="grid grid-cols-3 mt-6 label-mono">
              <div><div className="opacity-60">FOCUS</div><div className="mt-1">FULL-STACK · SECURITY</div></div>
              <div><div className="opacity-60">METHOD</div><div className="mt-1">CLEAN · SCALABLE</div></div>
              <div><div className="opacity-60">OUTPUT</div><div className="mt-1">15+ PROJECTS SHIPPED</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STACK ─── */}
      <section
        id="stack"
        className="relative px-6 md:px-10 py-32 md:py-44 border-t border-foreground"
      >
        <SectionHeader index="02" title="STACK" caption="fig. 03 — schematic" />
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-3 reveal">
            <div className="relative border border-foreground p-6">
              <Crosshairs />
              <div className="label-mono-dim mb-2">LEGEND</div>
              <ul className="label-mono space-y-1">
                <li>◆ primary language</li>
                <li>◇ tooling / runtime</li>
                <li>○ data layer</li>
                <li>— transport / workflow</li>
              </ul>
              <div className="mt-6 label-mono-dim">COUNT</div>
              <div className="text-4xl font-bold tabular-nums">{stack.length}</div>
            </div>
          </div>
          <ul className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground border border-foreground">
            {stack.map((s, i) => (
              <li
                key={s.name}
                className="reveal bg-background p-5 flex items-baseline justify-between hover:bg-foreground hover:text-background transition-colors"
                style={{ transitionDelay: `${i * 30}ms` }}
              >
                <div className="flex items-baseline gap-4">
                  <span className="label-mono-dim w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xl md:text-2xl">{s.name}</span>
                </div>
                <span className="label-mono opacity-70">// {s.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── PROJECTS ─── */}
      <section
        id="projects"
        className="relative px-6 md:px-10 py-32 md:py-44 border-t border-foreground"
      >
        <SectionHeader index="03" title="PROJECTS" caption="fig. 04 — plates 01–09" />
        <div className="grid md:grid-cols-12 gap-6 mb-16">
          <h3 className="md:col-span-9 md:col-start-4 text-4xl md:text-6xl font-bold tracking-tight uppercase leading-[0.95]">
            Selected
            <br />
            <span className="italic font-light">/ work.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="group reveal relative border border-foreground p-6 block hover:bg-foreground hover:text-background transition-colors duration-200"
            >
              <Crosshairs />
              <div className="flex items-center justify-between label-mono mb-4">
                <span>PLATE {p.id}</span>
                <span className="dotted-h flex-1 mx-4 text-current opacity-60" />
                <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗ OPEN
                </span>
              </div>

              <div className="-mx-6 -mt-2 mb-5 overflow-hidden border-b border-foreground">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover grayscale contrast-110 brightness-110 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500"
                />
              </div>

              <h4 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-2">
                {p.title}
              </h4>
              <p className="text-sm leading-relaxed mb-6 line-clamp-3">
                {p.desc}
              </p>

              <div className="dotted-h text-current opacity-60 mb-4" />
              <div className="grid grid-cols-3 gap-3 label-mono">
                {p.metrics.map((m) => (
                  <div key={m}>
                    <div className="opacity-60">METRIC</div>
                    <div className="mt-1">{m}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 label-mono opacity-70">{p.tech}</div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section
        id="contact"
        className="relative px-6 md:px-10 py-32 md:py-44 border-t border-foreground overflow-hidden"
      >
        <div className="absolute inset-0 bp-grid-fine pointer-events-none opacity-60" />
        <SectionHeader index="04" title="CONTACT" caption="fig. 05 — endpoint" />
        <div className="relative grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5 reveal">
            <div className="relative border border-foreground p-6 bg-background">
              <Crosshairs />
              <div className="label-mono space-y-3">
                <div>
                  <div className="opacity-60">EMAIL</div>
                  <a href="mailto:jovyodionye@gmail.com" className="link-underline mt-1 inline-block">
                    jovyodionye@gmail.com
                  </a>
                </div>
                <div>
                  <div className="opacity-60">GITHUB</div>
                  <a href="https://github.com/byjove19" target="_blank" rel="noreferrer" className="link-underline mt-1 inline-block">
                    github.com/byjove19
                  </a>
                </div>
                <div>
                  <div className="opacity-60">LINKEDIN</div>
                  <a href="https://www.linkedin.com/in/odionye-jovita-042b73290/" target="_blank" rel="noreferrer" className="link-underline mt-1 inline-block">
                    in/odionye-jovita
                  </a>
                </div>
                <div>
                  <div className="opacity-60">X / TWITTER</div>
                  <a href="https://x.com/Defi_BabyJho" target="_blank" rel="noreferrer" className="link-underline mt-1 inline-block">
                    @Defi_BabyJho
                  </a>
                </div>
              </div>
            </div>

            <div className="relative mt-6 border border-foreground p-6 bg-background">
              <Crosshairs />
              <div className="label-mono-dim mb-4">ENDPOINT · POST /message</div>
              <ContactForm />
            </div>
          </div>
          <div className="md:col-span-7 reveal">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] uppercase">
              Got a system
              <br />
              <span className="italic font-light">that needs</span>
              <br />
              securing?
            </h3>
            <a
              href="mailto:jovyodionye@gmail.com"
              className="link-underline inline-flex items-center gap-3 mt-12 text-2xl md:text-3xl font-medium"
            >
              <span>↳ open a thread</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="relative border-t border-foreground">
        <div className="px-6 md:px-10 py-6 grid grid-cols-12 gap-4 label-mono">
          <div className="col-span-3">
            <div className="opacity-60">© 2026</div>
            <div className="mt-1">O. JOVITA</div>
          </div>
          <div className="col-span-3">
            <div className="opacity-60">SHEET</div>
            <div className="mt-1">A-001</div>
          </div>
          <div className="col-span-3">
            <div className="opacity-60">REV</div>
            <div className="mt-1">07</div>
          </div>
          <div className="col-span-3 text-right">
            <div className="opacity-60">END</div>
            <div className="mt-1">— · —</div>
          </div>
        </div>
        <div className="dotted-h text-foreground opacity-40" />
        <div className="px-6 md:px-10 py-4 flex items-center justify-between label-mono">
          <span>BUILT WITH INTENT · NO GRADIENTS · NO GRAYS</span>
          <span>v 7.0</span>
        </div>
      </footer>
    </div>
  );
}
