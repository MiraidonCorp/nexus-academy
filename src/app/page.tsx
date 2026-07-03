import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import homeContent from '@/lib/content/home.json';
import programmes from '@/lib/content/programmes.json';
import siteContent from '@/lib/content/site.json';
import TrialForm from '@/components/TrialForm';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'NEXUS Institute of STEM & Robotics | Kids Robotics & Coding Classes',
  description: 'Hands-on robotics, coding and AI for kids aged 6–16. Six tracks, competition-trained coaches. In-person and online. Book a free trial today.',
  alternates: { canonical: '/' },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: siteContent.siteName,
  description: siteContent.description,
  url: 'https://nexusrobotics.com.au',
  logo: 'https://nexusrobotics.com.au/images/nexus-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteContent.contact.phone,
    email: siteContent.contact.email,
    contactType: 'customer service',
  },
  sameAs: [],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What age groups do NEXUS Robotics classes cater for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NEXUS Robotics offers six tracks for children aged 6–16. LEGO Spike Prime starts at age 6, while advanced tracks like AI for Kids and Custom Robot Build go up to age 16.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free trial available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your child can attend one full class for free with no payment or commitment required.',
      },
    },
  ],
};

export default function HomePage() {
  const { hero, whyUs, events, trialForm } = homeContent;
  const featuredProgrammes = programmes.programmes.slice(0, 6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="hero-heading">
        <div className={styles.heroGlow1} aria-hidden="true" />
        <div className={styles.heroGlow2} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.heroEyebrow}>{hero.eyebrow}</p>
            <h1 id="hero-heading" className={styles.heroHeading}>
              {hero.heading.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h1>
            <p className={styles.heroBody}>{hero.body}</p>
            <div className={styles.heroCtas}>
              <Link href={hero.primaryCta.href} className={styles.ctaAmber}>
                {hero.primaryCta.label}
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href={hero.secondaryCta.href} className={styles.ctaGhost}>
                {hero.secondaryCta.label}
              </Link>
            </div>
            <div className={styles.stats} role="list">
              {siteContent.stats.map((stat) => (
                <div key={stat.label} role="listitem" className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mini programme grid */}
          <div className={styles.miniGrid} aria-label="Programme overview">
            {featuredProgrammes.map((prog) => (
              <div
                key={prog.id}
                className={styles.miniCard}
                style={{ borderTopColor: prog.accentColor }}
              >
                <span className={styles.miniIcon} aria-hidden="true">{prog.heroIcon}</span>
                <span className={styles.miniName}>{prog.name}</span>
                <span className={styles.miniAge}>{prog.ageRange}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH BADGES */}
      <section className={styles.techBar} aria-label="Technologies we teach">
        <div className={styles.techInner}>
          <span className={styles.techLabel}>What we cover</span>
          <div className={styles.techDivider} aria-hidden="true" />
          {['FIRST LEGO League', 'BBC micro:bit', 'Python', 'HTML & CSS', 'Raspberry Pi', 'LEGO Spike Prime'].map((tech) => (
            <div key={tech} className={styles.techBadge}>
              <span className={styles.techBadgeName}>{tech}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMME CARDS */}
      <section className={styles.programmes} aria-labelledby="programmes-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Six tracks for every age</p>
            <h2 id="programmes-heading" className={styles.sectionHeading}>Choose your programme</h2>
            <p className={styles.sectionBody}>
              From a first-ever robot build to competing in FIRST LEGO League — there&apos;s a track for every level.
            </p>
          </div>
          <div className={styles.programmeGrid}>
            {featuredProgrammes.map((prog) => (
              <article
                key={prog.id}
                className={styles.card}
                style={{ borderTopColor: prog.accentColor }}
              >
                <div
                  className={styles.cardHeader}
                  style={{ background: prog.headerBg }}
                  aria-hidden="true"
                >
                  <div
                    className={styles.cardGlow}
                    style={{ background: `radial-gradient(circle at center,${prog.glowColor} 0%,transparent 65%)` }}
                  />
                  <span className={styles.cardIcon}>{prog.heroIcon}</span>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardBadges}>
                    <span
                      className={styles.pillarBadge}
                      style={{ color: prog.pillarColor, background: prog.pillarBg }}
                    >
                      {prog.pillar}
                    </span>
                    <span className={styles.tagBadge}>{prog.format}</span>
                    <span className={styles.tagBadge}>{prog.duration}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{prog.name}</h3>
                  <p className={styles.cardSub} style={{ color: prog.pillarColor }}>
                    {prog.subtitle} · {prog.ageRange}
                  </p>
                  <p className={styles.cardDesc}>{prog.description}</p>
                  <ul className={styles.cardSkills} role="list">
                    {prog.skills.slice(0, 3).map((skill) => (
                      <li key={skill} className={styles.cardSkill}>
                        <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none" style={{ color: prog.pillarColor, flexShrink: 0 }}>
                          <path d="M1.5 5.5l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <Link href="/programmes" className={styles.cardCta}>
                    Enroll now
                    <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5h8M7 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className={styles.programmesCta}>
            <Link href="/programmes" className={styles.viewAll}>
              View all programmes &amp; pricing
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={styles.whyUs} aria-labelledby="why-us-heading">
        <div className={styles.sectionInner}>
          <div className={styles.whyUsIntro}>
            <p className={styles.eyebrow}>{whyUs.eyebrow}</p>
            <h2 id="why-us-heading" className={styles.sectionHeading}>
              {whyUs.heading.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
          </div>
          <div className={styles.whyGrid}>
            {whyUs.reasons.map((reason) => (
              <div
                key={reason.heading}
                className={styles.whyCard}
                style={{ borderTopColor: reason.accentColor }}
              >
                <div className={styles.whyIcon} style={{ background: reason.iconBg }} aria-hidden="true">
                  <span style={{ fontSize: 20 }}>{reason.heading === 'Small class sizes' ? '👥' : reason.heading === 'Competition pedigree' ? '🏆' : '🏗️'}</span>
                </div>
                <h3 className={styles.whyHeading}>{reason.heading}</h3>
                <p className={styles.whyBody}>{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className={styles.events} aria-labelledby="events-heading">
        <div className={styles.sectionInner}>
          <div className={styles.eventsHeader}>
            <div>
              <p className={styles.eyebrow}>{events.eyebrow}</p>
              <h2 id="events-heading" className={styles.sectionHeading}>{events.heading}</h2>
            </div>
            <Link href="/contact" className={styles.eventsAll}>
              View all events
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className={styles.eventsGrid}>
            {events.items.map((event) => (
              <article key={event.title} className={styles.eventCard}>
                <div className={styles.eventAccent} style={{ background: event.accentColor }} />
                <div className={styles.eventBody}>
                  <div className={styles.eventMeta}>
                    <span
                      className={styles.eventType}
                      style={{ color: event.typeColor, background: event.typeBg }}
                    >
                      {event.type}
                    </span>
                    <span className={styles.eventPrice}>{event.price}</span>
                  </div>
                  <h3 className={styles.eventTitle}>{event.title}</h3>
                  <ul className={styles.eventDetails} role="list">
                    <li>📅 {event.date}</li>
                    <li>📍 {event.location}</li>
                    <li>👥 {event.ages}</li>
                  </ul>
                  <Link href="/contact" className={styles.eventCta}>
                    Register
                    <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5h7M6 2.5l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAL FORM */}
      <section className={styles.trialSection} aria-labelledby="trial-heading">
        <div className={styles.trialInner}>
          <div className={styles.trialHeader}>
            <p className={styles.eyebrowLight}>{trialForm.eyebrow}</p>
            <h2 id="trial-heading" className={styles.trialHeading}>{trialForm.heading}</h2>
            <p className={styles.trialBody}>{trialForm.body}</p>
          </div>
          <TrialForm />
        </div>
      </section>
    </>
  );
}
