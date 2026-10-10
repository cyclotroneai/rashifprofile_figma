import { useEffect, useState } from "react"
import FacilityIO from "./case-studies/FacilityIO"
import CaseStudy from "./case-studies/CaseStudy"
import { NFC, LEADS, SEO } from "./case-studies/data"

const NAME = "Rashif Abubacker"
const EMAIL = "rashif@gmail.com"
const PHONE = "+971 526872812"
const LINKEDIN = "https://www.linkedin.com/in/rashifabubacker/"
const BEHANCE = "https://www.behance.net/rashifka"

const WORK = [
  {
    href: "#/work/facility-io",
    tag: "Product design · Dashboard",
    title: "Facility.io",
    line: "From Excel chaos to a boardroom-ready compliance dashboard, built and shipped by one person.",
    outcome: "From Excel chaos to clarity",
    chips: ["UX research", "UI", "Prototype"],
  },
  {
    href: "#/work/lead-routing",
    tag: "UX · Lead generation",
    title: "One inbox to a sales channel",
    line: "A contact-page rebuild that routes every enquiry to the desk that owns it.",
    outcome: "$4.61M qualified enquiries in 6 months",
    chips: ["Strategy", "Form UX", "Routing"],
  },
  {
    href: "#/work/website-seo",
    tag: "Web redesign · SEO · AI search",
    title: "A website buyers can find",
    line: "A B2B site relaunch, tuned for Google and AI search, with a measured before and after.",
    outcome: "57K to 89K users after relaunch",
    chips: ["Web UX", "SEO", "GEO"],
  },
  {
    href: "#/work/nfc-card",
    tag: "Product thinking · Physical + digital",
    title: "Tap to Connect",
    line: "An in-house NFC business card system, designed, integrated and hosted without a vendor.",
    outcome: "~159,250 AED saved",
    chips: ["Card design", "NFC", "Profile UI"],
  },
]

const CAPS = [
  ["Understand", "Research, observation and framing the real problem before touching a canvas."],
  ["Design", "Brand, UI and product design that is clear first and decorative second."],
  ["Build", "Working prototypes, landing pages and integrations, not just static mockups."],
  ["Market", "Funnels, lead routing and campaigns tied to what the business actually measures."],
]

const PROCESS = [
  ["Understand the problem", "Start with the people, workflow and business problem."],
  ["Design the solution", "Turn complexity into clear, intuitive experiences."],
  ["Make it work", "Build, test, launch and improve, not just create a visual."],
]

const CAPABILITIES: [string, string[]][] = [
  ["Design", ["Visual Design", "Brand & Campaign Design", "Social Media Design", "Presentation Design", "Exhibition / Event Design", "Art Direction"]],
  ["Digital", ["UX/UI Design", "Website Design", "Responsive Design", "Design Systems", "Prototyping", "Digital Experiences"]],
  ["Marketing", ["Digital Marketing", "Social Media Marketing", "SEO", "Lead Generation", "Campaign Strategy", "Content Strategy"]],
  ["Product & Technology", ["UX Research", "User Flows", "Dashboard Design", "HTML/CSS", "No-code / AI-assisted Development", "Digital Prototyping"]],
]

