import React from 'react';
import Layout from './components/layout';

function App() {
  return (
      <main>
        <Layout>
          <div>
            <img src="https://avatars.githubusercontent.com/u/65501165?v=4" alt="perfil"/>
            <h1>Felipe Ferreira</h1>
            <h3>Username: </h3>
            <span>felipeferreirass</span>
            <div>
              <div>
                <h4>Followers</h4>
                <span>60</span>
              </div>
              <div>
                <h4>Starreds</h4>
                <span>24</span>
              </div>
              <div>
                <h4>Followings</h4>
                <span>60</span>
              </div>
            </div>
          </div>

          <div>Repositories</div>
          <div>Starreds</div>
        </Layout>
      </main>
  );
}

export default App;
