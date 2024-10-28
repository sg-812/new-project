import React from 'react'
import { Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import Service from '../components/Service';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import PageNotFound from '../components/PageNotFound';
import Features from '../components/Features';
import Outer from '../components/Outer/Outer';
import Inner from '../components/Outer/Inner/Inner';

const Routing = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          {/* ddefault path setup */}
            <Route path="" element={<Home/>}/>
            {/* dynamic path setup */}
            <Route path="about/:data" element={<About/>} />
            <Route path="service-page" element={<Service/>} />
            <Route path="features" element={<Features/>} />

            <Route path="outer-comp" element={<Outer/>} />
            <Route path="outer-comp/inner-comp" element={<Inner/>} />
            {/* 404  */}
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
    </Router>
  )
}

export default Routing