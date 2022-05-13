import React from 'react';
import {
  Routes,
  Route,
  HashRouter,
} from 'react-router-dom';
import Navigationbar from './navbar/nav';
import About from './about/about';
import Work from './work/work';
import Education from './education/education';
import './style.scss';

function App() {
  return (
    <HashRouter>
      <div>
        <Navigationbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<div>Page not found </div>} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
