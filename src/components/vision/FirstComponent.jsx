import React from 'react'
import Features from '../herbert/Features';
import Friendly from '../herbert/Friendly';
import Resources from '../herbert/Resources';
import Visa from '../herbert/Visa';
import Footer from '../herbert/Footer';
import Navigator from '../herbert/Navigating'

const FirstComponent = () => {
  return (
    <>
      <Navigator />
      <Features />
      <Friendly />
      <Resources />
      <Visa />
      <Footer />
    </>
  )
}

export default FirstComponent
