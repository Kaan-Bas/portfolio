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
import { ExternalLink, SectionHeading, Tags } from '../components/ui'

const pillarIcons = [Sparkles, Braces, Database]

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" />
            Open to early-career opportunities
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
              View my work
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
          <p className="eyebrow">A connected technical profile</p>
          <h2 id="pillars-title">
            Three disciplines.
            <br className="mobile-only" /> One practical approach.
          </h2>
          <p>
            Use data to understand. Use AI to interpret.
            <br />
            Use software to make it work.
          </p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <article className="pillar" key={pillar.id}>
                <div className="pillar-top">
                  <Icon size={23} aria-hidden="true" />
                  <span>{pillar.number}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <Tags items={pillar.skills} />
              </article>
            )
          })}
        </div>
        <div className="pillars-connection" aria-hidden="true">
          <span />
          <p>
            Connected in the work below
            <ArrowDown size={14} />
          </p>
          <span />
        </div>
      </section>

      <section className="work-section container section" id="work" tabIndex={-1}>
        <SectionHeading
          number="01"
          eyebrow="Selected work"
          title="Practical problems. Built solutions."
          description="Applied AI, software and data — explored through projects with a clear purpose."
        />
        <FeaturedProject />
        <div className="selected-heading">
          <h3>More perspectives on the same foundation</h3>
          <span>AI + DATA / MACHINE LEARNING</span>
        </div>
        <SelectedProjects />
      </section>

      <section className="about-section section" id="about" tabIndex={-1}>
        <div className="container about-grid">
          <div>
            <p className="eyebrow">
              <span>02</span>About me
            </p>
            <h2>
              Curious about the process.
              <br />
              Focused on the solution<span className="accent">.</span>
            </h2>
            <div className="about-aside">
              <span className="about-monogram" aria-hidden="true">
                KB<span>+</span>
              </span>
              <p>
                A software foundation.
                <br />
                An applied AI focus.
                <br />
                Room to keep learning.
              </p>
            </div>
          </div>
          <div className="about-copy">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="interests">
              <p className="eyebrow">Currently interested in</p>
              <Tags items={interests} />
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section container section" id="experience" tabIndex={-1}>
        <SectionHeading
          number="03"
          eyebrow="Experience & education"
          title="A foundation built through practice."
        />
        <div className="background-grid">
          <div>
            <h3 className="column-heading">Professional experience</h3>
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
                      Explore the graduation project
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
          <div className="education-column">
            <h3 className="column-heading">Education</h3>
            <article className="education-card">
              <GraduationCap size={25} aria-hidden="true" />
              <p className="education-institution">{education.institution}</p>
              <h4>{education.degree}</h4>
              <p className="education-period">
                {education.period}
                <span>Graduated</span>
              </p>
              <div className="minor">
                <span className="eyebrow">Minor</span>
                <h4>{education.minor}</h4>
                <p>{education.minorPeriod}</p>
              </div>
              <p className="education-note">
                Software Engineering as the foundation.
                <br />
                AI Engineering as a further focus.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="skills-section section" id="skills" tabIndex={-1}>
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="Technical toolkit"
            title="Tools I work with."
            description="A foundation across engineering disciplines, with a growing focus on applied AI."
          />
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-group" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
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
