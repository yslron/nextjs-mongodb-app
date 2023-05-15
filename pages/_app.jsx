/* eslint-disable prettier/prettier */
import '@/assets/base.css';
import { Layout } from '@/components/Layout';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
 

  return (
    <ThemeProvider>
      <Layout>
        <Head>
        
          {/* Other meta tags, stylesheets, etc. */}
        </Head>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ThemeProvider>
  );
}
