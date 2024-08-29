import React from 'react'
import teamImg from '../../assets/images/webp/team_Img.webp'
import COMMON_BUTTON from '../common/Commonbtn'

const Resources = () => {
  return (
    <>
      <div className='pt-12 sm:pt-16 md:pt-[40px] lg:pt-[56px] pb-12 sm:pb-16 md:pb-[40px] lg:pb-[106px]'>
        <div className='max-w-[1290px] px-4 sm:px-6 md:px-8 mx-auto'>
          <div className="flex flex-col lg:flex-row">
            <div className='lg:w-6/12 md:w-6/12 w-full px-4 '>
              <div className=''>
                <div className='flex flex-col max-w-full lg:max-w-[473px]'>
                  <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl lg:leading-[56px] font-semibold text-black pb-4'>
                    Team <span className='text-orange'>&</span> Resources
                  </h2>
                  <p className='text-sm sm:text-base lg:text-xs font-lato font-normal text-gray leading-[24px]'>
                    Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed. Vulputate eget lectus vitae iaculis rhoncus.
                    Single entrepreneur (yourself)
                    Outsourced development to freelancers
                    Budget: $15,000
                  </p>
                </div>
                <div className='flex flex-col items-start justify-start mt-4 sm:mt-6'>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gray rounded-full w-3 h-3"></div>
                    <p className='text-sm sm:text-base lg:text-xs font-lato font-normal text-gray leading-[24px]'>Single entrepreneur (yourself)</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gray rounded-full w-3 h-3"></div>
                    <p className='text-sm sm:text-base lg:text-xs font-lato font-normal text-gray leading-[24px]'>Outsourced development to freelancers</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-gray rounded-full w-3 h-3"></div>
                    <p className='text-sm sm:text-base lg:text-xs font-lato font-normal text-gray leading-[24px]'>Budget: $15,000</p>
                  </div>
                  <div className='pt-8'>
                    <COMMON_BUTTON text={"Learn more"} />
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:w-6/12 md:w-6/12 w-full px-4'>
              <div className='relative '>
                <img src={teamImg} alt="teamImg" className='w-full max-w-[700px] lg:max-w-[701px] lg:left-[60px] md:left-[50px] absolute'/>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Resources
