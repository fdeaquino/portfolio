import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';


function App() {
  return (

    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cases/*" element={<Cases casesData={casesData} />}>
              <Route path=":id" element={<SingleCaseView casesData={casesData} />} />
            </Route>
            <Route path="/notfound" element={<NotAvailable casesData={casesData} />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}


    </div>

  );
}

export default App;
