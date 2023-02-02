import React from 'react';

import { Footer, Expertises, Workprocess, Ijc, Header } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Ijc />
    <Workprocess />
    <CTA />
    <Expertises />
    <Footer />
  </div>
);

export default App;
