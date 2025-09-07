const work = [
  { label: 'Ecommerce', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop' },
  { label: 'SaaS', img: 'https://images.unsplash.com/photo-1551288450-238fae4b7df4?q=80&w=1200&auto=format&fit=crop' },
  { label: 'Fintech', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
]

export default function Portfolio() {
  return (
    <section id="work">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Selected work</h2>
          <p className="section-subtitle">Recent projects across industries.</p>
        </div>
        <div className="grid grid-3">
          {work.map((w) => (
            <div key={w.label} className="portfolio-item">
              <img src={w.img} alt={w.label + ' project preview'} />
              <div className="overlay"></div>
              <div className="label">{w.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

