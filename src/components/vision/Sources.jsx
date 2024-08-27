import React from 'react'
import Foundations from '../sources/Foundations'
import Residence from '../sources/Residence'
import Schengen from '../sources/Schengen'
import Employment from '../sources/Employment'
import VisaCode from '../sources/VisaCode'
import Handbook from '../sources/Handbook'
import Visa from '../common/Visa'
import Footer from '../common/Footer'
import ScrollToTopButton from '../common/ScrollToTopButton'

const Sources = () => {
  return (
    <div className=' overflow-hidden'>
      <Foundations />
      <Residence />
      <Schengen />
      <Employment />
      <VisaCode />
      <Handbook />
      <Visa />
      <Footer />
      <ScrollToTopButton/>
    </div>
  )
}

export default Sources
