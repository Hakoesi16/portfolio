import { useState } from 'react'

const content = {
  fr: {
    nav: { about: 'À propos', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
    eyebrow: 'Disponible pour stage / premier emploi',
    heroTitle: <>Je construis des <span className="accent">apps mobiles</span> et des <span className="accent">automatisations</span> qui tournent seules.</>,
    heroLead: "Étudiant en informatique à l'ESI Sidi Bel Abbès, développeur Flutter/Dart et backend Node.js, je conçois des workflows n8n qui font le travail répétitif à ma place.",
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
    flowLabel: 'Exemple de workflow n8n',
    sectionAbout: 'À propos',
    aboutP1: <><strong>3ème année</strong> à l'École Supérieure d'Informatique (ESI) de Sidi Bel Abbès, spécialité Génie Logiciel & Systèmes Informatiques.</>,
    aboutP2: "Je suis développeur mobile front-end (Flutter/Dart) et je construis aussi des APIs backend avec Node.js, Express et MongoDB. Ce qui me passionne le plus : automatiser des processus avec n8n pour connecter des services, des IA et des bases de données sans écrire de code répétitif.",
    aboutP3: "Curieux et autonome, j'apprends vite et j'aime transformer une idée en produit fonctionnel, du design de l'interface jusqu'au déploiement.",
    stackTitle: 'Stack',
    stack: [
      ['Mobile', 'Flutter, Dart'],
      ['Backend', 'Node.js, Express, MongoDB'],
      ['Automation', 'n8n, Webhooks, AI Agents'],
      ['Langages', 'Python, Java, Dart, Assembly x86'],
      ['Web', 'HTML5, CSS3, JavaScript'],
      ['Outils', 'Git, GitHub'],
    ],
    sectionProjects: 'Projets',
    projects: [
      {
        tag: 'Application mobile · Flutter',
        title: 'Bahr-Fresh',
        desc: "Application de gestion de pêche : suivi des lots, statuts (approuvé, en attente, rejeté, expiré), revenus totaux et répartition du marché par espèce. Interface claire pensée pour un usage terrain rapide.",
        img: '/assets/bahr-fresh.jpeg',
      },
      {
        tag: 'Application mobile · Flutter',
        title: 'Zujaj Quran Academy',
        desc: "Système de gestion pour une école coranique en ligne : authentification élève/parent, interface trilingue (EN/FR/AR), et raccourcis développeur pour les tests rapides.",
        img: '/assets/quran-academy.jpeg',
      },
      {
        tag: 'Automatisation · n8n',
        title: 'AI Agent Workflow',
        desc: "Workflow n8n déclenché par un webhook, connecté à un agent IA (OpenRouter) avec mémoire et outils, qui répond automatiquement et renvoie le résultat via webhook.",
        img: '/assets/n8n-workflow.jpeg',
      },
    ],
    sectionSkills: 'Compétences',
    skillGroups: [
      { title: 'Mobile', items: ['Flutter', 'Dart', 'UI responsive', 'Intégration backend'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'API REST'] },
      { title: 'Automatisation', items: ['n8n', 'Webhooks', 'AI Agents', 'Intégrations'] },
      { title: 'Fondations', items: ['Python', 'Java', 'Assembly x86', 'Git'] },
    ],
    contactTitle: 'Discutons de votre projet',
    contactLead: "Ouvert aux stages, premiers emplois et collaborations sur des projets mobiles ou d'automatisation.",
    footer: '— Construit avec React',
  },
  en: {
    nav: { about: 'About', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    eyebrow: 'Available for internship / entry-level role',
    heroTitle: <>I build <span className="accent">mobile apps</span> and <span className="accent">automations</span> that run themselves.</>,
    heroLead: "Computer science student at ESI Sidi Bel Abbès, Flutter/Dart developer and Node.js backend builder, I design n8n workflows that handle the repetitive work for me.",
    ctaProjects: 'View my projects',
    ctaContact: 'Get in touch',
    flowLabel: 'n8n workflow example',
    sectionAbout: 'About',
    aboutP1: <><strong>3rd-year student</strong> at the Higher School of Computer Science (ESI), Sidi Bel Abbès, majoring in Software Engineering & Computer Systems.</>,
    aboutP2: "I'm a mobile front-end developer (Flutter/Dart) and I also build backend APIs with Node.js, Express and MongoDB. What I enjoy most is automating processes with n8n to connect services, AI agents and databases without repetitive code.",
    aboutP3: "Curious and self-driven, I learn fast and love turning an idea into a working product, from interface design to deployment.",
    stackTitle: 'Stack',
    stack: [
      ['Mobile', 'Flutter, Dart'],
      ['Backend', 'Node.js, Express, MongoDB'],
      ['Automation', 'n8n, Webhooks, AI Agents'],
      ['Languages', 'Python, Java, Dart, Assembly x86'],
      ['Web', 'HTML5, CSS3, JavaScript'],
      ['Tools', 'Git, GitHub'],
    ],
    sectionProjects: 'Projects',
    projects: [
      {
        tag: 'Mobile app · Flutter',
        title: 'Bahr-Fresh',
        desc: "Fishing management app: batch tracking, statuses (approved, pending, rejected, expired), total earnings, and market breakdown by species. Clean interface built for fast field use.",
        img: '/assets/bahr-fresh.jpeg',
      },
      {
        tag: 'Mobile app · Flutter',
        title: 'Zujaj Quran Academy',
        desc: "Management system for an online Quran school: student/parent authentication, trilingual interface (EN/FR/AR), and developer shortcuts for fast testing.",
        img: '/assets/quran-academy.jpeg',
      },
      {
        tag: 'Automation · n8n',
        title: 'AI Agent Workflow',
        desc: "Webhook-triggered n8n workflow connected to an AI agent (OpenRouter) with memory and tools, responding automatically and returning the result via webhook.",
        img: '/assets/n8n-workflow.jpeg',
      },
    ],
    sectionSkills: 'Skills',
    skillGroups: [
      { title: 'Mobile', items: ['Flutter', 'Dart', 'Responsive UI', 'Backend integration'] },
      { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'REST API'] },
      { title: 'Automation', items: ['n8n', 'Webhooks', 'AI Agents', 'Integrations'] },
      { title: 'Foundations', items: ['Python', 'Java', 'Assembly x86', 'Git'] },
    ],
    contactTitle: "Let's talk about your project",
    contactLead: "Open to internships, entry-level roles, and collaborations on mobile or automation projects.",
    footer: '— Built with React',
  },
}

function useLang() {
  const [lang, setLang] = useState('fr')
  return [lang, setLang]
}

export default function App() {
  const [lang, setLang] = useLang()
  const t = content[lang]

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a className="logo" href="#top">A<span>.</span>Benbaghdad</a>
          <ul className="nav-links">
            <li><a href="#about">01. {t.nav.about}</a></li>
            <li><a href="#projects">02. {t.nav.projects}</a></li>
            <li><a href="#skills">03. {t.nav.skills}</a></li>
            <li><a href="#contact">04. {t.nav.contact}</a></li>
          </ul>
          <div className="lang-toggle">
            <button className={lang === 'fr' ? 'active' : ''} onClick={() => setLang('fr')}>FR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
        </div>
      </nav>

      <main id="top">
        <section className="hero" style={{ borderTop: 'none' }}>
          <div className="container">
            <div className="hero-top">
              <div className="avatar">
                <img src="/assets/profile.jpeg" alt="Benbaghdad Abdelhak Ibrahim" />
              </div>
              <div className="hero-eyebrow">{t.eyebrow}</div>
            </div>
            <h1>{t.heroTitle}</h1>
            <p className="lead">{t.heroLead}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">{t.ctaProjects}</a>
              <a className="btn btn-ghost" href="#contact">{t.ctaContact}</a>
            </div>

            <div className="flow">
              <div className="flow-label">{t.flowLabel}</div>
              <div className="flow-nodes">
                <div className="flow-node active">Webhook</div>
                <div className="flow-connector" />
                <div className="flow-node">AI Agent</div>
                <div className="flow-connector" />
                <div className="flow-node">Memory + Tools</div>
                <div className="flow-connector" />
                <div className="flow-node active">Respond</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <div className="container">
            <div className="section-head">
              <span className="section-num">01</span>
              <span className="section-title">{t.sectionAbout}</span>
              <span className="section-line" />
            </div>
            <div className="about-grid">
              <div className="about-text">
                <p>{t.aboutP1}</p>
                <p>{t.aboutP2}</p>
                <p>{t.aboutP3}</p>
              </div>
              <div>
                <div className="stack-list">
                  {t.stack.map(([k, v]) => (
                    <div className="stack-item" key={k}><span>{k}</span><span>{v}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <div className="section-head">
              <span className="section-num">02</span>
              <span className="section-title">{t.sectionProjects}</span>
              <span className="section-line" />
            </div>
            <div className="projects-grid">
              {t.projects.map((p) => (
                <div className="project-card" key={p.title}>
                  <div className="project-img-wrap">
                    <img src={p.img} alt={p.title} />
                  </div>
                  <div className="project-body">
                    <div className="project-tag">{p.tag}</div>
                    <div className="project-title">{p.title}</div>
                    <p className="project-desc">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <div className="section-head">
              <span className="section-num">03</span>
              <span className="section-title">{t.sectionSkills}</span>
              <span className="section-line" />
            </div>
            <div className="skills-grid">
              {t.skillGroups.map((g) => (
                <div className="skill-card" key={g.title}>
                  <h4>{g.title}</h4>
                  <div className="pill-row">
                    {g.items.map((i) => <span className="pill" key={i}>{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact-inner">
            <div className="section-head" style={{ justifyContent: 'center' }}>
              <span className="section-num">04</span>
            </div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactLead}</p>
            <div className="contact-links">
              <a className="btn btn-primary" href="mailto:benbaghdadabdelhakibrahim@gmail.com">Email</a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/in/abdelhak-ibrahim-benbaghdad-199069323/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn btn-ghost" href="https://github.com/Hakoesi16" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>Benbaghdad Abdelhak Ibrahim {t.footer}</span>
          <span>Sidi Bel Abbès, Algérie</span>
        </div>
      </footer>
    </>
  )
}