function useRoute() {
  const [r, setR] = useState(() => window.location.hash || "#/")
  useEffect(() => {
    const on = () => {
      setR(window.location.hash || "#/")
      window.scrollTo(0, 0)
    }
    window.addEventListener("hashchange", on)
    return () => window.removeEventListener("hashchange", on)
  }, [])
  return r
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")
  const links = [
    ["Work", "#work"],
    ["About", "#about"],
    ["Capabilities", "#capabilities"],
    ["Approach", "#approach"],
    ["Contact", "#contact"],
  ]
  const go = (id: string) => {
    setOpen(false)
    setActive(id)
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-paper/15 bg-ink/95 text-paper backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 sm:px-10">
        <a href="#/" className="font-display text-lg font-semibold tracking-tight">
          {NAME}
          <span className="text-lime">.</span>
        </a>
        <nav className="hidden h-full items-stretch gap-8 md:flex" aria-label="Primary">
          {links.map(([l, h]) => (
            <button
              key={l}
              onClick={() => go(h)}
              className={`border-b-2 px-1 font-mono text-xs uppercase tracking-[0.16em] transition hover:text-lime ${
                active === h ? "border-lime text-lime" : "border-transparent"
              }`}
            >
              {l}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden bg-lime px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-[0.16em] text-ink transition hover:bg-paper sm:inline-block"
          >
            Hire me
          </a>
          <button className="font-mono text-xs uppercase tracking-[0.16em] md:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <div className="flex flex-col gap-4 border-t border-paper/15 bg-ink px-6 pb-6 pt-4 font-display text-3xl md:hidden">
          {links.map(([l, h]) => (
            <button key={l} onClick={() => go(h)} className="text-left">
              {l}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}

function Home() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink px-6 pb-20 pt-36 text-paper sm:px-10 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <h1
            className="reveal max-w-[16ch] font-display text-[clamp(2.8rem,8.5vw,8.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.04em]"
          >
            Designing digital experiences <span className="text-lime">that work.</span>
          </h1>
          <div className="reveal mt-12 grid gap-10 lg:grid-cols-12" style={{ animationDelay: "0.15s" }}>
            <div className="lg:col-span-6">
              <p className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                I turn complex problems into simple, useful digital experiences.
              </p>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-paper/60">
                UI/UX · Digital Design · Digital Marketing · SEO
              </p>
            </div>
            <div className="flex flex-wrap items-start gap-4 lg:col-span-6 lg:justify-end">
              <button
                onClick={() => document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-lime px-7 py-4 font-display text-lg font-semibold text-ink transition hover:bg-white"
              >
                See the case studies ↓
              </button>
              <a
                href={`mailto:${EMAIL}`}
                className="border border-paper/40 px-7 py-4 font-display text-lg font-semibold transition hover:border-lime hover:text-lime"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 grid max-w-[1400px] grid-cols-2 border-t border-paper/20 md:grid-cols-4">
          {CAPS.map(([t]) => (
            <p key={t} className="border-b border-paper/10 py-5 font-display text-2xl font-semibold md:border-b-0">
              {t}
              <span className="text-lime">.</span>
            </p>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-6 border-t border-ink pt-6 lg:grid-cols-12 lg:gap-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60 lg:col-span-3">Selected case studies</p>
            <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:col-span-9 lg:text-6xl">
              Problems I understood,&nbsp;&nbsp;Solutions I shipped.
            </h2>
          </div>
          <div className="mt-14 border-t border-ink/20">
            {WORK.map((w, i) => (
              <a
                key={w.href}
                href={w.href}
                className="group grid gap-6 border-b border-ink/20 py-10 transition hover:bg-white lg:grid-cols-12 lg:gap-10 lg:px-4"
              >
                <span className="font-mono text-xs text-ink/50 lg:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <div className="lg:col-span-6">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/55">{w.tag}</p>
                  <h3 className="mt-3 font-display text-4xl font-extrabold leading-none tracking-tight transition group-hover:translate-x-2 sm:text-6xl">
                    {w.title}
                  </h3>
                  <p className="mt-5 max-w-lg text-lg text-ink/70">{w.line}</p>
                </div>
                <div className="flex flex-col justify-between gap-6 lg:col-span-4">
                  <p className="inline-block self-start bg-lime px-3 py-1.5 font-mono text-xs uppercase tracking-wider">
                    {w.outcome}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {w.chips.map((c) => (
                      <li key={c} className="border border-ink/30 px-3 py-1 text-sm">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <span aria-hidden className="hidden font-display text-4xl transition group-hover:translate-x-2 lg:col-span-1 lg:block lg:text-right">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-28 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">About</p>
            <h2 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
              Beyond the portfolio.
            </h2>
            <p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink/80">
              I enjoy solving problems that sit somewhere between creativity and practicality.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              Sometimes that means designing an interface. Sometimes it means simplifying a workflow, building a
              dashboard, improving a website journey, creating a campaign or finding a smarter way to execute an idea.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/65">
              I like learning by building, especially when a problem doesn&apos;t have an obvious answer.
            </p>
            <dl className="mt-12 grid border-t border-ink/20 sm:grid-cols-3">
              {[
                ["Based in", "UAE"],
                ["Focus", "UI/UX • Digital Design •\u00a0\u00a0Marketing"],
                ["Interests", "Fitness • Technology •AI\u00a0\u00a0\u00a0"],
              ].map(([k, v]) => (
                <div key={k} className="border-b border-ink/15 py-5 pr-6 sm:border-b-0">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50">{k}</dt>
                  <dd className="mt-2 text-base leading-snug">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-5">
            <div className="relative flex aspect-[4/5] w-full items-end overflow-hidden bg-ink p-6 text-paper">
              <span aria-hidden className="absolute -right-4 -top-6 font-display text-[16rem] font-extrabold leading-none tracking-tighter text-lime/90">
                R
              </span>
              <p className="relative font-mono text-[11px] uppercase tracking-[0.16em] text-paper/60">
                Portrait · optional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-ink px-6 py-28 text-paper sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Capabilities</p>
          <h2 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
            What I can bring to a team.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-paper/65">
            Comfortable working with technology and turning designs into working digital experiences.
          </p>
          <div className="mt-16 grid gap-px bg-paper/15 sm:grid-cols-2 lg:grid-cols-4">
            {CAPABILITIES.map(([t, items], i) => (
              <article key={t as string} className="group bg-ink p-7 transition hover:bg-ink2">
                <p className="font-mono text-xs text-lime">{String(i + 1).padStart(2, "0")} —</p>
                <h3 className="mt-8 font-display text-2xl font-semibold leading-tight">{t}</h3>
                <ul className="mt-6 space-y-2.5 text-paper/75">
                  {(items as string[]).map((x) => (
                    <li key={x} className="flex gap-3 border-t border-paper/10 pt-2.5">
                      <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-lime" />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section id="approach" className="px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">Introduction</p>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
                A little about how I work.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
              <p className="text-xl text-ink/85">
                I&apos;m a multidisciplinary digital creative who enjoys working at the intersection of design,
                technology and business.
              </p>
              <p>
                My work moves between visual design, UX/UI, websites, digital products, marketing campaigns, SEO, lead
                generation and creative problem-solving.
              </p>
              <p>
                I&apos;m most interested in the problem behind the brief: understanding what is not working, finding a
                better approach, and turning the idea into something people can actually use.
              </p>
            </div>
          </div>
          <ol className="mt-20 grid border-y border-ink md:grid-cols-3">
            {PROCESS.map(([t, b], i) => (
              <li key={t} className="group border-ink/20 p-8 transition hover:bg-ink hover:text-paper md:border-r md:last:border-r-0">
                <p className="font-mono text-xs text-ink/50 group-hover:text-lime">{String(i + 1).padStart(2, "0")} —</p>
                <h3 className="mt-16 font-display text-3xl font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-ink/70 group-hover:text-paper/70">{b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-lime px-6 py-28 sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-xs uppercase tracking-[0.16em]">Contact</p>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.8rem,8vw,7.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em]">
            Have a problem worth solving?
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-12 inline-block break-all border-b-2 border-ink font-display text-3xl font-semibold transition hover:opacity-60 sm:text-5xl"
          >
            {EMAIL}
          </a>
          <div className="mt-14 grid gap-px bg-ink sm:grid-cols-3">
            {[
              ["Mobile", PHONE, `tel:${PHONE.replace(/\s/g, "")}`],
              ["LinkedIn", "rashifabubacker", LINKEDIN],
              ["Behance", "rashifka", BEHANCE],
            ].map(([k, v, h]) => (
              <a
                key={k}
                href={h}
                target={h.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-end justify-between bg-lime p-6 transition hover:bg-ink hover:text-lime"
              >
                <span>
                  <span className="block font-mono text-xs uppercase tracking-[0.16em] opacity-70">{k}</span>
                  <span className="mt-2 block font-display text-2xl font-semibold">{v}</span>
                </span>
                <span aria-hidden className="text-2xl transition group-hover:translate-x-1">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink px-6 py-8 font-mono text-xs uppercase tracking-wider text-paper/55 sm:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-between gap-3">
          <span>{NAME} · Digital Designer &amp; Marketing Professional</span>
          <span>Portfolio 2026</span>
        </div>
      </footer>
    </main>
  )
}

export default function App() {
  const route = useRoute()
  if (route === "#/work/facility-io") return <FacilityIO />
  if (route === "#/work/lead-routing")
    return <CaseStudy d={LEADS} next={{ href: "#/work/website-seo", label: "A website buyers can find" }} />
  if (route === "#/work/website-seo")
    return <CaseStudy d={SEO} next={{ href: "#/work/nfc-card", label: "Tap to Connect" }} />
  if (route === "#/work/nfc-card")
    return <CaseStudy d={NFC} next={{ href: "#/work/facility-io", label: "Facility.io" }} />
  return <Home />
}
