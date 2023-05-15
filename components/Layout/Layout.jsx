/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {

  return (
    <>
      <Head>
        <title>Spark Idea</title>
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world."
        />
        <meta property="og:title" content="Spark Idea" />
        <meta
          property="og:description"
          content="Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world."
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/62204567/238480188-3cfb2d56-6125-4d7b-b3a0-17b48d64dc33.png"
        />
      </Head>
      
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
