import { useState } from "react"

type Status = "expired" | "critical" | "warning" | "attention" | "valid"

const STATUS: Record<Status, { label: string; glyph: string; rule: string; cls: string; bg: string }> = {
  expired: { label: "Expired", glyph: "✕", rule: "past expiry", cls: "text-st-expired", bg: "bg-st-expired" },
  critical: { label: "Critical", glyph: "!", rule: "≤ 30 days", cls: "text-st-critical", bg: "bg-st-critical" },
  warning: { label: "Warning", glyph: "▲", rule: "31–45 days", cls: "text-st-warning", bg: "bg-st-warning" },
  attention: { label: "Attention", glyph: "●", rule: "46–60 days", cls: "text-st-attention", bg: "bg-st-attention" },
  valid: { label: "Valid", glyph: "✓", rule: "> 60 days", cls: "text-st-valid", bg: "bg-st-valid" },
}

const COUNTS: Record<Status, number> = { expired: 3, critical: 3, warning: 1, attention: 1, valid: 37 }

const TRACKER: { name: string; doc: string; date: string; left: string; s: Status }[] = [
  { name: "DIC Labor Camp", doc: "Ejari", date: "03 Sept", left: "29 d overdue", s: "expired" },
  { name: "Kezad", doc: "Trade License", date: "08 Oct", left: "6 d left", s: "critical" },
  { name: "JAFZA", doc: "Trade License", date: "22 Oct", left: "20 d left", s: "critical" },
  { name: "Bahrain", doc: "Trade License", date: "16 Nov", left: "45 d left", s: "warning" },
  { name: "1BHK Flat", doc: "Trade License", date: "22 Nov", left: "51 d left", s: "attention" },
]

const TIMELINE = [
  { m: "Past", n: 3, s: "expired" as Status },
  { m: "Oct", n: 5, s: "critical" as Status },
  { m: "Nov", n: 4, s: "warning" as Status },
  { m: "Dec", n: 2, s: "valid" as Status },
  { m: "Jan", n: 6, s: "valid" as Status },
  { m: "Feb", n: 3, s: "valid" as Status },
  { m: "Mar", n: 7, s: "valid" as Status },
  { m: "Apr", n: 4, s: "valid" as Status },
  { m: "May", n: 2, s: "valid" as Status },
]

const FACILITY_DOCS: { d: string; t: string; s: Status | "na" }[] = [
  { d: "Ejari", t: "180 d", s: "valid" },
  { d: "Trade License", t: "239 d", s: "valid" },
  { d: "Property Insurance", t: "92 d", s: "valid" },
  { d: "Tenancy Contract", t: "N/A", s: "na" },
]

const APP_URL = "https://score-module-96236548.figma.site/"

const STEPS = [
  ["Open the link", "No install, no login."],
  ["Upload Excel", "Button or drag-and-drop. The dashboard builds in the browser."],
  ["Share dashboard", "One action creates the output."],
  ["Save the HTML file", "A self-contained snapshot with the data inside."],
  ["Send the file", "Only that file goes to the concerned team."],
]

const META = [
  ["Industry", "Facility management"],
  ["My role", "UX research · UI · prototype"],
  ["Tools", "Figma · Claude"],
  ["Platform", "Responsive web"],
  ["Status", "Live, used by my team"],
]

function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`font-mono text-xs uppercase tracking-[0.16em] ${dark ? "text-lime" : "text-ink/60"}`}>
      {children}
    </p>
  )
}

