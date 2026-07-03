import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from './ContactForm';
import contactContent from '@/lib/content/contact.json';
import siteContent from '@/lib/content/site.json';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact & Book a Free Trial',
  description: 'Book a free trial class at NEXUS Robotics. No payment required. Fill in the form and we\'ll confirm within 24 hours.',
  alternates: { canonical: '/contact' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteContent.siteName,
  telephone: siteContent.contact.phone,
  email: siteContent.contact.email,
  openingHours: 'Mo-Sa 09:00-18:00',
  url: 'https://nexusrobotics.com.au',
};

export default function ContactPage() {
  const { hero, faqs } = contactContent;
  const { contact } = siteContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-labelledby="contact-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="contact-heading" className={styles.heroHeading}>{hero.heading}</h1>
          <p className={styles.heroBody}>{hero.body}</p>
        </div>
      </section>

      {/* MAIN */}
      <section className={styles.main}>
        <div className={styles.mainInner}>
          <ContactForm />

          {/* SIDEBAR */}
          <aside className={styles.sidebar} aria-label="Contact information">
            <div className={styles.infoCard}>
              <p className={styles.infoCardLabel}>Direct contact</p>
              <ul className={styles.contactList} role="list">
                <li>
                  <a href={`tel:${contact.phone}`} className={styles.contactItem}>
                    <span className={styles.contactIcon} aria-hidden="true">📞</span>
                    <span>
                      <strong>{contact.phone}</strong>
                      <br />
                      <span className={styles.contactSub}>{contact.phoneHours}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`} className={styles.contactItem}>
                    <span className={styles.contactIcon} aria-hidden="true">✉️</span>
                    <span>
                      <strong>{contact.email}</strong>
                      <br />
                      <span className={styles.contactSub}>{contact.emailResponse}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={siteContent.social.whatsapp} className={styles.contactItem}>
                    <span className={styles.contactIcon} aria-hidden="true">💬</span>
                    <span>
                      <strong>WhatsApp us</strong>
                      <br />
                      <span className={styles.contactSub}>Quick questions welcome</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.infoCard}>
              <p className={styles.infoCardLabel}>Our centre</p>
              <div className={styles.mapPlaceholder} aria-label="Map placeholder">
                <span aria-hidden="true">📍</span>
                <span>Map placeholder — address TBD</span>
              </div>
              <p className={styles.addressLine}>📍 {contact.address}</p>
              <p className={styles.addressLine}>🕐 {contact.hours}</p>
            </div>

            <div className={styles.onlineFamilies}>
              <p className={styles.onlineLabel}>Online families</p>
              <p className={styles.onlineBody}>
                Can&apos;t come in person? Book a free 15-minute intro call and we&apos;ll walk you through the online setup, kit shipping, and class schedule.
              </p>
              <Link href="/contact" className={styles.onlineCta}>
                Schedule a call
                <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5h7M6 2.5l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection} aria-labelledby="faq-heading">
        <div className={styles.faqInner}>
          <div className={styles.faqHeader}>
            <p className={styles.faqEyebrow}>Quick answers</p>
            <h2 id="faq-heading" className={styles.faqHeading}>Before you reach out</h2>
          </div>
          <dl className={styles.faqList}>
            {faqs.map((faq) => (
              <div key={faq.question} className={styles.faqItem}>
                <dt className={styles.faqQ}>{faq.question}</dt>
                <dd className={styles.faqA}>{faq.answer}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.faqCta}>
            <Link href="/programmes" className={styles.faqCtaLink}>
              View full programme FAQ
              <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
