export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div>
          <div className="eyebrow">
            <span>New</span>
            <span>— We build brands that convert</span>
          </div>
          <h1>Elevate your brand with strategy, design, and development</h1>
          <p>
            We help ambitious teams launch beautiful websites and digital products that
            win customers and drive growth.
          </p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <a href="#contact" className="btn btn-primary">Get started</a>
            <a href="#work" className="btn">See our work</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="glow"></div>
        </div>
      </div>
    </section>
  )
}

