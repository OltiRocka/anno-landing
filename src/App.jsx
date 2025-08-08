import React, { useState } from 'react'

const colors = {
  bg: '#0e0f1a',
  panel: 'rgba(255,255,255,0.06)',
  border: 'rgba(255,255,255,0.08)',
  text: '#ffffff',
  subtext: 'rgba(255,255,255,0.7)',
  accent: '#00ADB5',
  muted: '#393E46'
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  const navItems = [
    {label:'Services', href:'#services'},
    {label:'Showcase', href:'#showcase'},
    {label:'Tech', href:'#tech'},
    {label:'Pricing', href:'#pricing'},
    {label:'Contact', href:'#contact'},
  ]
  return (
    <nav className="nav wrap">
      <a className="brand" href="#hero">
        <span className="brand-logo">∴</span>
        <span className="brand-name">anno</span>
      </a>
      <button className="burger" onClick={()=>setOpen(!open)} aria-label="Toggle menu">
        <span/><span/><span/>
      </button>
      <div className={`links ${open?'open':''}`}>
        {navItems.map(x=>(
          <a key={x.href} href={x.href} onClick={()=>setOpen(false)}>{x.label}</a>
        ))}
        <a className="cta" href="#contact">Get a proposal</a>
      </div>
    </nav>
  )
}