function SectionHead({ n, label, title }: { n: string; label: string; title: string }) {
  return (
    <div className="grid gap-6 border-t border-ink pt-6 lg:grid-cols-12 lg:gap-10">
      <div className="flex items-baseline gap-4 lg:col-span-3" data-n={n}>
        <Label>{label}</Label>
      </div>
      <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:col-span-9 lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}

function StatusPill({ s }: { s: Status }) {
  const x = STATUS[s]
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider ${x.cls}`}>
      <span aria-hidden className={`grid h-5 w-5 place-items-center rounded-full text-[10px] text-white ${x.bg}`}>
        {x.glyph}
      </span>
      {x.label}
    </span>
  )
}

function Window({ title, meta, children }: { title: string; meta?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden border border-ink bg-white shadow-[8px_8px_0_0_var(--color-ink)]">
      <div className="flex items-center justify-between border-b border-ink bg-paper px-4 py-2.5">
        <span className="font-mono text-xs uppercase tracking-wider">{title}</span>
        {meta && <span className="font-mono text-xs text-ink/50">{meta}</span>}
      </div>
      {children}
    </div>
  )
}

function Overview() {
  const [active, setActive] = useState<Status | null>(null)
  const total = 45
  let acc = 0
  const stops = (Object.keys(COUNTS) as Status[]).map((k) => {
    const from = (acc / total) * 100
    acc += COUNTS[k]
    return { k, from, to: (acc / total) * 100 }
  })
  const colors: Record<Status, string> = {
    expired: "#d7263d",
    critical: "#e8590c",
    warning: "#c98a00",
    attention: "#2f6fde",
    valid: "#1e8e5a",
  }
  const grad = stops.map((x) => `${colors[x.k]} ${x.from}% ${x.to}%`).join(", ")
  return (
    <Window title="Facility compliance" meta="status overview">
      <div className="grid grid-cols-5 border-b border-ink/15">
        {(Object.keys(COUNTS) as Status[]).map((k) => (
          <button
            key={k}
            onClick={() => setActive(active === k ? null : k)}
            className={`flex flex-col items-start gap-1 border-r border-ink/15 p-3 text-left transition last:border-r-0 hover:bg-paper ${
              active === k ? "bg-paper" : ""
            }`}
            aria-pressed={active === k}
          >
            <span aria-hidden className={`grid h-8 w-8 place-items-center rounded-full text-sm text-white ${STATUS[k].bg}`}>{STATUS[k].glyph}</span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-ink/60">{STATUS[k].label}</span>
          </button>
        ))}
      </div>
      <div className="grid items-center gap-6 p-5 sm:grid-cols-[auto_1fr]">
        <div
          className="relative mx-auto h-32 w-32 rounded-full"
          style={{ background: `conic-gradient(${grad})` }}
          role="img"
          aria-label="Overall status donut"
        >
          <div className="absolute inset-[22px] grid place-items-center rounded-full bg-white">
            <span className="font-display text-sm font-semibold">{active ? STATUS[active].label : "Overall"}</span>
          </div>
        </div>
        <ul className="space-y-3">
          {[
            ["Ejari", "needs action", 29],
            ["Trade License", "needs action", 20],
            ["Tenancy Contract", "all clear", 0],
          ].map(([n, t, w]) => (
            <li key={n as string}>
              <div className="flex justify-between text-sm">
                <span className="font-medium">{n}</span>
                <span className="text-ink/60">{t}</span>
              </div>
              <div className="mt-1 h-1.5 bg-ink/10">
                <div className="h-full bg-st-expired" style={{ width: `${w}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Window>
  )
}

function Timeline() {
  const max = 7
  return (
    <Window title="Expiry timeline" meta="documents per month">
      <div className="flex h-56 items-end gap-2 p-5">
        {TIMELINE.map((t) => (
          <div key={t.m} className="group flex flex-1 flex-col items-center justify-end gap-2">
            <div
              className={`w-full transition group-hover:opacity-80 ${STATUS[t.s].bg}`}
              style={{ height: `${(t.n / max) * 130}px` }}
            />
            <span className="font-mono text-[10px] uppercase text-ink/60">{t.m}</span>
          </div>
        ))}
      </div>
    </Window>
  )
}

