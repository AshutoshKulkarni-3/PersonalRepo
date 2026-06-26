export default function Projects() {
  const projects = [
    {
      title: "SAHAAY",
      status: "Flagship Project",
      description:
        "An AI-driven pothole reporting system designed to streamline issue reporting and support smarter civic response workflows. SAHAAY blends accessible mobile interaction with a robust backend pipeline for engineering-focused impact.",
      tech: ["Flask", "MySQL", "Flutter"],
      accent: "cyan",
      source: "#",
      featured: true,
    },
    {
      title: "More Engineering Builds Coming Soon",
      status: "In Progress",
      description:
        "A growing pipeline of software-first projects focused on backend systems, intelligent applications, and practical problem-solving is currently under development.",
      tech: ["LLMs", "Machine Learning", "System Design"],
      accent: "violet",
      source: "#",
      featured: false,
    },
    {
      title: "DSA & Utility Sandbox",
      status: "Ongoing",
      description:
        "A focused workspace for experimenting with algorithms, coding utilities, and clean implementation patterns that reinforce strong engineering fundamentals.",
      tech: ["Python", "Java", "DSA"],
      accent: "emerald",
      source: "#",
      featured: false,
    },
  ];

  const accentMap = {
    cyan: {
      badge: "border-cyan-400/20 bg-cyan-500/15 text-cyan-300",
      button:
        "border-cyan-400/25 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20 hover:shadow-[0_0_28px_rgba(34,211,238,0.2)]",
      glow: "hover:border-cyan-400/25 hover:shadow-[0_0_32px_rgba(34,211,238,0.16)]",
      pill: "bg-blue-500/20 text-blue-300",
    },
    violet: {
      badge: "border-violet-400/20 bg-violet-500/15 text-violet-300",
      button:
        "border-violet-400/25 bg-violet-500/10 text-violet-200 hover:bg-violet-500/20 hover:shadow-[0_0_28px_rgba(168,85,247,0.2)]",
      glow: "hover:border-violet-400/25 hover:shadow-[0_0_32px_rgba(168,85,247,0.16)]",
      pill: "bg-violet-500/20 text-violet-300",
    },
    emerald: {
      badge: "border-emerald-400/20 bg-emerald-500/15 text-emerald-300",
      button:
        "border-emerald-400/25 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20 hover:shadow-[0_0_28px_rgba(52,211,153,0.2)]",
      glow: "hover:border-emerald-400/25 hover:shadow-[0_0_32px_rgba(52,211,153,0.16)]",
      pill: "bg-emerald-500/20 text-emerald-300",
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            Software Projects
          </span>
          <h1 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
            Premium engineering work,
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              built with intent.
            </span>
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            A curated look at practical software work, with SAHAAY leading as a
            flagship build and more engineering-focused systems actively taking
            shape.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${accentMap[project.accent].glow} ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`grid h-full ${
                  project.featured ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
              >
                <div className="relative min-h-[220px] overflow-hidden border-b border-white/10 bg-slate-900/80 lg:min-h-full lg:border-b-0 lg:border-r">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.14),transparent_35%,rgba(168,85,247,0.14))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%)]" />
                  <div className="relative flex h-full items-center justify-center p-6">
                    <div className="w-full rounded-2xl border border-white/10 bg-black/30 p-6 shadow-inner shadow-black/40">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                          Image Placeholder
                        </span>
                        <div className="flex gap-2">
                          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-violet-400/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        </div>
                      </div>
                      <div className="mt-8 rounded-2xl border border-dashed border-white/10 px-6 py-12 text-center">
                        <p className="text-lg font-semibold text-white/90">{project.title}</p>
                        <p className="mt-2 text-sm text-slate-400">
                          Cinematic project cover area
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <span
                    className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${accentMap[project.accent].badge}`}
                  >
                    {project.status}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className={`rounded-full px-3 py-2 text-xs font-semibold ${accentMap[project.accent].pill}`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-1 ${accentMap[project.accent].button}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.531 2.865 8.374 6.839 9.73.5.096.682-.222.682-.494 0-.243-.009-.888-.014-1.742-2.782.617-3.369-1.376-3.369-1.376-.455-1.178-1.11-1.492-1.11-1.492-.908-.637.069-.624.069-.624 1.004.072 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.667.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.074 0-1.121.39-2.037 1.029-2.755-.103-.26-.446-1.304.098-2.719 0 0 .84-.276 2.75 1.053A9.303 9.303 0 0 1 12 6.844a9.27 9.27 0 0 1 2.504.35c1.909-1.329 2.747-1.053 2.747-1.053.546 1.415.203 2.459.1 2.719.64.718 1.028 1.634 1.028 2.755 0 3.944-2.338 4.812-4.566 5.066.359.318.678.944.678 1.903 0 1.374-.012 2.48-.012 2.818 0 .274.18.595.688.493C19.138 20.623 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
                      </svg>
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}