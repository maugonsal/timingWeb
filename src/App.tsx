import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './common/Home';

const App: FC = () => (
  <Suspense fallback={null}>
    <Router>
      <Home />
    </Router>
  </Suspense>
);

export default App;
