import type { CaseData } from "./data"

export default function CaseStudy({ d, next }: { d: CaseData; next: { href: string; label: string } }) {
  return (
    <main className="min-h-screen">
      <section className="bg-ink px-6 pb-20 pt-28 text-paper sm:px-10">
        <div className="mx-auto max-w-[1400px]">
          <a href="#/" className="font-mono text-xs uppercase tracking-[0.16em] transition hover:text-lime">
            ← Portfolio
          </a>
          <p className="reveal mt-16 font-mono text-xs uppercase tracking-[0.16em] text-lime">{d.kicker}</p>
          <h1 className="reveal mt-6 max-w-[18ch] font-display text-[clamp(2.8rem,8vw,7.5rem)] font-extrabold leading-[0.94] tracking-[-0.035em]">
            {d.title}
          </h1>
          <p className="reveal mt-8 max-w-2xl text-xl leading-relaxed text-paper/70">{d.intro}</p>
          <dl className="mt-16 grid grid-cols-1 border-t border-paper/20 sm:grid-cols-2 lg:grid-cols-4">
            {d.meta.map(([k, v]) => (
              <div key={k} className="border-b border-paper/10 py-5 pr-4 lg:border-b-0">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-paper/45">{k}</dt>
                <dd className="mt-2">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-lime px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 lg:grid-cols-4">
          {d.metrics.map(([v, l]) => (
            <div key={l} className="pr-6">
              <p className="font-display text-4xl font-extrabold leading-none tracking-tighter sm:text-5xl lg:text-6xl">{v}</p>
              <p className="mt-3 max-w-[22ch] text-sm text-ink/75">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-[1400px] space-y-28 px-6 py-24 sm:px-10">
        <Block label="The challenge" title={d.challengeTitle}>
          <ul className="lg:col-span-6 lg:col-start-7">
            {d.challenge.map((c) => (
              <li key={c} className="border-t border-ink/20 py-4 text-lg leading-relaxed text-ink/75">
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <section>
          <Head label="The solution" title={d.solutionTitle} />
          <p className="mt-6 max-w-xl text-lg text-ink/70 lg:ml-[25%]">{d.solutionIntro}</p>
          <div className="mt-12 grid gap-px bg-ink/20 sm:grid-cols-2 lg:grid-cols-4">
            {d.solution.map(([t, b]) => (
              <article key={t} className="bg-paper p-7 transition hover:bg-white">
                <span aria-hidden className="block h-1 w-10 bg-ink" />
                <h3 className="mt-12 font-display text-2xl font-semibold leading-tight">{t}</h3>
                <p className="mt-3 text-ink/70">{b}</p>
              </article>
            ))}
          </div>
        </section>

        {d.flow && (
          <section className="-mx-6 bg-ink px-6 py-20 text-paper sm:-mx-10 sm:px-10">
            <div className="mx-auto max-w-[1400px]">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">The flow</p>
              <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{d.flowTitle}</h2>
              <p className="mt-4 max-w-xl text-paper/65">{d.flowIntro}</p>
              <ol className="mt-12 grid gap-px bg-paper/15 md:grid-cols-4">
                {d.flow.map(([t, b]) => (
                  <li key={t} className="bg-ink p-7">
                    <span aria-hidden className="font-display text-4xl text-lime">→</span>
                    <h3 className="mt-10 font-display text-xl font-semibold">{t}</h3>
                    <p className="mt-2 text-sm text-paper/65">{b}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {d.compare && (
          <section>
            <Head label="Cost impact" title="Outsourced versus in-house" />
            <div className="mt-10 overflow-x-auto border border-ink">
              <table className="w-full min-w-[560px] text-left">
                <thead className="bg-ink text-paper">
                  <tr>
                    {d.compare.heads.map((h) => (
                      <th key={h} className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.compare.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-ink/15 transition hover:bg-white">
                      <td className="px-5 py-4 font-medium">{r[0]}</td>
                      <td className="px-5 py-4 text-ink/60">{r[1]}</td>
                      <td className="px-5 py-4 font-semibold">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {d.growth && (
          <section>
            <Head label="Revamp and SEO" title={d.growth.title} />
            <p className="mt-6 max-w-xl text-lg text-ink/70 lg:ml-[25%]">{d.growth.intro}</p>
            <div className="mt-10 overflow-x-auto border border-ink">
              <table className="w-full min-w-[520px] text-left">
                <thead className="bg-ink text-paper">
                  <tr>
                    <th className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider">Google Analytics</th>
                    {d.growth.periods.map((h) => (
                      <th key={h} className="px-5 py-3 font-mono text-xs font-medium uppercase tracking-wider">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {d.growth.rows.map((r) => (
                    <tr key={r[0]} className="border-t border-ink/15 transition hover:bg-white">
                      <td className="px-5 py-4 font-medium">{r[0]}</td>
                      <td className="px-5 py-4 text-ink/60">{r[1]}</td>
                      <td className="px-5 py-4 font-display text-xl font-semibold text-lime">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">{d.growth.note}</p>

            <div className="mt-20 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{d.growth.seoTitle}</h3>
                <p className="mt-4 text-ink/70">{d.growth.seoIntro}</p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {d.growth.keywords.map((k) => (
                    <li key={k} className="border border-ink/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider">
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid gap-px bg-ink/20 sm:grid-cols-2 lg:col-span-7">
                {d.growth.wins.map(([t, b]) => (
                  <article key={t} className="bg-paper p-7 transition hover:bg-white">
                    <span aria-hidden className="block h-1 w-10 bg-lime" />
                    <h4 className="mt-10 font-display text-xl font-semibold">{t}</h4>
                    <p className="mt-2 text-sm text-ink/70">{b}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {d.ai && (
          <section>
            <div className="grid gap-px bg-ink lg:grid-cols-12">
              <div className="bg-ink p-8 text-paper sm:p-12 lg:col-span-7">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">★ {d.ai.kicker}</p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{d.ai.title}</h2>
                <p className="mt-12 font-display text-7xl font-extrabold leading-none tracking-tighter sm:text-8xl">{d.ai.big}</p>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider text-paper/60">{d.ai.bigLabel}</p>
                <p className="mt-8 font-display text-2xl text-paper/80">{d.ai.surfaces}</p>
              </div>
              <div className="bg-paper p-8 sm:p-12 lg:col-span-5">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">Top pages by AI impressions</p>
                <ul className="mt-8 space-y-4">
                  {d.ai.pages.map(([n, v]) => (
                    <li key={n}>
                      <div className="flex justify-between text-sm">
                        <span>{n}</span>
                        <span className="font-mono">{v.toLocaleString()}</span>
                      </div>
                      <div className="mt-1.5 h-3 bg-ink/10">
                        <div className="h-full bg-lime" style={{ width: `${(v / d.ai!.pages[0][1]) * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-ink/70">{d.ai.caption}</p>
            <div className="mt-10 grid gap-px bg-ink/20 sm:grid-cols-3">
              {d.ai.scores.map(([t, v, s, badge]) => (
                <article key={t} className="bg-paper p-7 transition hover:bg-white">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink/60">{t}</p>
                    {badge && <span className="bg-lime px-2 py-0.5 font-mono text-[11px] font-medium">{badge}</span>}
                  </div>
                  <p className="mt-8 font-display text-5xl font-extrabold leading-none tracking-tighter">{v}</p>
                  <p className="mt-3 text-sm text-ink/70">{s}</p>
                </article>
              ))}
            </div>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink/50">Industry overview · AI visibility benchmarks • Analysis with Key Competitors</p>
          </section>
        )}

        <Block label="Results" title={d.resultsTitle}>
          <ul className="lg:col-span-6 lg:col-start-7">
            {d.results.map((c) => (
              <li key={c} className="flex gap-4 border-t border-ink/20 py-4 text-lg leading-relaxed text-ink/75">
                <span className="mt-3 h-px w-5 shrink-0 bg-ink" />
                {c}
              </li>
            ))}
          </ul>
        </Block>

        <section className="border-t border-ink pt-6">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60">Conclusion</p>
          <p className="mt-6 max-w-4xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {d.closing}
          </p>
        </section>
      </div>

      <a
        href={next.href}
        className="group block bg-ink px-6 py-16 text-paper transition hover:bg-ink2 sm:px-10"
      >
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-lime">Next case study</p>
            <p className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">{next.label}</p>
          </div>
          <span aria-hidden className="font-display text-5xl text-lime transition group-hover:translate-x-2">→</span>
        </div>
      </a>
    </main>
  )
}

function Head({ label, title }: { label: string; title: string }) {
  return (
    <div className="grid gap-6 border-t border-ink pt-6 lg:grid-cols-12 lg:gap-10">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60 lg:col-span-3">{label}</p>
      <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:col-span-9 lg:text-6xl">
        {title}
      </h2>
    </div>
  )
}

function Block({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="grid gap-6 border-t border-ink pt-6 lg:grid-cols-12 lg:gap-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-ink/60 lg:col-span-12">{label}</p>
        <h2 className="font-display text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:col-span-6">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
