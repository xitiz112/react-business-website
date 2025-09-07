export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">About us</h2>
          <p className="section-subtitle">A small, senior team crafting standout digital experiences.</p>
        </div>
        <div className="grid grid-2">
          <div className="card">
            <h3>What we do</h3>
            <p className="muted">
              We partner closely with founders and marketing teams to design and build
              conversion-focused brands, websites, and product experiences.
            </p>
          </div>
          <div className="card">
            <h3>How we work</h3>
            <p className="muted">
              Strategy first, then rapid iteration. Clear communication, predictable timelines,
              and measurable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

