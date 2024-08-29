import React, { useEffect } from 'react'
import { INTER_ACTIVE } from '../common/Helper'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Interactive = () => {
  useEffect(() => {
    gsap.fromTo(
      '.cardInteractive',
      { opacity: 0, y: -100, rotation: 0, duration: 2,},
      {
        opacity: 1,
        duration: 4,
        y: 0,
        rotation: 0,
        ease: 'power3.out',
        delay: 0.7,
        stagger: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cardInteractive',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div className=' container max-w-[1164px] px-3 mx-auto'>
      <div className='flex flex-wrap flex-row -mx-[12px] items-center xl:transform xl:-translate-y-[108px] sm:py-5 max-lg:justify-center'>
        {INTER_ACTIVE.map((obj, index) => (
          <div className='cardInteractive lg:w-4/12 md:w-6/12 w-full px-3 max-lg:pt-4 max-lg:justify-center max-lg:flex '>
            <div className='z-20 md:max-w-[364px] w-full rounded-[8px] hover:border-0 custom_Duration hover:shadow-card_Shadow transformScale bg-white border-[1px] border-[#00000029] py-[20px] max-sm:py-[22px]'>
              <div key={index} className='flex justify-center'>
                <div className=' flex flex-col items-center'>
                  <img className='max-w-[56px] max-sm:max-w-[48px]' src={obj.img} alt={obj.heading} />  
                  <h2 className='pt-4 font-lato font-medium text-xl leading-6 text-black'>{obj.heading}</h2>
                  <p className='pt-3 max-sm:pt-2 font-lato font-normal text-base leading-6 text-gray md:max-w-[196px] text-center'>{obj.para}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Interactive
