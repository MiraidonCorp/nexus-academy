import type { Metadata } from 'next';
import Image from 'next/image';
import aboutContent from '@/lib/content/about.json';
import TrackedLink from '@/components/TrackedLink';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about NEXUS Institute of STEM & Robotics — our story, mission, teaching philosophy, team of FLL coaches, and competition history.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const { hero, story, mission, vision, philosophy, team, timeline } = aboutContent;

  const personSchema = team.members.map((m) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: m.name,
    jobTitle: m.role,
    worksFor: { '@type': 'Organization', name: 'NEXUS Institute of STEM & Robotics' },
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="about-heading" className={styles.heroHeading}>
            {hero.heading.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
          </h1>
          <p className={styles.heroBody}>{hero.body}</p>
        </div>
      </section>

      {/* STORY + MISSION */}
      <section className={styles.story} aria-labelledby="story-heading">
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <p className={styles.eyebrowGreen}>{story.eyebrow}</p>
            <h2 id="story-heading" className={styles.heading}>{story.heading}</h2>
            {story.paragraphs.map((p, i) => (
              <p key={i} className={styles.storyPara}>{p}</p>
            ))}
          </div>
          <div className={styles.storyRight}>
            <div className={styles.missionCard}>
              <p className={styles.cardEyebrow}>Mission</p>
              <p className={styles.cardText}>{mission.text}</p>
            </div>
            <div className={styles.visionCard}>
              <p className={styles.cardEyebrowLight}>Vision</p>
              <p className={styles.cardTextLight}>{vision.text}</p>
            </div>
            <div className={styles.statsRow} role="list">
              {[
                { value: '4+', label: 'Years active' },
                { value: '500+', label: 'Students' },
                { value: '12', label: 'FLL awards' },
              ].map((s) => (
                <div key={s.label} role="listitem" className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING PHILOSOPHY */}
      <section className={styles.philosophy} aria-labelledby="philosophy-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>{philosophy.eyebrow}</p>
            <h2 id="philosophy-heading" className={styles.heading}>{philosophy.heading}</h2>
          </div>
          <div className={styles.pillarsGrid}>
            {philosophy.pillars.map((pillar) => (
              <div
                key={pillar.heading}
                className={styles.pillarCard}
                style={{ borderTopColor: pillar.accentColor }}
              >
                <div className={styles.pillarIcon} style={{ background: pillar.iconBg }} aria-hidden="true">
                  <span style={{ fontSize: 17, color: pillar.accentColor }}>
                    {pillar.heading === 'Hands-on first' ? '🤲' : pillar.heading === 'Fail fast' ? '⚡' : pillar.heading === 'Ask why' ? '🔍' : '👥'}
                  </span>
                </div>
                <h3 className={styles.pillarHeading}>{pillar.heading}</h3>
                <p className={styles.pillarBody}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className={styles.team} aria-labelledby="team-heading">
        <div className={styles.sectionInner}>
          <div className={styles.teamIntro}>
            <p className={styles.eyebrowGreen}>{team.eyebrow}</p>
            <h2 id="team-heading" className={styles.heading}>{team.heading}</h2>
            <p className={styles.teamBody}>{team.body}</p>
          </div>
          <div className={styles.teamGrid}>
            {team.members.map((member) => (
              <article key={member.name} className={styles.memberCard}>
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  width={300}
                  height={200}
                  className={styles.memberPhoto}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole} style={{ color: member.roleColor }}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className={styles.timeline} aria-labelledby="timeline-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>{timeline.eyebrow}</p>
            <h2 id="timeline-heading" className={styles.heading}>{timeline.heading}</h2>
          </div>
          <div className={styles.timelineTrack} aria-label="Competition history">
            {timeline.events.map((event, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDot} style={{ background: event.color, boxShadow: `0 0 0 2px ${event.color}` }} aria-hidden="true" />
                <div className={styles.timelineContent}>
                  <p className={styles.timelineYear}>{event.year}</p>
                  <h3 className={styles.timelineTitle}>{event.title}</h3>
                  <p className={styles.timelineBody}>{event.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta} aria-labelledby="cta-heading">
        <div className={styles.ctaInner}>
          <p className={styles.eyebrowLight}>Come and see</p>
          <h2 id="cta-heading" className={styles.ctaHeading}>Schedule a tour or free trial</h2>
          <p className={styles.ctaBody}>
            See our facilities, meet the coaches, and watch a class in action. No commitment required — just curiosity.
          </p>
          <div className={styles.ctaButtons}>
            <TrackedLink href="/contact" className={styles.ctaAmber} label="Book a free trial" location="about-cta">
              Book a free trial
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </TrackedLink>
            <TrackedLink href="/contact" className={styles.ctaGhost} label="Schedule a tour" location="about-cta">
              Schedule a tour
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
