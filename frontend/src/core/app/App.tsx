import React from 'react';

import CatalogGrid from 'src/components/CatalogGrid';
import MainLayout from 'src/components/MainLayout';

const App = (): React.JSX.Element => {
  return (
    <MainLayout>
      <CatalogGrid />
    </MainLayout>
  );
};

export default App;
