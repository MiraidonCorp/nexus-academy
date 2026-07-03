import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogClient from './BlogClient';
import blogContent from '@/lib/content/blog.json';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Competition recaps, tutorials, parent guides, and AI literacy explainers written by the NEXUS Robotics coaching team.',
  alternates: { canonical: '/blog' },
};

const blogListSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'NEXUS Robotics Blog',
  url: 'https://nexusrobotics.com.au/blog',
  blogPost: blogContent.posts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Person', name: post.author },
    datePublished: post.date,
    url: `https://nexusrobotics.com.au/blog/${post.slug}`,
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      {/* HERO */}
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
