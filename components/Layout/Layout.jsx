/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  const pageTitle = 'Spark Idea'; // Replace with your desired page title
  const appDescription = "Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world.";
  return (
    <>
 
      <Head>
        <title>{pageTitle}</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content={appDescription}
        />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={appDescription}
        />
        <meta
          property="og:image"
          content="/public/images/og.png"
        />
      </Head>
      
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
