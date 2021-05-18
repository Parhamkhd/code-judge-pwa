import {useLayoutEffect, useState,useEffect} from 'react'
import './assets/styles/style.css'

import Navbar from './components/common/Navbar'
import Hero from './components/landingpage/Hero'
import OurJob from './components/landingpage/OurJob'
import OurCustomers from './components/landingpage/OurCustomers'
import Roadmap from './components/landingpage/Roadmap'
import WhyUs from './components/landingpage/WhyUs'
import ContactUs from './components/landingpage/ContactUs'
import Footer from './components/common/Footer'

import {UiProvider} from './contexts/UiContext'
function App() {


  return (
    <>
    <UiProvider>
      <Navbar/>
      <Hero/>
      <OurJob/>
      <OurCustomers/>
      <Roadmap/>
      <WhyUs/>
      <ContactUs/>
      <Footer/>
    </UiProvider>

    </>
  );
}

export default App;
