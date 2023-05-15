/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Footer from './Footer';
import styles from './Layout.module.css';
import Nav from './Nav';

const Layout = ({ children }) => {
  const pageTitle = 'Spark Idea'; // Replace with your desired page title
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
          content="Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world."
        />
        <meta property="og:title" content="Spark Idea" />
        <meta
          property="og:description"
          content="Spark Ideas is a tool for the modern world to discover, create, and share ideas with the world."
        />
        <meta
          property="og:image"
          content="https://repository-images.githubusercontent.com/201392697/5d392300-eef3-11e9-8e20-53310193fbfd"
        />
      </Head>
      
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
