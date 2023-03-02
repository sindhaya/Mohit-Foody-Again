import React from 'react'
import './App.css';
import Service from './assets/Service';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './components/Navbar';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes> 
      <Route path='/' element={<Home/>}/> 
       <Route path='/contact' element={<Contact/>}/> 
      <Route path='/aboutUs' element={<AboutUs/>}/> 
       <Route path='/service' element={<Service/>}/> 
     </Routes>
     <Footer/> 
    </div>
  );
}

export default App;
//dev-eubfwvj76b4u4kgv.us.auth0.com-domain
//wnOQ4mkCkZsXhcBba8neQB3OgT6hMd0V-c-Id
//YSLo10IooRUmUXh0idDv3k7NtxSYFPICKPx9Pv8T1BxjLWEMpU43H9aZRQMEcMxc-client secret
//https://github.com/sindhaya/mohit-foody.git - github link
//https://incandescent-pavlova-a5f229.netlify.app- deploy link

