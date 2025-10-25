
export const metadata = { title: "About – Tools" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-narrow">
        <h1 className="mt-0">About</h1>
        <p>
          The Clarity Test was built to help designers, founders, and marketers see what visitors actually see — and where things get lost along the way.
        </p>
        <p>
          It’s a quick, free, AI-assisted perspective based on proven UX heuristics, conversion design, and brand storytelling frameworks.
        </p>

        <h2>Learn more</h2>
        <p>
          Read more at{" "}
          <a href="https://joonasluotonen.com" target="_blank" rel="noreferrer">joonasluotonen.com</a>.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/clarity" className="btn btn-yellow">Go to Clarity Test</a>
          <a
            className="btn btn-blue"
            href="https://679d9eaa.sibforms.com/serve/MUIFAK3VvvjaVwEp1qUFHb8gTIon8Gp3MFwEivdiKtC7VD_Pq6_or4l9R94AabQhC2OsYJ6KQoHXN8R-4fGeTMfeyu5wszgIOMfNkHxMOlY95xzVZJ7MpwntjXTlCdFl62eOyuIzKt0pm31HPl21uFp8QEVfO5e-FJTQADorXEpPmpCs0K6XACNiGLsAGK2YRxrIXZDCrh-eIK4vtQ=="
            target="_blank" rel="noreferrer"
          >
            Join my mailing list
          </a>
        </div>
      </div>
    </section>
  );
}
