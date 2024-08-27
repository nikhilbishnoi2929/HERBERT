import React from 'react'
import Features from '../herbert/Features';
import Friendly from '../herbert/Friendly';
import Resources from '../herbert/Resources';
import Navigator from '../herbert/Navigating';
import Interactive from '../herbert/Interactive';
import Visa from '../common/Visa';
import Footer from '../common/Footer';
import Frequently from '../herbert/Frequently';

const FirstComponent = () => {
  return (
    <>
      <Navigator />
      <Interactive />
      <Features />
      <Friendly />
      <Resources />
      <Friendly />
      <Frequently />
      <Visa />
      <Footer />
    </>
  )
}

export default FirstComponent