const Hero = () => (
  <header id="hero" className="hero">
    <div className="glow glow-a" />
    <div className="glow glow-b" />
    <div className="wrap hero-grid">
      <div className="hero-copy">
        <h1 className="gradient">Turning Data Into Smarter Decisions</h1>
        <p className="lead">
          anno is a boutique team for <b>analytics</b>, <b>data science</b>, <b>optimization</b> and <b>automation</b>.
          We build scoring systems, route optimizers, dashboards, and AI workflows that actually ship.
        </p>
        <div className="hero-cta">
          <a href="#contact" className="btn btn-accent">Start a project</a>
          <a href="#showcase" className="btn btn-ghost">See our work</a>
        </div>
        <ul className="hero-bullets">
          <li>Scorecards like credit risk — for your business KPIs</li>
          <li>Optimization engines: routing, staffing, pricing</li>
          <li>Automations that remove busywork, not people</li>
        </ul>
      </div>
      <div className="hero-art">
        <div className="orbit">
          <div className="node n1">ML</div>
          <div className="node n2">ETL</div>
          <div className="node n3">API</div>
          <div className="node n4">Viz</div>
        </div>
        <div className="glass">
          <div className="card">
            <div className="card-row">
              <span>Orders</span><b>12,483</b>
            </div>
            <div className="sparkline">
              <div className="bar" style={{height:'35%'}}/>
              <div className="bar" style={{height:'60%'}}/>
              <div className="bar" style={{height:'45%'}}/>
              <div className="bar" style={{height:'80%'}}/>
              <div className="bar" style={{height:'55%'}}/>
              <div className="bar" style={{height:'90%'}}/>
              <div className="bar" style={{height:'50%'}}/>
            </div>
          </div>
          <div className="card">
            <div className="card-row">
              <span>Route cost</span><b>−18.7%</b>
            </div>
            <div className="progress"><span style={{width:'82%'}}/></div>
          </div>
          <div className="card">
            <div className="card-row">
              <span>Uptime</span><b>99.9%</b>
            </div>
            <div className="progress"><span style={{width:'99%'}}/></div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

const Logos = () => (
  <section className="wrap logos" aria-label="Trusted by">
    <span className="pill">Trusted by teams who ship</span>
    <div className="logo-row">
      <div className="logo">acme<span>analytics</span></div>
      <div className="logo">north<span>freight</span></div>
      <div className="logo">mercury<span>labs</span></div>
      <div className="logo">aurora<span>retail</span></div>
      <div className="logo">atlas<span>bank</span></div>
    </div>
  </section>
)

const Services = () => {
  const items = [
    {title:'Data Analytics', desc:'Executive dashboards, KPI pipelines, anomaly detection, dbt & ELT best practices.', icon:'📊'},
    {title:'Data Science', desc:'Forecasting, scorecards, churn, fraud, uplift and experimentation frameworks.', icon:'🧠'},
    {title:'Optimization', desc:'Routing, scheduling, inventory and pricing with OR-Tools/CVX/Rust backends.', icon:'🧩'},
    {title:'Automation', desc:'APIs, webhooks, and AI agents that close the loop from data → action.', icon:'⚙️'},
  ]
  return (
    <section id="services" className="section wrap">
      <h2>What we do</h2>
      <p className="sub">From messy spreadsheets to production systems.</p>
      <div className="grid3">
        {items.map((s)=>(
          <div className="tile" key={s.title}>
            <div className="tile-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a className="link" href="#contact">Get a proposal →</a>
          </div>
        ))}
      </div>
    </section>
  )
}

const Metrics = () => (
  <section className="metrics">
    <div className="wrap grid4">
      {[
        ['-25%','Fulfillment cost'],
        ['+18%','Conversion rate'],
        ['4–8 wks','Time to value'],
        ['99.9%','SLA uptime']
      ].map(([k,v])=> (
        <div className="metric" key={v}>
          <div className="k">{k}</div>
          <div className="v">{v}</div>
        </div>
      ))}
    </div>
  </section>
)

const Showcase = () => {
  const cards = [
    {tag:'Optimization', title:'Route Optimizer', desc:'Vehicle routing with time windows, live traffic and depot constraints. Cut drive time 23%.', code:'VRP, OR-Tools, Rust', result:'−23% drive time'},
    {tag:'Analytics', title:'Executive KPI Hub', desc:'One source of truth: revenue, margin, supply chain KPIs with alerting and owner playbooks.', code:'dbt, BigQuery, Metabase', result:'+18% conversion'},
    {tag:'Data Science', title:'Credit-like Scorecards', desc:'Probability-of-default style scoring for ops risk and collections prioritization.', code:'Logit, WOE/IV, PSI/CSI', result:'↑ recoveries 12%'},
  ]
  return (
    <section id="showcase" className="section wrap">
      <h2>Selected work</h2>
      <p className="sub">Opinionated, production-ready builds.</p>
      <div className="grid3">
        {cards.map(c=>(
          <div className="case" key={c.title}>
            <span className="case-tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
            <div className="case-meta">
              <span>{c.code}</span>
              <b>{c.result}</b>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const Tech = () => (
  <section id="tech" className="section wrap">
    <h2>Tech we love</h2>
    <p className="sub">Pick the right tool, not the trendy one.</p>
    <div className="chips">
      {['Python','Pandas','Polars','PostgreSQL','dbt','Airflow','Docker','Kubernetes','Rust','OR-Tools','FastAPI','Node.js','React','Next.js','Metabase','Grafana','OpenAI','Ollama','gRPC','Kafka'].map(t=>(
        <span className="chip" key={t}>{t}</span>
      ))}
    </div>
  </section>
)

const Pricing = () => (
  <section id="pricing" className="section wrap">
    <h2>Simple pricing</h2>
    <p className="sub">Start small. Scale when it works.</p>
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
        <a className="btn btn-ghost" href="#contact">Get started</a>
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
        <a className="btn btn-ghost" href="#contact">Talk to us</a>
      </div>
    </div>
  </section>
)

const Contact = () => (
  <section id="contact" className="section wrap contact">
    <div className="contact-card">
      <h2>Tell us about your data</h2>
      <p className="sub">Two minutes. No spam. We reply within 24h.</p>
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
      <p className="sub">Data analytics, data science, optimization & automation.</p>
    </div>
    <div className="right">
      <a href="#services">Services</a>
      <a href="#showcase">Showcase</a>
      <a href="#tech">Tech</a>
      <a href="#pricing">Pricing</a>
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
      <Metrics/>
      <Showcase/>
      <Tech/>
      <Pricing/>
      <Contact/>
      <Footer/>
    </div>
  )
}
