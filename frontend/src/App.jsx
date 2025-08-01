
// import Homepage from "./pages/Homepage"
// import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
// import PGList from "./components/PGLIist"
// import Listingpage from "./pages/Listingpage"
// import ScrollToTop from "./components/ScrollTop"


// const App = () => {
//   return (


//     <Router>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Homepage/>} />
//         <Route path="/pgs/:cityName" element={<Listingpage />} />
//       </Routes>
//     </Router>
  
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import Listingpage from './pages/Listingpage';
import ScrollToTop from './components/ScrollTop';
import ReviewPage from './pages/ReviewPage';

import AddPgPage from './pages/AddPgPage';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pgs/:cityName" element={<Listingpage />} />
        <Route path="/addpg" element={<AddPgPage/>} />
        <Route path="/pgs/:cityName/:pgName/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
