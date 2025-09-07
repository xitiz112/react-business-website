const testimonials = [
  { name: 'Jordan Lee', role: 'CMO, FlowSaaS', quote: 'They delivered a stunning site and a bold brand in under six weeks. We saw a 38% lift in conversions the following month.' },
  { name: 'Ava Patel', role: 'Founder, Noon Studio', quote: 'Clear process, thoughtful strategy, and pixel-perfect execution. A dream partner.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">What clients say</h2>
          <p className="section-subtitle">Real results from real teams.</p>
        </div>
        <div className="grid grid-2">
          {testimonials.map((t) => (
            <div className="card testimonial" key={t.name}>
              <p className="quote">“{t.quote}”</p>
              <div style={{display:'flex', alignItems:'center', gap:12}}>
                <img className="avatar" src={`https://api.dicebear.com/9.x/initials/svg?seed=${encodeURIComponent(t.name)}`} alt="" />
                <div>
                  <strong>{t.name}</strong>
                  <div className="muted" style={{fontSize:14}}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

