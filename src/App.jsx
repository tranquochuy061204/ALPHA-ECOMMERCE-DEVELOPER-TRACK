import Header from './components/Header';
import Section1 from './sections/Section1/Section1';
import Slider from './components/Slider';
import Section2 from './sections/Section2/Section2';
import Section3 from './sections/Section3/Section3';
import Section4 from './sections/Section4/Section4';
import Section5 from './sections/Section5/Section5';
import Section6 from './sections/Section6/Section6';
import Section7 from './sections/Section7/Section7';
import Section8 from './sections/Section8/Section8';
import Section9 from './sections/Section9/Section9';
import './style.css';
import Section10 from './sections/Section10/Section10';
import Section11 from './sections/Section11/Section11';
import Section12 from './sections/Section12/Section12';

function App() {
  return (
    <div id="app">
      <Header />
      <div className="main-content">
        <Section1 />
        <Slider />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 />
      </div>
    </div>
  );
}

export default App;
