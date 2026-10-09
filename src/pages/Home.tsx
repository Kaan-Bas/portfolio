import { ArrowDown, ArrowRight, Braces, Database, GraduationCap, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  about,
  education,
  experience,
  interests,
  pillars,
  profile,
  skillGroups,
} from '../data/portfolio'
import { IntersectionGraphic } from '../components/Diagrams'
import { FeaturedProject, SelectedProjects } from '../components/ProjectCards'
import { Contact } from '../components/Layout'
import { ExternalLink, SectionHeading } from '../components/ui'

const pillarIcons = [Sparkles, Braces, Database]

export default function Home() {
  return (
    <main id="main-content" className="home-page" tabIndex={-1}>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            Open voor een startende engineeringfunctie
          </p>
          <h1 id="hero-title">
            {profile.name}
            <span className="accent">.</span>
          </h1>
          <h2>
            {profile.headline.firstLine}
            <br />
            {profile.headline.secondLine}
            <span className="accent">{profile.headline.emphasis}</span>
          </h2>
          <p className="hero-introduction">{profile.introduction}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#work">
              Bekijk mijn projecten
              <ArrowDown size={17} aria-hidden="true" />
            </Link>
            <ExternalLink className="text-link" href={profile.linkedin}>
              LinkedIn
            </ExternalLink>
          </div>
          <div className="hero-education">
            <GraduationCap size={19} aria-hidden="true" />
            <span>
              {education.degree}
              <small>{education.institution} · 2026</small>
            </span>
          </div>
        </div>
        <IntersectionGraphic />
      </section>

      <section className="pillars-section container" aria-labelledby="pillars-title">
        <div className="pillar-intro">
          <h2 id="pillars-title">
            Drie vakgebieden.
            <br className="mobile-only" /> Eén praktische aanpak.
          </h2>
          <p>
            Data om te begrijpen. AI om te interpreteren.
            <br />
            Software om het bruikbaar te maken.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <article className="pillar" key={pillar.id}>
                <div className="pillar-top">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <p className="pillar-skills">{pillar.skills.join(' · ')}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="work-section home-section" id="work" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="Mijn werk"
            title="Projecten"
            description="Toegepaste AI, software en data: projecten met een concreet doel."
          />
          <FeaturedProject />
          <div className="selected-heading">
            <h3>Meer projecten</h3>
          </div>
          <SelectedProjects />
        </div>
      </section>

      <section className="about-section home-section" id="about" tabIndex={-1}>
        <div className="container">
          <SectionHeading number="02" eyebrow="Mijn aanpak" title="Over mij" />
          <div className="about-grid">
            <div>
              <h3 className="about-focus">
                Nieuwsgierig naar het proces.
                <br />
                Gericht op de oplossing<span className="accent">.</span>
              </h3>
            </div>
            <div className="about-copy">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <div className="interests">
                <h3>Mijn huidige interesses</h3>
                <p>{interests.join(' · ')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section home-section" id="experience" tabIndex={-1}>
        <div className="container">
          <SectionHeading number="03" eyebrow="Mijn achtergrond" title="Ervaring & opleiding" />
          <div className="background-grid">
            <div>
              <h3 className="column-heading">Werkervaring</h3>
              <div className="timeline">
                {experience.map((item) => (
                  <article className="timeline-item" key={item.company}>
                    <div className="timeline-header">
                      <h4>{item.company}</h4>
                      <span>{item.date}</span>
                    </div>
                    <p className="timeline-role">
                      {item.role}
                      <span>{item.type}</span>
                    </p>
                    <p className="timeline-description">{item.description}</p>
                    {item.company === 'Siemens' && (
                      <Link
                        className="text-link small-link"
                        to="/projects/siemens-ai-quotation-automation"
                      >
                        Bekijk het afstudeerproject
                        <ArrowRight size={15} aria-hidden="true" />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
            <div className="education-column">
              <h3 className="column-heading">Opleiding</h3>
              <article className="education-card">
                <GraduationCap size={25} aria-hidden="true" />
                <p className="education-institution">{education.institution}</p>
                <h4>{education.degree}</h4>
                <p className="education-period">
                  {education.period}
                  <span>Afgestudeerd</span>
                </p>
                <div className="minor">
                  <span className="eyebrow">Minor</span>
                  <h4>{education.minor}</h4>
                  <p>{education.minorPeriod}</p>
                </div>
                <p className="education-note">
                  Software Engineering als basis.
                  <br />
                  AI Engineering als verdere verdieping.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section home-section" id="skills" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="Waar ik mee werk"
            title="Vaardigheden"
            description="Een basis in verschillende technische vakgebieden, met een groeiende focus op toegepaste AI."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  )
}
