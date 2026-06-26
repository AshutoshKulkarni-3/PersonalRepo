import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_32%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-10 top-1/3 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              AI • ML • DSA
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-white/80">Ashutosh</span>
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                Kulkarni
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Computer Engineering Student | Focused on Artificial Intelligence,
              Machine Learning &amp; DSA.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
              I build with precision, think through systems, and learn through
              disciplined iteration—aiming to create intelligent software that
              is both practical and future-ready.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] ring-1 ring-cyan-400/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-[0_0_38px_rgba(34,211,238,0.3)]"
              >
                View Projects
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:text-violet-200 hover:shadow-[0_0_26px_rgba(168,85,247,0.16)]"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Current Focus
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-white">
                    Building depth through disciplined learning
                  </h2>
                </div>
                <div className="h-12 w-12 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.25)]" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-[0_0_24px_rgba(34,211,238,0.15)]">
                  <p className="text-sm font-semibold text-cyan-300">AI &amp; ML</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Exploring intelligent systems with a strong software-first mindset.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/25 hover:shadow-[0_0_24px_rgba(168,85,247,0.15)]">
                  <p className="text-sm font-semibold text-violet-300">DSA</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Strengthening core problem-solving through structure, logic, and speed.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_0_24px_rgba(52,211,153,0.15)]">
                  <p className="text-sm font-semibold text-emerald-300">Systems Thinking</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Focusing on clean architecture, feedback loops, and scalable ideas.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                  <p className="text-sm font-semibold text-white">Execution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Turning curiosity into real projects with clarity, consistency, and intent.
                  </p>
                </div>
              </div>
            </div>

           <div className="mt-6 w-max hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-lg backdrop-blur-xl md:block">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Mindset
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Learn fast. Build sharp. Evolve continuously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}