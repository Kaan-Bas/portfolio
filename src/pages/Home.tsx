import { ArrowDown, ArrowRight, Braces, Database, GraduationCap, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  about,
  education,
  experience,
  focusUrl,
  interests,
  pillars,
  profile,
  skillGroups,
  projects,
  projectUrl,
} from '../data/portfolio'
import { FocusFilters, FocusNavigator } from '../components/FocusNavigation'
import { FeaturedProject, SelectedProjects, SoftwareExperience } from '../components/ProjectCards'
import { Contact } from '../components/Layout'
import { ExternalLink, SectionHeading } from '../components/ui'
import { useFocus } from '../hooks/useFocus'

const pillarIcons = [Sparkles, Braces, Database]

export default function Home() {
  const { focus, selectedArea } = useFocus()
  const visibleProjects = projects.filter(
    (project) => focus === 'all' || project.focusAreas.includes(focus),
  )
  if (focus === 'data')
    visibleProjects.sort((a, b) => Number(b.visual === 'water') - Number(a.visual === 'water'))
  const visibleSkills = skillGroups.filter(
    (group) =>
      focus === 'all' || group.area === focus || (focus === 'ai' && group.area === 'automation'),
  )
  const showFeatured = focus === 'all' || focus === 'ai'
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
          <h2 className="hero-headline">{selectedArea?.title ?? profile.headline}</h2>
          <p className="hero-introduction">{selectedArea?.introduction ?? profile.introduction}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to={focusUrl(focus)}>
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
        <FocusNavigator focus={focus} />
      </section>

      <section className="pillars-section container" aria-labelledby="pillars-title">
        <div className="pillar-intro">
          <h2 id="pillars-title">Mijn technische achtergrond</h2>
          <p>Per vakgebied: relevante ervaring en de technieken waarmee ik werk.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index]
            return (
              <article className="pillar" data-area={pillar.id} key={pillar.id}>
                <div className="pillar-top">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <p className="pillar-skills">{pillar.skills.join(' · ')}</p>
                <Link className="pillar-link" to={focusUrl(pillar.id)}>
                  {pillar.linkLabel}
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
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
            title={focus === 'software' ? 'Praktijkervaring' : 'Projecten'}
            description={
              selectedArea?.workDescription ??
              'Bekijk het werk dat relevant is voor jouw vakgebied.'
            }
          />
          <FocusFilters focus={focus} />
          <p className="focus-status" role="status">
            {selectedArea ? `Nu zichtbaar: ${selectedArea.title}` : 'Alle projecten'}
          </p>
          {showFeatured && <FeaturedProject />}
          {showFeatured && (
            <div className="selected-heading">
              <h3>{focus === 'ai' ? 'Meer AI-projecten' : 'Meer projecten'}</h3>
            </div>
          )}
          {focus === 'software' ? (
            <SoftwareExperience />
          ) : (
            <SelectedProjects items={visibleProjects} />
          )}
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
                        to={projectUrl('siemens-ai-quotation-automation', focus)}
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
            description={
              selectedArea
                ? `Technieken en werkwijzen voor ${selectedArea.title}.`
                : 'Geordend per vakgebied, zodat je snel de relevante vaardigheden vindt.'
            }
          />
          <FocusFilters focus={focus} section="skills" />
          <div className={`skills-grid${focus === 'all' ? '' : ' is-focused'}`}>
            {visibleSkills.map((group) => (
              <article className="skill-group" data-area={group.area} key={group.title}>
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
