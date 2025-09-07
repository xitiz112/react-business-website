export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container" style={{display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, flexWrap:'wrap'}}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <span className="brand-mark" aria-hidden="true"></span>
          <strong>Acme Creative</strong>
        </div>
        <div>© {year} Acme Creative. All rights reserved.</div>
      </div>
    </footer>
  )
}

