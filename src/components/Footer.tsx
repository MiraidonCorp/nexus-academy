import Link from 'next/link';
import Image from 'next/image';
import siteContent from '@/lib/content/site.json';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Brand column */}
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

          {/* Link columns */}
          {siteContent.footer.columns.map((col) => (
            <div key={col.heading}>
              <h3 className={styles.colHeading}>{col.heading}</h3>
              <ul role="list" className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.colLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© {siteContent.copyright}. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.legalLink}>Privacy</Link>
            <Link href="/terms" className={styles.legalLink}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
