import { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Footer from './Footer';
import { useTheme } from 'next-themes';
import Icon from './Icon';

const Container = ({ children, ...customMeta }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const meta = {
    type: 'website',
    ...customMeta
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://Eliasm.dev${router.asPath}`}
        />
        <link rel="canonical" href={`https://Eliasm.dev${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Elias Moreno" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Eliascm17" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="flex sticky z-10 top-0 transition items-center justify-between px-8 pt-16">
        <button
          className="p-2 rounded-md focus:outline-none bg-button-light dark:bg-button-dark dark:stroke-current dark:text-button-light hover:bg-button-light-hover dark:hover:bg-button-dark-hover transition ease-in-out duration-200"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <Icon
              className="w-5 h-5"
              name={theme === 'dark' ? 'sun' : 'moon'}
            />
          )}
        </button>
        <div className="flex space-x-4 ">
          <NextLink href="/">
            <div>Home</div>
          </NextLink>
          <NextLink href="/blog">
            <div>Blog</div>
          </NextLink>
        </div>
      </nav>
      <main className="flex flex-col justify-center bg-white dark:bg-dark px-8">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Container;
