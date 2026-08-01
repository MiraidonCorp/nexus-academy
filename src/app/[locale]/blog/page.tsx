import type { Metadata } from 'next';
import BlogClient from './BlogClient';
import { getContent } from '@/lib/content/getContent';
import { isValidLocale, type Locale } from '@/lib/i18n/config';
import { localeAlternates } from '@/lib/i18n/metadata';
import styles from './blog.module.css';

type BlogContent = typeof import('@/lib/content/ca/blog.json');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) {
    return {};
  }

  return {
    title: 'Blog',
    description:
      'Competition recaps, tutorials, parent guides, and AI literacy explainers written by the NEXUS Robotics coaching team.',
    alternates: localeAlternates(localeParam, '/blog'),
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) {
    return null;
  }

  const locale: Locale = localeParam;
  const blogContent = await getContent<BlogContent>(locale, 'blog');

  const blogListSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'NEXUS Robotics Blog',
    url: `https://nexusrobotics.com.au/${locale}/blog`,
    blogPost: blogContent.posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: { '@type': 'Person', name: post.author },
      datePublished: post.date,
      url: `https://nexusrobotics.com.au/${locale}/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <section className={styles.hero} aria-labelledby="blog-heading">
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>{blogContent.hero.eyebrow}</p>
          <h1 id="blog-heading" className={styles.heroHeading}>{blogContent.hero.heading}</h1>
          <p className={styles.heroBody}>{blogContent.hero.body}</p>
        </div>
      </section>

      <BlogClient posts={blogContent.posts} categories={blogContent.categories} />
    </>
  );
}
