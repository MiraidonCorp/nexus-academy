import Image from 'next/image';
import TrackedLink from './TrackedLink';
import styles from './Footer.module.css';

type SiteContent = {
  copyright: string;
  footer: {
    tagline: string;
    columns: { heading: string; links: { label: string; href: string }[] }[];
  };
};

interface FooterProps {
  siteContent: SiteContent;
}

export default function Footer({ siteContent }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image
                src="/images/nexus-logo.svg"
                alt="NEXUS Robotics"
                width={80}
                height={80}
                loading="lazy"
              />
              <div>
                <div className={styles.brandName}>NEXUS</div>
                <div className={styles.brandSub}>Institute of STEM &amp; Robotics</div>
                <p className={styles.brandTagline}>{siteContent.footer.tagline}</p>
              </div>
            </div>
          </div>

          {siteContent.footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul role="list" className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <TrackedLink
                      href={link.href}
                      className={styles.colLink}
                      label={link.label}
                      location={`footer-${col.heading}`}
                    >
                      {link.label}
                    </TrackedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {siteContent.copyright}. All rights reserved.</p>
          <div className={styles.legal}>
            <TrackedLink href="/privacy" className={styles.legalLink} label="Privacy" location="footer-legal">Privacy</TrackedLink>
            <TrackedLink href="/terms" className={styles.legalLink} label="Terms" location="footer-legal">Terms</TrackedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
