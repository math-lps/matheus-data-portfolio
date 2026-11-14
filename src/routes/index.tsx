import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowRight,
  BarChart3,
  Database,
  GraduationCap,
  Award,
  FileSpreadsheet,
  Menu,
  PieChart,
  Sigma,
  Table2,
  UserRound,
  Workflow,
  X,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Github, Linkedin } from '@/components/brand-icons'
import {
  about,
  heroTechnologies,
  profile,
  projects,
  skills,
} from '@/content/portfolio'

export const Route = createFileRoute('/')({
  component: Home,
})

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'education', label: 'Formação & Cursos' },
  { id: 'projects', label: 'Projetos' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'contact', label: 'Contato' },
]

const skillIcons: Record<string, typeof Database> = {
  SQL: Table2,
  MySQL: Database,
  'Power BI': BarChart3,
  Excel: FileSpreadsheet,
  'Visualização de Dados': PieChart,
  DAX: Sigma,
  'ETL e tratamento de dados': Workflow,
}

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HomeSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-content px-6 flex flex-col sm:flex-row gap-2 justify-between text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos
            reservados.
          </p>
          <a href="#home" className="hover:text-primary transition-colors">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </div>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <nav className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-extrabold text-lg tracking-tight">
          {profile.name.split(' ')[0]}
          <span className="text-primary">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <ul className="md:hidden border-t border-border px-6 py-4 space-y-1 bg-background">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block py-2 font-medium text-muted-foreground hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="mb-12">
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 h-1 w-14 rounded-full bg-primary" />
    </div>
  )
}

function HomeSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-content px-6 pt-16 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.2em] mb-5">
            Olá, eu sou
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] md:whitespace-nowrap">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl sm:text-2xl font-semibold text-foreground/85">
            {profile.title}
          </p>
          <div className="mt-6 mx-auto md:mx-0 h-1 w-14 rounded-full bg-primary" />
          <p className="mt-6 mx-auto md:mx-0 max-w-reading text-base sm:text-lg leading-relaxed text-muted-foreground">
            {profile.intro}
          </p>
          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
            <Button asChild size="lg" className="font-semibold">
              <a href="#projects">
                Ver projetos <ArrowRight />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-semibold bg-transparent border-foreground/30 hover:bg-foreground/5 hover:text-foreground"
            >
              <a href="#contact">Entre em contato</a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="rounded-full p-2 ring-1 ring-border bg-background">
            {profile.photo ? (
              <img
                src={profile.photo}
                alt={`Foto de ${profile.name}`}
                width={380}
                height={380}
                className="block size-56 sm:size-64 md:size-72 lg:size-[380px] rounded-full object-cover object-center border-4 border-primary"
              />
            ) : (
              <div
                className="size-56 sm:size-64 md:size-72 lg:size-[380px] rounded-full border-4 border-dashed border-primary/50 bg-secondary/40 grid place-items-center text-muted-foreground"
                role="img"
                aria-label="Espaço reservado para foto profissional"
              >
                <UserRound className="size-16" />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="relative border-t border-border bg-background/80">
        <ul
          aria-label="Tecnologias"
          className="mx-auto max-w-content px-6 py-5 grid grid-cols-3 sm:grid-cols-6 gap-y-3 text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          {heroTechnologies.map((t) => (
            <li
              key={t}
              className="sm:border-l sm:border-border sm:first:border-l-0"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 border-b border-border">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Sobre mim" title="Trajetória profissional" />
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-card p-6 sm:p-8 lg:mt-1.5">
            <h3 className="text-xl font-bold mb-5">Competências técnicas</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {about.technical.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const educationItems = [
  {
    category: 'Formação acadêmica',
    icon: GraduationCap,
    entries: [
      { title: 'Ciência de Dados', institution: 'Universidade Estácio de Sá', period: '2025–2027', status: 'Em andamento' },
      { title: 'Ciências Biológicas', institution: 'Centro Universitário UNA', period: '2014–2018', status: 'Concluído' },
      { title: 'Técnico em Transportes e Trânsito', institution: 'CEFET-MG', period: '2009–2010', status: 'Concluído' },
    ],
  },
  {
    category: 'Cursos e certificações',
    icon: Award,
    entries: [
      { title: 'Banco de Dados MySQL', institution: 'Curso em Vídeo · 40 horas', period: '2025', status: 'Concluído' },
      { title: 'Microsoft Power BI para Business Intelligence e Data Science', institution: 'Data Science Academy', period: '2024', status: 'Concluído' },
      { title: 'Formação Power BI', institution: 'Alura', period: '2024', status: 'Concluído' },
    ],
  },
]

function EducationSection() {
  return (
    <section id="education" className="py-24 border-b border-border">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Aprendizado contínuo" title="Formação & Cursos" />
        <div className="grid lg:grid-cols-2 gap-8">
          {educationItems.map(({ category, icon: Icon, entries }) => (
            <div key={category} className="rounded-xl border border-border bg-card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-7">
                <span className="grid size-11 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Icon className="size-5" />
                </span>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              <ol className="relative ml-2 border-l border-border pl-6 space-y-8">
                {entries.map((entry) => (
                  <li key={entry.title} className="relative">
                    <span className="absolute -left-[31px] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">{entry.status}</span>
                      <span className="text-xs text-muted-foreground">· {entry.period}</span>
                    </div>
                    <h4 className="font-bold leading-snug">{entry.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{entry.institution}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="py-24 border-b border-border">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos práticos em Análise de Dados e BI"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-primary/60 transition-colors"
            >
              <img
                src={p.image}
                alt={`Prévia do projeto ${p.title}`}
                width={800}
                height={450}
                loading="lazy"
                className="aspect-video w-full object-cover border-b border-border"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Tecnologias utilizadas"
                >
                  {p.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 pt-5 border-t border-border inline-flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
                >
                  <Github className="size-4" /> Ver no GitHub
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-b border-border">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading
          eyebrow="Habilidades"
          title="Principais ferramentas e competências"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, i) => {
            const Icon = skillIcons[s.name] ?? BarChart3
            const centerOnLarge =
              i === skills.length - 1 && skills.length % 3 === 1
            return (
              <div
                key={s.name}
                className={`rounded-xl border border-border bg-card p-6${centerOnLarge ? ' lg:col-start-2' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold">{s.name}</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {s.summary}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const links = [
    {
      label: 'LinkedIn',
      value: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.linkedin,
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: profile.github.replace(/^https?:\/\/(www\.)?/, ''),
      href: profile.github,
      icon: Github,
    },
  ]
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-content px-6">
        <SectionHeading eyebrow="Contato" title="Vamos conversar" />
        <p className="max-w-reading text-lg text-muted-foreground leading-relaxed mb-10">
          Estou em busca de uma oportunidade na área de dados. Entre em contato
          pelo LinkedIn ou conheça meus projetos no GitHub.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-6 hover:border-primary transition-colors"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold group-hover:text-primary transition-colors">
                  {label}
                </span>
                <span className="block truncate text-sm text-muted-foreground">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
