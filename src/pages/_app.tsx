import React from 'react';
import type { AppProps as AP } from 'next/app';

const App = ({ Component, pageProps }: AP): JSX.Element => (
  <Component {...pageProps} />
);

export default App;
