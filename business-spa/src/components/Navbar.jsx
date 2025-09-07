export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#hero" className="brand" aria-label="Acme Creative home">
          <span className="brand-mark" aria-hidden="true"></span>
          <span>Acme Creative</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#testimonials">Testimonials</a>
          <a className="btn btn-primary" href="#contact">Get a quote</a>
        </nav>
        <a className="menu-btn btn" href="#contact" aria-label="Contact">
          Contact
        </a>
      </div>
    </header>
  )
}

