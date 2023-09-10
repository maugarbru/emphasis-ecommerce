import React from 'react';

import logo from '../../logo.svg';
import MainLayout from 'src/components/MainLayout';

const App = (): React.JSX.Element => {
  return (
    <MainLayout>
      <div>
        <img src={logo} className="h-10 w-10" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    </MainLayout>
  );
};

export default App;
