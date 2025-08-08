import React, { useEffect, useState } from 'react'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY>10)
    window.addEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])
  const items = [
    ['Services','#services'],
    ['Work','#work'],
    ['Process','#process'],
    ['Pricing','#pricing'],
    ['FAQ','#faq'],
    ['Contact','#contact'],
  ]
  return (
    <nav className={`nav ${scrolled?'nav-shadow':''}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand">
          <span className="brand-logo">∴</span>
          <span className="brand-name">anno</span>
        </a>
        <button className="burger" onClick={()=>setOpen(!open)} aria-label="Toggle menu"><span/><span/><span/></button>
        <div className={`links ${open?'open':''}`}>
          {items.map(([label,href])=>(<a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>))}
          <a className="cta" href="#contact">Get proposal</a>
        </div>
      </div>
    </nav>
  )
}

const Hero = () => (
  <header id="top" className="hero">
    <div className="hero-decor">
      <div className="ring r1"/><div className="ring r2"/><div className="ring r3"/>
      <div className="orb o1"/><div className="orb o2"/><div className="orb o3"/>
    </div>
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <span className="eyebrow">Data analytics · data science · optimization · automation</span>
        <h1 className="headline"><span className="gradient">Data. Decisions. Done.</span></h1>
        <p className="lead">We’re <b>anno</b>, a boutique data team. We ship dashboards, scorecards, optimization engines and automations that move the needle — fast.</p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-accent">Start a project</a>
          <a href="#work" className="btn btn-soft">See our work</a>
        </div>
        <div className="hero-badges">
          <span className="badge">⚡ 4–8 week delivery</span>
          <span className="badge">🛡️ Security-first</span>
          <span className="badge">📈 Proven lift</span>
        </div>
      </div>
      <div className="hero-art">
        <div className="glass chart">
          <div className="row"><span>Revenue</span><b>$1.28M</b></div>
          <div className="spark">
            {Array.from({length:24}).map((_,i)=>(<i key={i} style={{height:(30+Math.sin(i/2)*20 + (i%5)*6)+'%'}}/>))}
          </div>
        </div>
        <div className="hud">
          <div className="hud-card glass">
            <div className="row"><span>Route cost</span><b>−18.7%</b></div>
            <div className="progress"><span style={{width:'82%'}}/></div>
          </div>
          <div className="hud-card glass">
            <div className="row"><span>Uptime</span><b>99.9%</b></div>
            <div className="progress"><span style={{width:'99%'}}/></div>
          </div>
          <div className="hud-card glass">
            <div className="row"><span>Risk score</span><b>0.14</b></div>
            <div className="dots">{Array.from({length:24}).map((_,i)=>(<b key={i} className={i<20?'on':''}/>))}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

const Logos = () => (
  <section className="wrap logos" aria-label="Trusted by">
    <div className="marquee">
      <div className="track">
        {['Atlas Bank','North Freight','Mercury Labs','Aurora Retail','Acme Analytics','BlueRiver','Helix','Nimbus'].map(x=>(
          <span className="logo-pill" key={x}>{x}</span>
        ))}
        {['Atlas Bank','North Freight','Mercury Labs','Aurora Retail','Acme Analytics','BlueRiver','Helix','Nimbus'].map(x=>(
          <span className="logo-pill" key={x+'2'}>{x}</span>
        ))}
      </div>
    </div>
  </section>
)

const Services = () => {
  const items = [
    ['📊','Data Analytics','Executive dashboards, KPI pipelines, anomaly detection, dbt & ELT best practices.'],
    ['🧠','Data Science','Forecasting, scorecards, churn, fraud, uplift and experimentation frameworks.'],
    ['🧩','Optimization','Routing, scheduling, inventory and pricing with OR-Tools/CVX/Rust backends.'],
    ['⚙️','Automation','APIs, webhooks, and AI agents that close the loop from data → action.']
  ]
  return (
    <section id="services" className="section wrap">
      <div className="section-head">
        <h2>What we do</h2>
        <p className="muted">From messy spreadsheets to production systems.</p>
      </div>
      <div className="grid4">
        {items.map(([icon,title,desc])=>(
          <div className="tile fancy" key={title}>
            <div className="tile-top">
              <div className="emoji">{icon}</div>
              <h3>{title}</h3>
            </div>
            <p>{desc}</p>
            <a className="link" href="#contact">Get a proposal →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const Work = () => {
  const cards = [
    ['Optimization','Route Optimizer','Vehicle routing with time windows, live traffic and depot constraints.','−23% drive time'],
    ['Analytics','Executive KPI Hub','Revenue, margin, supply chain KPIs with alerting & owner playbooks.','+18% conversion'],
    ['Data Science','Credit-like Scorecards','PO PD style scoring for ops risk & collections prioritization.','↑ recoveries 12%'],
  ]
  return (
    <section id="work" className="section wrap">
      <div className="section-head">
        <h2>Selected work</h2>
        <p className="muted">Opinionated, production-ready builds.</p>
      </div>
      <div className="grid3">
        {cards.map(([tag,title,desc,result])=>(
          <div className="case tilt" key={title}>
            <span className="tag">{tag}</span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="case-meta">
              <span>Playbook ready</span>
              <b>{result}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Process = () => {
  const steps = [
    ['Scope','We define success, constraints and the smallest thing that works.'],
    ['Blueprint','Architecture, data contracts, and owner playbooks.'],
    ['Build','Pipelines, models, dashboards — instrumented & tested.'],
    ['Ship','Training, docs, handoff. We stay on call for fixes.'],
  ]
  return (
    <section id="process" className="section wrap">
      <div className="section-head">
        <h2>How we work</h2>
        <p className="muted">Fast, predictable, no fluff.</p>
      </div>
      <div className="timeline">
        {steps.map(([t,d],i)=>(
          <div className="step" key={t}>
            <div className="step-bullet">{i+1}</div>
            <div className="step-body">
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Testimonials = () => {
  const quotes = [
    ['“We cut fulfillment cost by a quarter in 6 weeks.”','COO, Retail'],
    ['“Finally one source of truth. No more spreadsheet wars.”','Head of Growth'],
    ['“Their scorecards paid for themselves in a month.”','Collections Lead'],
  ]
  const [i,setI] = useState(0)
  useEffect(()=>{
    const id = setInterval(()=> setI(x => (x+1)%quotes.length), 3500)
    return ()=>clearInterval(id)
  },[])
  const [q,a] = quotes[i]
  return (
    <section className="testimonials">
      <div className="wrap t-wrap">
        <div className="quote glass">
          <p>{q}</p>
          <span className="author">{a}</span>
        </div>
      </div>
    </section>
  )
}

const Pricing = () => (
  <section id="pricing" className="section wrap">
    <div className="section-head">
      <h2>Simple pricing</h2>
      <p className="muted">Start small. Scale when it works.</p>
    </div>
    <div className="grid3">
      <div className="price">
        <h3>Prototype</h3>
        <div className="price-tag">$3,500</div>
        <ul>
          <li>Fixed scope MVP</li>
          <li>2–3 weeks</li>
          <li>One dashboard or model</li>
          <li>Slack support</li>
        </ul>
        <a className="btn btn-soft" href="#contact">Get started</a>
      </div>
      <div className="price featured">
        <h3>Growth</h3>
        <div className="price-tag">$6,900</div>
        <ul>
          <li>Roadmap + delivery</li>
          <li>4–8 weeks</li>
          <li>Pipelines + automations</li>
          <li>SLA + monitoring</li>
        </ul>
        <a className="btn btn-accent" href="#contact">Book a call</a>
      </div>
      <div className="price">
        <h3>Retainer</h3>
        <div className="price-tag">from $2,500/mo</div>
        <ul>
          <li>Part-time data team</li>
          <li>Backlog & ops</li>
          <li>Experiments</li>
          <li>Monthly insights</li>
        </ul>
        <a className="btn btn-soft" href="#contact">Talk to us</a>
      </div>
    </div>
  </section>
)

const FAQ = () => {
  const rows = [
    ['How fast can we start?','Usually within 1–2 weeks. We keep a small bench for kickoff.'],
    ['Do you work with our existing stack?','Yes. We integrate first, then phase upgrades when valuable.'],
    ['How do you handle security?','Least-privilege, network isolation, read-only by default and audits.'],
    ['What do you need from us?','Access to data sources and a clear success metric. We handle the rest.'],
  ]
  const [open,setOpen] = useState(0)
  return (
    <section id="faq" className="section wrap">
      <div className="section-head">
        <h2>FAQ</h2>
        <p className="muted">Short answers. Longer docs on request.</p>
      </div>
      <div className="faq">
        {rows.map(([q,a],i)=>(
          <div key={q} className={`qa ${open===i?'open':''}`} onClick={()=>setOpen(open===i?-1:i)}>
            <div className="q">{q}</div>
            <div className="a">{a}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Contact = () => (
  <section id="contact" className="section wrap contact">
    <div className="contact-card glass">
      <h2>Tell us about your data</h2>
      <p className="muted">Two minutes. No spam. We reply within 24h.</p>
      <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We will be in touch.')}}>
        <div className="row">
          <input required placeholder="Your name" />
          <input type="email" required placeholder="Work email" />
        </div>
        <input placeholder="Company / Website" />
        <textarea rows="5" placeholder="What would you like to build?"></textarea>
        <button className="btn btn-accent" type="submit">Request proposal</button>
      </form>
    </div>
    <div className="contact-aside">
      <div className="aside-tile">
        <h4>Zero-deck policy</h4>
        <p>No 40-slide fluff. We show a plan, a quote, and a timeline.</p>
      </div>
      <div className="aside-tile">
        <h4>Keep your stack</h4>
        <p>We integrate with what you have and phase upgrades safely.</p>
      </div>
      <div className="aside-tile">
        <h4>Security-first</h4>
        <p>Principle of least privilege, private networking, and audits.</p>
      </div>
    </div>
  </section>
)

const Footer = () => (
  <footer className="footer wrap">
    <div className="left">
      <div className="brand compact"><span className="brand-logo">∴</span><span className="brand-name">anno</span></div>
      <p className="muted">Data analytics, data science, optimization & automation.</p>
    </div>
    <div className="right">
      <a href="#services">Services</a>
      <a href="#work">Work</a>
      <a href="#process">Process</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
      <a href="#contact" className="cta-mini">Get a proposal</a>
    </div>
  </footer>
)

export default function App(){
  return (
    <div>
      <Nav/>
      <Hero/>
      <Logos/>
      <Services/>
      <Work/>
      <Process/>
      <Testimonials/>
      <Pricing/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}
