export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      accent: "cyan",
      description:
        "A practical coding stack focused on clarity, fundamentals, and strong problem-solving foundations.",
      items: ["Python", "C", "Java"],
    },
    {
      title: "Core Competencies",
      accent: "violet",
      description:
        "Algorithmic thinking, efficient logic, and disciplined practice through Data Structures and Algorithms.",
      items: ["Data Structures", "Algorithms", "Problem Solving", "DSA"],
    },
    {
      title: "Creative / Other",
      accent: "emerald",
      description:
        "A visual storytelling edge that complements technical work and presentation quality.",
      items: ["Video Production", "DaVinci Resolve"],
    },
    {
      title: "Upcoming Focus",
      accent: "white",
      description:
        "The next arc of growth is centered on building intelligent systems with modern AI workflows.",
      items: ["LLMs", "Machine Learning"],
    },
  ];

  const accentMap = {
    cyan: {
      ring: "hover:ring-cyan-400/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]",
      chip: "bg-cyan-500/15 text-cyan-300 border-cyan-400/20",
      title: "text-cyan-300",
    },
    violet: {
      ring: "hover:ring-violet-400/30 hover:shadow-[0_0_30px_rgba(168,85,247,0.18)]",
      chip: "bg-violet-500/15 text-violet-300 border-violet-400/20",
      title: "text-violet-300",
    },
    emerald: {
      ring: "hover:ring-emerald-400/30 hover:shadow-[0_0_30px_rgba(52,211,153,0.18)]",
      chip: "bg-emerald-500/15 text-emerald-300 border-emerald-400/20",
      title: "text-emerald-300",
    },
    white: {
      ring: "hover:ring-white/20 hover:shadow-[0_0_26px_rgba(255,255,255,0.08)]",
      chip: "bg-white/10 text-white/85 border-white/10",
      title: "text-white",
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(52,211,153,0.08),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            Technical Stack
          </span>
          <h1 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
            Skills sharpened through
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent">
              discipline, curiosity, and iteration.
            </span>
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            My stack reflects a blend of engineering fundamentals, problem-solving
            depth, and creative execution—while staying aligned with an evolving
            focus on intelligent systems.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl ring-1 ring-transparent transition duration-300 hover:-translate-y-1 ${accentMap[group.accent].ring}`}
            >
              <div className="flex items-center justify-between">
                <h2 className={`text-lg font-bold ${accentMap[group.accent].title}`}>
                  {group.title}
                </h2>
                <div className="h-10 w-10 rounded-2xl border border-white/10 bg-slate-900/70" />
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-2 text-xs font-semibold tracking-wide ${accentMap[group.accent].chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.03] p-6 backdrop-blur-xl">
          <p className="text-sm leading-7 text-slate-300">
            <span className="font-semibold text-white">Current trajectory:</span>{" "}
            strengthening core software engineering fundamentals while expanding
            into machine learning and LLM-oriented systems with a long-term,
            systems-driven mindset.
          </p>
        </div>
      </div>
    </section>
  );
}