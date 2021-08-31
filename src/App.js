import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

import data from './data/myData';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div class="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Projects data={data.projects.items} />
        <About data={data.about.items} />
        <Contact />
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default App;
