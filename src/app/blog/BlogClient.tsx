'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './blog.module.css';

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categoryLabel: string;
  categoryColor: string;
  categoryBg: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
}

interface Category {
  id: string;
  label: string;
}

export default function BlogClient({ posts, categories }: { posts: Post[]; categories: Category[] }) {
  const [activeCat, setActiveCat] = useState('all');
  const [email, setEmail] = useState('');
  const [subbed, setSubbed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const filtered = activeCat === 'all' ? posts : posts.filter((p) => p.category === activeCat);
  const featured = filtered[0] ?? null;
  const grid = filtered.slice(1);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setEmailError('Enter your email'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailError('Enter a valid email'); return; }
    setEmailError('');
    setSubbed(true);
  };

  const pill = (cat: string) =>
    [styles.catPill, activeCat === cat ? styles.catPillActive : ''].join(' ');

  return (
    <>
      {/* CATEGORY FILTER */}
      <div className={styles.filterBar} role="navigation" aria-label="Blog categories">
        <div className={styles.filterInner}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={pill(cat.id)}
              onClick={() => setActiveCat(cat.id)}
              aria-pressed={activeCat === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED POST */}
      <section className={styles.featuredSection} aria-live="polite" aria-label="Featured post">
        <div className={styles.sectionInner}>
          {featured ? (
            <article className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.featuredImg}
                  priority
                />
                <span
                  className={styles.featuredBadge}
                  style={{ color: featured.categoryColor, background: featured.categoryBg }}
                >
                  {featured.categoryLabel}
                </span>
              </div>
              <div className={styles.featuredContent}>
                <p className={styles.featuredEyebrow}>Featured</p>
                <h2 className={styles.featuredTitle}>{featured.title}</h2>
                <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                <p className={styles.featuredMeta}>
                  <span>{featured.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={featured.date}>{featured.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readTime} read</span>
                </p>
                <Link href={`/blog/${featured.slug}`} className={styles.readLink}>
                  Read article
                  <svg aria-hidden="true" width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M1.5 5.5h8M7 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </article>
          ) : (
            <div className={styles.emptyState}>
              <span aria-hidden="true">🔍</span>
              <p>No posts in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* BLOG GRID */}
      {grid.length > 0 && (
        <section className={styles.gridSection} aria-label="More posts">
          <div className={styles.sectionInner}>
            <div className={styles.blogGrid}>
              {grid.map((post) => (
                <article key={post.id} className={styles.blogCard}>
                  <div className={styles.blogCardImage}>
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className={styles.blogImg}
                      loading="lazy"
                    />
                    <span
                      className={styles.blogBadge}
                      style={{ color: post.categoryColor, background: post.categoryBg }}
                    >
                      {post.categoryLabel}
                    </span>
                  </div>
                  <div className={styles.blogCardContent}>
                    <h3 className={styles.blogCardTitle}>{post.title}</h3>
                    <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogCardFooter}>
                      <span className={styles.blogMeta}>{post.author} · {post.readTime}</span>
                      <Link href={`/blog/${post.slug}`} className={styles.blogReadLink}>
                        Read
                        <svg aria-hidden="true" width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5h7M6 2.5l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      <section className={styles.newsletter} aria-labelledby="newsletter-heading">
        <div className={styles.newsletterInner}>
          <p className={styles.eyebrowLight}>Stay in the loop</p>
          <h2 id="newsletter-heading" className={styles.newsletterHeading}>Subscribe to the newsletter</h2>
          <p className={styles.newsletterBody}>
            Competition recaps, new programme announcements, and parent guides — once or twice a month, no fluff.
          </p>
          {subbed ? (
            <div className={styles.subbedBox} role="alert" aria-live="polite">
              <span aria-hidden="true">✓</span>
              <p className={styles.subbedTitle}>You&apos;re subscribed.</p>
              <p className={styles.subbedSub}>We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm} aria-label="Newsletter signup">
              <div className={styles.newsletterRow}>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={styles.newsletterInput}
                  aria-invalid={!!emailError}
                  aria-describedby={emailError ? 'nl-email-error' : undefined}
                  autoComplete="email"
                />
                <button type="submit" className={styles.newsletterBtn}>Subscribe</button>
              </div>
              {emailError && (
                <span id="nl-email-error" className={styles.nlError} role="alert">{emailError}</span>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}
