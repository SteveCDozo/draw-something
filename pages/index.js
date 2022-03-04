import Head from 'next/head';
import { Input } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Draw Something</title>
        <meta name="description" content="An app to draw something" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Input placeholder="Enter a name" />
    </>
  );
}
