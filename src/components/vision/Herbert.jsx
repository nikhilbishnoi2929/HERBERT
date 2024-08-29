import React from 'react'
import Features from '../herbert/Features';
import Friendly from '../herbert/Friendly';
import Resources from '../herbert/Resources';
import Navigator from '../herbert/Navigating';
import Interactive from '../herbert/Interactive';
import Visa from '../common/Visa';
import Footer from '../common/Footer';
import Frequently from '../herbert/Frequently';
import ScrollToTopButton from '../common/ScrollToTopButton';
import Preloader from '../common/Preloader';

const Herbert = () => {
  return (
    <div className=' overflow-hidden'>
      <Navigator />
      <Interactive />
      <Features />
      <Friendly />
      <Resources />
      <Frequently />
      <Visa />
      <Footer />
      <ScrollToTopButton/>
      <Preloader/>
    </div>
  )
}
export default Herbert
