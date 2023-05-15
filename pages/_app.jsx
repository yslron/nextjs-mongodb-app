/* eslint-disable prettier/prettier */
import '@/assets/base.css';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  const pageTitle = 'Spark Idea'; // Replace with your desired page title
  const appDescription = "Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world.";

  return (
    <ThemeProvider>
      <Layout>
        <Head>
          <title>{pageTitle}</title>
          <meta name="description" content={appDescription} />
          {/* Other meta tags, stylesheets, etc. */}
        </Head>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