function Tracker() {
  const [filter, setFilter] = useState<"all" | Status>("all")
  const rows = TRACKER.filter((r) => filter === "all" || r.s === filter)
  return (
    <Window title="Expiry tracker" meta="all documents">
      <div className="flex gap-2 overflow-x-auto border-b border-ink/15 p-3">
        {(["all", "expired", "critical", "warning", "attention"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`shrink-0 border border-ink px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition ${
              filter === f ? "bg-ink text-lime" : "hover:bg-lime"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.name} className="flex items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 last:border-0">
            <div>
              <p className="font-medium">{r.name}</p>
              <p className="font-mono text-xs text-ink/55">
                {r.doc} · {r.date}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className={`font-mono text-sm font-medium ${STATUS[r.s].cls}`}>{r.left}</span>
              <StatusPill s={r.s} />
            </div>
          </li>
        ))}
      </ul>
    </Window>
  )
}

function FacilityCard() {
  const [open, setOpen] = useState(true)
  return (
    <Window title="Facilities" meta="most urgent first">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-paper"
        aria-expanded={open}
      >
        <span className="font-display text-xl font-semibold">Head Office</span>
        <span className="flex items-center gap-3">
          <StatusPill s="valid" />
          <span className="font-mono text-lg">{open ? "−" : "+"}</span>
        </span>
      </button>
      {open && (
        <ul className="border-t border-ink/15">
          {FACILITY_DOCS.map((d) => (
            <li key={d.d} className="flex items-center justify-between border-b border-ink/10 px-4 py-2.5 text-sm last:border-0">
              <span>{d.d}</span>
              <span className="flex items-center gap-4">
                <span className="font-mono text-ink/60">{d.t}</span>
                {d.s === "na" ? (
                  <span className="font-mono text-[11px] uppercase text-ink/40">N/A</span>
                ) : (
                  <StatusPill s={d.s} />
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Window>
  )
}

function Feature({
  n,
  title,
  body,
  points,
  visual,
  flip,
}: {
  n: string
  title: string
  body: string
  points?: string[]
  visual: React.ReactNode
  flip?: boolean
}) {
  return (
    <div className="grid items-center gap-10 border-t border-ink/20 py-14 lg:grid-cols-12 lg:gap-16">
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <span className="font-mono text-xs text-ink/50">{n}</span>
        <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink/70">{body}</p>
        {points && (
          <ul className="mt-6 space-y-2">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-ink/80">
                <span className="mt-2.5 h-px w-4 shrink-0 bg-ink" />
                {p}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>{visual}</div>
    </div>
  )
}

export default function FacilityIO() {
  return (
    <main className="min-h-screen">
      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-6 text-paper sm:px-10">
        <a href="#/" className="font-mono text-xs uppercase tracking-[0.16em] transition hover:text-lime">
          ← Portfolio
        </a>
        <a href={APP_URL} target="_blank" rel="noreferrer" className="border border-paper/40 px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition hover:bg-lime hover:text-ink">Open the app ↗</a>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink px-6 pb-16 pt-40 text-paper sm:px-10 lg:pt-48">
        <div className="mx-auto max-w-[1400px]">
          <div className="reveal">
            <Label dark>UX/UI Case Study · Real product</Label>
          </div>
          <h1
            className="reveal mt-8 max-w-[16ch] font-display text-[clamp(3rem,9vw,8.5rem)] font-extrabold leading-[0.92] tracking-[-0.035em]"
            style={{ animationDelay: "0.1s" }}
          >
            From Excel chaos to a <span className="text-lime">boardroom-ready</span> dashboard.
          </h1>
          <p
            className="reveal mt-10 max-w-xl text-xl leading-relaxed text-paper/70"
            style={{ animationDelay: "0.2s" }}
          >
            A tool that turns the Excel register a facility team already keeps into a clean, shareable dashboard, in five
            steps and a few minutes.
          </p>

          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="reveal mt-10 inline-flex items-center gap-3 bg-lime px-7 py-4 font-display text-lg font-semibold text-ink transition hover:bg-white"
            style={{ animationDelay: "0.25s" }}
          >
            View the live application <span aria-hidden>↗</span>
          </a>

          <dl className="reveal mt-20 grid grid-cols-2 border-t border-paper/20 sm:grid-cols-3 lg:grid-cols-5" style={{ animationDelay: "0.3s" }}>
            {META.map(([k, v]) => (
              <div key={k} className="border-b border-paper/10 py-5 pr-4 lg:border-b-0">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/45">{k}</dt>
                <dd className="mt-2 text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Hero visual strip */}
      <section className="bg-lime px-6 py-14 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-12">
          <p className="font-display text-3xl font-semibold leading-tight tracking-tight lg:col-span-5 lg:text-4xl">
            One uploaded workbook, a whole facility portfolio at a glance.
          </p>
          <div className="lg:col-span-7">
            <Overview />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-32 px-6 py-28 sm:px-10">
        {/* Overview */}
        <section>
          <SectionHead n="x1" label="Overview" title="One uploaded workbook, a whole facility portfolio at a glance" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="text-lg leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-4">
              A UAE-based group manages facilities across the UAE, Oman and Bahrain: offices, labour-camp rooms, industrial
              plots and free-zone units. Each needs up to six legal documents kept valid. The data lived in Excel.
              Facility.io turns it into a dashboard management can read in seconds.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 border-y border-ink sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Tracked", "every facility across the UAE, Oman and Bahrain"],
              ["Dated", "every legal document, with its expiry"],
              ["Flagged", "what needs action, surfaced automatically"],
              ["Shared", "from Excel to management in a few steps"],
            ].map(([n, l], i) => (
              <div key={l} className={`group p-6 transition hover:bg-ink hover:text-paper sm:p-8 ${i % 2 === 0 ? "border-r border-ink/20" : ""} ${i < 2 ? "border-b border-ink/20 lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}>
                <p className="font-display text-5xl font-extrabold leading-none tracking-tighter sm:text-6xl group-hover:text-lime">{n}</p>
                <p className="mt-4 max-w-[18ch] text-sm text-ink/65 group-hover:text-paper/70">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Objectives */}
        <section>
          <SectionHead n="x2" label="Objectives" title="What the product had to do" />
          <div className="mt-12 grid gap-px bg-ink/20 md:grid-cols-3">
            {[
              ["Keep Excel as the input", "No re-entry. The team keeps their workflow and uploads the workbook as it is."],
              ["Clean, presentation-ready output", "Management needs a clear picture for the monthly meeting, not a wide spreadsheet."],
              ["Easy to share, nothing to install", "Recipients open one file in any browser. No login, no setup."],
            ].map(([t, b]) => (
              <article key={t} className="bg-paper p-8 transition hover:bg-white">
                <span aria-hidden className="block h-1 w-10 bg-ink" />
                <h3 className="mt-16 font-display text-2xl font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-ink/70">{b}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      {/* Challenges: dark split */}
      <section className="bg-ink px-6 py-28 text-paper sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label dark>Challenges</Label>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight lg:text-6xl">
              Why the old process hurt
            </h2>
            <p className="mt-10 font-display text-6xl font-extrabold leading-none tracking-tighter text-lime">Hidden in plain sight.</p>
            <p className="mt-4 max-w-xs text-paper/60">
              Overdue contracts sat in the data, and in a sheet they look like any other row.
            </p>
          </div>
          <ol className="lg:col-span-7">
            {[
              ["A hectic monthly task", "Every month the facility team rebuilt a dashboard by hand from Excel for the management presentation."],
              ["Excel isn't presentable", "Hard to share with senior people, who want status rather than rows and columns."],
              ["Overdue items hide in rows", "Overdue Ejari contracts sat in the sheet, indistinguishable from any other row."],
            ].map(([t, b]) => (
              <li key={t} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-paper/20 py-8">
                <span aria-hidden className="mt-2 h-1 w-6 bg-lime" />
                <div>
                  <h3 className="font-display text-2xl font-semibold">{t}</h3>
                  <p className="mt-2 max-w-lg text-paper/65">{b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-32 px-6 py-28 sm:px-10">
        {/* Research */}
        <section>
          <SectionHead n="x4" label="Research" title="Starting from a problem I lived with" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="text-lg leading-relaxed text-ink/75 lg:col-span-4 lg:col-start-4">
              I built this because my own facility team was struggling. I validated it through conversations with
              colleagues and friends, interviews and observing how the team prepared the monthly presentation.
            </p>
            <ul className="lg:col-span-5">
              {[
                ["Excel is a hectic task", "for presentations: manual formatting, rebuilt every month."],
                ["Hard to share", "with management in a form they can read quickly."],
                ["Teams wanted a JPEG", "to keep and drop into the presentation."],
                ["No sense of priority:", "an overdue document looks like any other row."],
              ].map(([b, t]) => (
                <li key={b} className="border-t border-ink/20 py-4 text-lg">
                  <strong className="font-semibold">{b}</strong> <span className="text-ink/65">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Journey */}
        <section>
          <SectionHead n="x5" label="User journey" title="Five steps from spreadsheet to management" />
          <ol className="mt-14 grid border-y border-ink md:grid-cols-5">
            {STEPS.map(([t, b]) => (
              <li key={t} className="group relative border-ink/20 p-6 transition hover:bg-lime md:border-r md:last:border-r-0">
                <span className="font-display text-6xl font-extrabold tracking-tighter text-ink/15 transition group-hover:text-ink">
                  →
                </span>
                <h3 className="mt-10 font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-ink/70">{b}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 font-mono text-xs text-ink/55">
            Data is processed in the browser. A Download JPEG option gives a picture for slides.
          </p>
        </section>

        {/* Status system */}
        <section>
          <SectionHead n="x6" label="Superior UX" title="One status system everyone understands" />
          <p className="mt-8 max-w-xl text-lg text-ink/70 lg:ml-[25%]">
            Every document gets one of five statuses based on days to expiry. Each uses colour, a glyph and a text label,
            so it never relies on colour alone.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-5">
            {(Object.keys(STATUS) as Status[]).map((k) => (
              <div key={k} className={`${STATUS[k].bg} p-6 text-white transition hover:-translate-y-1`}>
                <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-white/80 font-display text-xl font-bold">
                  {STATUS[k].glyph}
                </span>
                <p className="mt-16 font-display text-2xl font-semibold">{STATUS[k].label}</p>
                <p className="font-mono text-xs uppercase tracking-wider text-white/85">{STATUS[k].rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section>
          <SectionHead n="x7" label="Major features" title="What makes it useful" />
          <div className="mt-8">
            <Feature
              n="A"
              title="Overview: the 10-second answer"
              body="Management sees what needs action before reading anything else."
              points={[
                "Five tappable status cards that jump to the filtered list",
                "Status by document type shows where problems cluster",
                "Overall status donut for the proportion at a glance",
              ]}
              visual={<Overview />}
            />
            <Feature
              n="B"
              flip
              title="Expiry timeline: plan months ahead"
              body={`Documents expiring each month, coloured by the most urgent item, with a "Past" bar for what has already lapsed. An "Expiring in the next 60 days" list gives the team a ready action list.`}
              visual={<Timeline />}
            />
            <Feature
              n="C"
              title="Expiry tracker: the work queue"
              body={`Every document in one list with relative time left, such as "6 d left" or "29 d overdue". People act on how long they have, not only on the date.`}
              points={["Filter by status and document type", "Sort by soonest, latest or A–Z"]}
              visual={<Tracker />}
            />
            <Feature
              n="D"
              flip
              title="Facilities and Renewals: detail and proof of action"
              body="Expandable facility cards, most urgent first. Collapsed cards give triage; expanded cards show landlord, tenant, areas, licence number and every issue and expiry date. The Renewals view lists documents renewed in the last 30 days, so the team can show what was done."
              visual={<FacilityCard />}
            />
            <div className="grid gap-10 border-t border-ink/20 py-14 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-xs text-ink/50">E</span>
                <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Share and export</h3>
              </div>
              <p className="max-w-xl text-lg leading-relaxed text-ink/70 lg:col-span-6 lg:col-start-7">
                Share creates a standalone HTML file that opens anywhere. Download JPEG exports the dashboard as an image
                for the presentation. A &ldquo;Status as of&rdquo; date picker previews future status.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-[1400px] space-y-32 px-6 py-28 sm:px-10">
        <section>
          <SectionHead n="x" label="Design process" title="From interviews to a shippable prototype" />
          <ol className="mt-12 grid gap-px bg-ink/20 md:grid-cols-4">
            {[
              ["Discover", "Observed how the team built the monthly presentation and listed every manual step."],
              ["Define", "Chose one principle: keep Excel as the input, and invest everything in the output."],
              ["Design", "Sketched the dashboard hierarchy in Figma, then defined a five-level status system."],
              ["Deliver", "Built a working prototype with Claude, then put it in front of the facility team."],
            ].map(([t, b]) => (
              <li key={t} className="bg-paper p-7 transition hover:bg-white">
                <h3 className="font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-3 text-ink/70">{b}</p>
              </li>
            ))}
          </ol>
        </section>
        <section>
          <SectionHead n="x" label="Design decisions" title="Why the status thresholds work" />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <p className="text-lg leading-relaxed text-ink/75 lg:col-span-5 lg:col-start-4">
              Renewals in the UAE take weeks of paperwork, so the thresholds step up gradually. Early stages give the team
              room to plan, the middle stages prompt an owner to start, and the last stage is for documents that need
              action today. Each stage is visible at a glance, so nobody has to read dates to know what matters.
            </p>
          </div>
        </section>
      </div>

      {/* Accessibility */}
      <section className="bg-lime px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Label>Accessibility</Label>
            <h2 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight lg:text-6xl">
              Built to be usable by everyone
            </h2>
          </div>
          <div className="grid gap-px bg-ink lg:col-span-7">
            {[
              ["Never colour alone", "Colour, glyph and label on every status."],
              ["Touch-friendly", "44px targets, mobile bottom navigation, safe-area aware."],
              ["Keyboard and print", "Visible focus outlines, reduced-motion support, print stylesheet."],
            ].map(([t, b]) => (
              <div key={t} className="flex flex-col justify-between gap-2 bg-lime py-6 sm:flex-row sm:items-center">
                <h3 className="font-display text-2xl font-semibold">{t}</h3>
                <p className="max-w-xs text-ink/75">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-32 px-6 py-28 sm:px-10">
        {/* Results */}
        <section>
          <SectionHead n="x9" label="Key results" title="What the dashboard delivers" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="bg-ink p-10 text-paper">
              <p className="font-display text-6xl font-extrabold leading-none tracking-tighter text-lime">Instant.</p>
              <h3 className="mt-8 font-display text-2xl font-semibold">Priorities surface themselves</h3>
              <p className="mt-2 text-paper/65">Documents needing action are flagged automatically, with no manual setup.</p>
            </article>
            <article className="border border-ink p-10">
              <p className="font-display text-6xl font-extrabold leading-none tracking-tighter">One file.</p>
              <h3 className="mt-8 font-display text-2xl font-semibold">No setup for recipients</h3>
              <p className="mt-2 text-ink/65">One HTML file opens in any browser, with no login or install.</p>
            </article>
          </div>
          <p className="mt-8 max-w-3xl border-l-2 border-ink pl-5 text-lg text-ink/75 lg:ml-[25%]">
            <strong>Testing:</strong> the facility team has used it and no issues have been reported so far. Next step is
            a structured test with 5 users measuring time to build the monthly dashboard and time for a manager to find
            the most urgent item.
          </p>
        </section>

        {/* Conclusion */}
        <section className="border-t border-ink pt-6">
          <Label>Conclusion</Label>
          <h2 className="mt-8 max-w-5xl font-display text-[clamp(2.5rem,7vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Keep the workflow, change the output.
          </h2>
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink/70">
            Facility.io worked because it kept Excel as the input and focused on the output. The status system, the
            shareable file and the JPEG export are what make it presentable.
          </p>
          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-ink/55">What I learned</p>
              <ul className="space-y-3 text-lg text-ink/75">
                <li>Respect the workflow people already have. Adoption follows.</li>
                <li>Design for the person who only gets ten seconds with it.</li>
                <li>Status needs more than colour to be understood by everyone.</li>
              </ul>
            </div>
          </div>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-3 bg-ink px-7 py-4 font-display text-lg font-semibold text-paper transition hover:bg-lime hover:text-ink"
          >
            View the live application <span aria-hidden>↗</span>
          </a>
          <div className="mt-14">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-ink/55">Next</p>
            <ul className="flex flex-wrap gap-3">
              {["Reminders at 60, 45 and 30 days", "Owner assignment", "Attached scans", "Live data connection"].map((x) => (
                <li key={x} className="border border-ink px-4 py-2 transition hover:bg-lime">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      <footer className="bg-ink px-6 py-10 text-paper/60 sm:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider">
          <span>
            <span className="text-paper">Facility.io</span> · UX/UI case study
          </span>
          <span>Designed in Figma, built with Claude</span>
        </div>
      </footer>
    </main>
  )
}
