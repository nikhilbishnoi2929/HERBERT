import React, { useEffect } from 'react'
import manImage from '../../assets/images/webp/helloMan.webp'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Residence = () => {
  useEffect(() => {
    gsap.fromTo(
      '.helloManTwo', {
      duration: 3,
      x: 100,
      opacity: 0
    },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: 'power3.out',
        ScrollTrigger: {
          trigger: '.helloManTwo',
          start: "top center",
          end: "bottom 50%"
        }
      }
    )
    gsap.fromTo(
      '.text_Animation', {
      x: -100,
      duration: 1,
      opacity: 0
    },
      {
        x: 0,
        opacity: 1,
        ease: 'power3.out',
        duration: 1,
        delay: 0.6,
        stagger: 0.4,
        ScrollTrigger: {
          trigger: '.text_Animation',
          start: "top center",
          end: "bottom 50%",
        }
      }
    )
  }, []);
  return (
    <div className=' max-w-[1047px] container mx-auto px-3 pb-[120px] max-md:pb-20'>
      <div className=' flex lg:flex-row flex-wrap -mx-3 flex-col-reverse items-center'>
        <div className='text_Animation w-full lg:w-6/12 px-3 max-lg:justify-center flex max-sm:pt-[56px]'>
          <div className='flex flex-col'>
            <h3 className='font-semibold max-sm:text-2xl max-md:text-4xl max-md:leading-[48px] text-5xl leading-[56px] text-black'>Residence <span className=' text-orange'>Act</span></h3>
            <p className='font-lato max-sm:text-sm font-normal text-base leading-6 text-gray max-w-[478px] pt-3'>The Aufenthaltsgesetz is the cornerstone of German immigration law. This act governs:</p>
            <div className='lg:hidden'>
              <div className=' flex max-sm:justify-center'>
                <img src={manImage} className='w-full pointer-events-none max-sm:max-w-[261px] max-w-[392px] py-8' alt="manImage" />
              </div>
            </div>
            <div className='flex items-center gap-3 ps-[10px] pt-[10px]'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className=' font-lato font-normal max-sm:text-sm text-base leading-6 text-gray max-w-[478px]'> Entry into Germany</h4>
            </div>
            <div className='flex items-center gap-3 ps-[10px] pt-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal text-base max-sm:text-sm leading-6 text-gray max-w-[478px]'>Residence permits</h4>
            </div>
            <div className='flex items-center gap-3 ps-[10px] pt-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal text-base leading-6 max-sm:text-sm text-gray max-w-[478px]'> Employment regulations for foreigners</h4>
            </div>
            <div className='flex items-center gap-3 ps-[10px] pt-1'>
              <div className='w-[8px] h-[8px] rounded-full bg-gray'></div>
              <h4 className='font-lato font-normal text-base max-sm:text-sm leading-6 text-gray max-w-[478px]'> Integration measures</h4>
            </div>
            <p className='font-lato font-normal text-base leading-6 max-sm:text-sm text-gray max-w-[478px] pt-[10px]'>Herbert utilizes this act to provide precise information on legal residence requirements and pathways to living in Germany.</p>
          </div>
        </div>
        <div className='w-full lg:w-6/12 px-3 flex lg:justify-end justify-center '>
          <img src={manImage} className='max-lg:hidden pointer-events-none helloManTwo max-w-[392px]' alt="manImage" />
        </div>
      </div>
    </div>
  )
}
export default Residence
