import React from 'react';
import { ResetCSS } from './components/global/resetCSS';
import Layout from './components/layout';
import Profile from './components/Profile';
import Repositories from './components/repositories';

function App() {
  return (
      <main>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </main>
  );
}

export default App;
