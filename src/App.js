import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import SkillsResume from './components/SkillsResume/SkillsResume';

import Footer from './components/Footer/Footer';



function App() {
  return (

    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsResume />} />
          {/* <Route path="/cases/*" element={<Cases casesData={casesData} />}>
            <Route path=":id" element={<SingleCaseView casesData={casesData} />} />
          </Route> */}
          {/* <Route path="/notfound" element={<NotAvailable casesData={casesData} />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />


    </div>

  );
}

export default App;
