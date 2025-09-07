const services = [
  { title: 'Brand & Identity', desc: 'Positioning, naming, visual identity, and brand systems.' },
  { title: 'Web Design', desc: 'High-converting marketing sites with modern, responsive UX.' },
  { title: 'Web Development', desc: 'Fast, accessible, SEO-friendly builds with best practices.' },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">Everything you need to launch and grow.</p>
        </div>
        <div className="grid grid-3">
          {services.map((s) => (
            <div className="card" key={s.title}>
              <h3>{s.title}</h3>
              <p className="muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

