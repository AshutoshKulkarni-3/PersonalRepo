export default function About() {
  const timeline = [
    {
      label: "Present",
      title: "B.Tech in Computer Engineering",
      place: "Walchand College of Engineering, Solapur",
      score: "CGPA: 9.59",
      accent: "cyan",
      description:
        "A high-performance academic journey built on consistency, curiosity, and deep technical engagement.",
    },
    {
      label: "Previous",
      title: "Higher Secondary Education",
      place: "Shanti Junior College",
      score: "78%",
      accent: "violet",
      description:
        "A foundation phase where structured study and analytical thinking started to take shape.",
    },
    {
      label: "Foundation",
      title: "Schooling",
      place: "Modern High School",
      score: "83%",
      accent: "emerald",
      description:
        "Early academic grounding that developed discipline, momentum, and a strong learning ethic.",
    },
  ];

  const accentClasses = {
    cyan: "border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.14)]",
    violet:
      "border-violet-400/25 bg-violet-400/10 text-violet-300 shadow-[0_0_20px_rgba(168,85,247,0.14)]",
    emerald:
      "border-emerald-400/25 bg-emerald-400/10 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.14)]",
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            About Me
          </span>
          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Built around continuous evolution,
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              guided by mental models.
            </span>
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            I approach growth as a system—observe, refine, repeat. My learning
            philosophy is rooted in mental models, first-principles thinking,
            and the belief that sustained improvement compounds over time. I am
            interested in not just learning tools, but understanding how
            systems behave, scale, and create impact.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white">Operating Philosophy</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-cyan-300">Continuous Evolution</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    I treat skill-building like an iterative process—small upgrades,
                    consistent feedback, long-term compounding.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-violet-300">Mental Models</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    I rely on structured thinking, pattern recognition, and
                    first-principles reasoning to solve problems with clarity.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-sm font-semibold text-emerald-300">Execution Over Noise</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    I prefer depth, clean systems, and deliberate learning over
                    shallow activity and short-lived momentum.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/40 via-white/10 to-violet-400/30 sm:block" />

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/15"
                >
                  <div className="absolute left-3 top-8 hidden h-4 w-4 rounded-full border border-white/20 bg-slate-950 sm:block" />
                  <div
                    className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${accentClasses[item.accent]}`}
                  >
                    {item.label}
                  </div>

                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-300">{item.place}</p>

                  <div className="mt-4 inline-flex rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-white/90">
                    {item.score}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}