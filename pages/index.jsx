/* eslint-disable prettier/prettier */
import { Index } from '@/page-components/Index';
import Head from 'next/head';

const IndexPage = () => {
  <Head>
    <title>Homepage</title>
    <meta
          name="Homepage for Spark Idea"
          content="Spark Ideas is a tool for modern worlds to discover, create and share ideas to the world"
        />
  </Head>
  return <Index />;
};

export default IndexPage;
