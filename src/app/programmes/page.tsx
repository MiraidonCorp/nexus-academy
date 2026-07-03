import type { Metadata } from 'next';
import ProgrammesClient from './ProgrammesClient';
import programmesContent from '@/lib/content/programmes.json';
import TrackedLink from '@/components/TrackedLink';
import styles from './programmes.module.css';

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'Six robotics and coding tracks for kids aged 6–16. LEGO Spike Prime, FLL Competition, Micro:bit, HTML, AI for Kids, and Custom Robot Build. In-person & online.',
  alternates: { canonical: '/programmes' },
};

const courseListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'NEXUS Robotics Programmes',
  itemListElement: programmesContent.programmes.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Course',
      name: p.name,
      description: p.description,
      provider: { '@type': 'Organization', name: 'NEXUS Institute of STEM & Robotics' },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', suggestedMinAge: p.ageMin, suggestedMaxAge: p.ageMax },
    },
  })),
};

export default function ProgrammesPage() {
  const { pricing, faqs } = programmesContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="programmes-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div>
            <p className={styles.eyebrow}>All programmes</p>
            <h1 id="programmes-heading" className={styles.heroHeading}>Six tracks. Your pace.</h1>
            <p className={styles.heroBody}>
              Filter by your child&apos;s age and preferred format below. Every track can be taken independently — or as part of a progression toward the competition team.
            </p>
          </div>
          <TrackedLink href="/contact" className={styles.heroCta} label="Book a free trial" location="programmes-hero">
            Book a free trial
            <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </TrackedLink>
        </div>
      </section>

      {/* FILTERABLE PROGRAMME LIST */}
      <ProgrammesClient />

      {/* LEARNING PATHWAY */}
      <section className={styles.pathway} aria-labelledby="pathway-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>Suggested progression</p>
            <h2 id="pathway-heading" className={styles.heading}>One pathway. Flexible entry.</h2>
            <p className={styles.sectionBody}>
              Tracks can be taken independently based on interest — this pathway shows how they build on each other.
            </p>
          </div>
          <div className={styles.pathwaySteps} role="list">
            {[
              { emoji: '⚙️', level: 'Beginner', name: 'Spike Prime', ages: 'Ages 6–10', bg: '#E8F5F1', color: '#0F6E56' },
              { emoji: '💡', level: 'Intermediate', name: 'Micro:bit / HTML / AI', ages: 'Ages 10–15', bg: '#EEEDFA', color: '#534AB7' },
              { emoji: '🤖', level: 'Advanced', name: 'Custom Robot Build', ages: 'Ages 12–16', bg: '#FEF5E7', color: '#B87212' },
              { emoji: '🏆', level: 'Competition', name: 'FLL Track', ages: 'Ages 9–16', bg: '#0C2A20', color: '#EF9F27', dark: true },
            ].map((step, i, arr) => (
              <div key={step.name} className={styles.pathwayWrapper} role="listitem">
                <div className={styles.pathwayStep} style={{ background: step.bg }}>
                  <span className={styles.pathwayEmoji}>{step.emoji}</span>
                  <span className={styles.pathwayLevel} style={{ color: step.color }}>{step.level}</span>
                  <span className={styles.pathwayName} style={{ color: step.dark ? '#fff' : undefined }}>{step.name}</span>
                  <span className={styles.pathwayAges} style={{ color: step.dark ? 'rgba(255,255,255,0.5)' : undefined }}>{step.ages}</span>
                </div>
                {i < arr.length - 1 && <span className={styles.pathwayArrow} aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className={styles.pricingSection} aria-labelledby="pricing-heading">
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>Pricing</p>
            <h2 id="pricing-heading" className={styles.heading}>Subscription or course-based</h2>
            <p className={styles.sectionBody}>
              Choose the model that suits your family. Exact pricing confirmed on enrolment — all amounts below are indicative.
            </p>
          </div>
          <div className={styles.pricingGrid}>
            {/* Subscriptions */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingCardHeader} style={{ background: '#0C2A20' }}>
                <p className={styles.pricingCardEyebrow}>Monthly subscription</p>
                <p className={styles.pricingCardSubtitle}>Recurring · cancel anytime</p>
              </div>
              {pricing.subscriptions.map((sub) => (
                <div key={sub.name} className={styles.pricingRow}>
                  <div className={styles.pricingRowLeft}>
                    <div className={styles.pricingRowName}>
                      {sub.name}
                      {sub.badge && <span className={styles.popularBadge}>{sub.badge}</span>}
                    </div>
                    <div className={styles.pricingRowFreq}>{sub.frequency}</div>
                    <div className={styles.pricingRowDesc}>{sub.description}</div>
                  </div>
                  <div className={styles.pricingRowPrice}>{sub.price}</div>
                </div>
              ))}
            </div>

            {/* Course fees */}
            <div className={styles.pricingCard}>
              <div className={styles.pricingCardHeader} style={{ background: '#091F17' }}>
                <p className={styles.pricingCardEyebrow}>Course-based fees</p>
                <p className={styles.pricingCardSubtitle}>One-time · fixed duration</p>
              </div>
              {pricing.courses.map((course) => (
                <div key={course.name} className={styles.courseFeeRow}>
                  <div>
                    <div className={styles.courseFeeName}>{course.name}</div>
                    <div className={styles.courseFeeDetail}>{course.detail}</div>
                  </div>
                  <div className={styles.courseFeePrice}>{course.price}</div>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.pricingNote}>
            Sibling discount available. Annual subscription discounted vs monthly. FLL competition registration billed separately.{' '}
            <TrackedLink href="/contact" className={styles.pricingLink} label="Contact us" location="programmes-pricing">Contact us</TrackedLink> for exact pricing.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={styles.faqInner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrowGreen}>FAQ</p>
            <h2 id="faq-heading" className={styles.heading}>Common questions</h2>
          </div>
          <FaqList faqs={faqs} />
          <div className={styles.faqCta}>
            <TrackedLink href="/contact" className={styles.faqCtaLink} label="Talk to an advisor" location="programmes-faq">
              Talk to an advisor
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}

function FaqList({ faqs }: { faqs: typeof programmesContent.faqs }) {
  return (
    <dl className={styles.faqList}>
      {faqs.map((faq) => (
        <div key={faq.question} className={styles.faqItem}>
          <dt className={styles.faqQ}>{faq.question}</dt>
          <dd className={styles.faqA}>{faq.answer}</dd>
        </div>
      ))}
    </dl>
  );
}
