
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-narrow text-center">
          <div className="flex justify-center">
            <Image src="/assets/tools.png" alt="TOOLS" width={220} height={40} priority />
          </div>
          <h1 className="mt-6">A second opinion for your website</h1>
          <p className="mt-4">
            Small tools and experiments to bring more clarity into design, branding, and business.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="/clarity" className="btn btn-primary">Go to Clarity Test</a>
            <a href="/about" className="btn btn-ghost">About</a>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-brand-blue/60">
        <div className="container-narrow">
          <div className="card p-6 md:p-10 bg-white/90">
            <h2 className="mt-0">Join my mailing list</h2>
            <p>
              Get tools, practical insights, and small experiments that help you find clarity by design.
            </p>
            {/* Replace the block below with your Brevo embed code */}
            <div className="mt-6">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input className="input" placeholder="your@email.com" aria-label="Email" />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <p className="mt-2 text-sm text-black/60">
                Paste your Brevo form embed code here to replace this simple form.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools quick */}
      <section className="section">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="mt-0">Clarity Test</h3>
              <p>Practical web page analysis on five axes with Quick Wins. Get your clarity profile and what to fix.</p>
              <div className="mt-4">
                <a href="/clarity" className="btn btn-primary">Run the test</a>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="mt-0">More coming</h3>
              <p>New small tools and experiments will appear here as they’re ready.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
