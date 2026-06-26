export default function Contact() {
  const socials = [
    {
      name: "GitHub",
      href: "https://github.com/AshutoshKulkarni-3",
      accent:
        "hover:border-cyan-400/25 hover:text-cyan-300 hover:shadow-[0_0_22px_rgba(34,211,238,0.16)]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M12 2C6.477 2 2 6.59 2 12.253c0 4.531 2.865 8.374 6.839 9.73.5.096.682-.222.682-.494 0-.243-.009-.888-.014-1.742-2.782.617-3.369-1.376-3.369-1.376-.455-1.178-1.11-1.492-1.11-1.492-.908-.637.069-.624.069-.624 1.004.072 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.667.349-1.114.635-1.37-2.221-.259-4.555-1.14-4.555-5.074 0-1.121.39-2.037 1.029-2.755-.103-.26-.446-1.304.098-2.719 0 0 .84-.276 2.75 1.053A9.303 9.303 0 0 1 12 6.844a9.27 9.27 0 0 1 2.504.35c1.909-1.329 2.747-1.053 2.747-1.053.546 1.415.203 2.459.1 2.719.64.718 1.028 1.634 1.028 2.755 0 3.944-2.338 4.812-4.566 5.066.359.318.678.944.678 1.903 0 1.374-.012 2.48-.012 2.818 0 .274.18.595.688.493C19.138 20.623 22 16.783 22 12.253 22 6.59 17.523 2 12 2Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ashutosh-kulkarni-0b3359381",
      accent:
        "hover:border-violet-400/25 hover:text-violet-300 hover:shadow-[0_0_22px_rgba(168,85,247,0.16)]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.11.9 2.03 2.02 2.03h.03a2.03 2.03 0 1 0 0-4.06ZM20.8 13.05c0-3.45-1.84-5.05-4.3-5.05-1.98 0-2.86 1.08-3.35 1.84V8.5H9.77c.04.89 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.67.13-.91.27-.67.89-1.37 1.93-1.37 1.36 0 1.9 1.03 1.9 2.55V20h3.38v-6.95Z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/@Ashutos64320895",
      accent:
        "hover:border-emerald-400/25 hover:text-emerald-300 hover:shadow-[0_0_22px_rgba(52,211,153,0.16)]",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.477l8.6-9.829L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.494h2.039L6.486 3.244H4.298l13.313 17.403Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.10),transparent_28%),linear-gradient(to_bottom,rgba(15,23,42,1),rgba(2,6,23,1))]" />
      <div className="absolute left-16 top-24 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-16 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-slate-300 backdrop-blur-md">
            Contact
          </span>
          <h1 className="mt-6 text-3xl font-black sm:text-4xl md:text-5xl">
            Let’s build something
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              sharp, useful, and future-ready.
            </span>
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
            Open to internships, collaboration, and thoughtful conversations
            around software engineering, AI, machine learning, and growth.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white">Reach Out</h2>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                If you have an opportunity, project idea, or just want to talk
                about engineering, feel free to send a message.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Socials
              </h3>

              <div className="mt-5 flex flex-col gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm font-medium text-white/90 transition duration-300 hover:-translate-y-1 ${social.accent}`}
                  >
                    <span className="inline-flex items-center gap-3">
                      {social.icon}
                      {social.name}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Visit
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-8">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-violet-400/40 focus:ring-2 focus:ring-violet-400/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-emerald-400/40 focus:ring-2 focus:ring-emerald-400/20"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.18)] ring-1 ring-cyan-400/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.28)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}