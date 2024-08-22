import React from 'react'
import logo from '../../assets/images/svg/herberLogo.svg'
import COMMON_BUTTON from '../common/Commonbtn'
const Navigating = () => {
  return (
    <div className='bg-headerBg'>
      <div className='container max-w-[1164px] mx-auto px-3 '>
        <nav>
          <div className=' py-[23px] flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <ul className=' flex gap-11'>
              <li><a href="" className=' font-lato font-normal text-base leading-6 text-gray '>Herbert</a></li>
              <li><a href="" className=' font-lato font-normal text-base leading-6 text-gray'>Sources</a></li>
              <li><a href="" className=' font-lato font-normal text-base leading-6 text-gray'>Our Vision</a></li>

            </ul>
          </div>
        </nav>
      </div>
      <div className=' container max-w-[1168px] px-3 mx-auto'>
        <div className='flex justify-center'>
          <div className='flex flex-col text-center pt-[139px]'>

            <h1 className=' font-semibold text-11xl max-w-[716px] leading-[66px] text-black'>Navigating  <span className=' text-orange'>German Bureaucracy</span> with ease</h1>
            <COMMON_BUTTON text={"Start your conversation with Herbert"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigating
