import React, { FC } from 'react';
import Head from 'next/head';
import GlobalStyles from 'styles/global';
import EmojiPicker from '@components/emojiPicker/emojiPicker';

const Home: FC = () => (
  <div>
    <Head>
      <title>Emoji Picker</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <GlobalStyles />

    <EmojiPicker />
  </div>
);

export default Home;
