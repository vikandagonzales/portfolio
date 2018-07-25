// REACT
import React from 'react';

// COMPONENTS
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Return from './components/Return';
import Footer from './components/Footer';

// ==========

class App extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Return />
        <Footer />
      </div>
    );
  };
};

export default App;
