function Contact() {
  return (
    <section className="min-h-screen bg-gray-950 px-6 py-30 text-white">
      <div className="max-w-7xl md:ml-75">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Contact
        </h1>
        <h2 className="text-xl font-bold tracking-tight pt-5 text-gray-400">
          Have a role, project, or opportunity in mind? Let's talk.
        </h2>

        <div className="mt-14 flex border border-white/10 rounded-2xl overflow-hidden max-w-4xl md:ml-60">

          
          <div className="flex-[0.9] bg-gray-900/40 px-8 py-10 flex flex-col justify-center border-r border-white/10">
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>

            <div className="flex items-center gap-3 mb-3.5 text-sm text-gray-400">
              <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">@</span>
              rossbrent@email.com
            </div>
            <div className="flex items-center gap-3 mb-3.5 text-sm text-gray-400">
              <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">in</span>
              linkedin.com/in/rossbrent
            </div>
            <div className="flex items-center gap-3 mb-4 text-sm text-gray-400">
              <span className="w-7 h-7 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center text-xs">gh</span>
              github.com/rossbrent
            </div>

            <div className="flex items-center gap-2 text-sm text-green-400">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Available for work
            </div>
          </div>

          
          <div className="flex-[1.3] bg-white/[0.03] px-8 py-10">

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1.5">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm text-gray-400 mb-1.5">Message</label>
              <textarea
                placeholder="Write your message..."
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-3.5 py-3 text-sm text-white outline-none focus:border-blue-500 transition-colors resize-y"
              />
            </div>

            <button className="bg-blue-500 text-gray-950 font-semibold text-sm rounded-lg px-6 py-3">
              Send Message
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
