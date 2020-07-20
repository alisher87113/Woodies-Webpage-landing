import React from 'react';
import './css/style.css';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';

function App() {
  return (
    <div className="App">
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
      </div>
    </div>
  );
}

export default App;
