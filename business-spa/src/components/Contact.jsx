export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const payload = Object.fromEntries(formData.entries())
    alert(`Thanks ${payload.name}! We will get back to you at ${payload.email}.`)
    event.currentTarget.reset()
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title">Contact us</h2>
          <p className="section-subtitle">Tell us about your project and timeline.</p>
        </div>
        <form className="form grid grid-2" onSubmit={handleSubmit}>
          <div>
            <label className="muted" htmlFor="name">Name</label>
            <input className="input" id="name" name="name" placeholder="Your name" required />
          </div>
          <div>
            <label className="muted" htmlFor="email">Email</label>
            <input className="input" id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div style={{gridColumn: '1 / -1'}}>
            <label className="muted" htmlFor="message">Project details</label>
            <textarea className="textarea" id="message" name="message" placeholder="What are you building?" />
          </div>
          <div>
            <button className="btn btn-primary" type="submit">Request a quote</button>
          </div>
        </form>
      </div>
    </section>
  )
}

