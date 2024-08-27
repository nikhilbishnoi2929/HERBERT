import React, { useEffect } from 'react'
import Hero from '../common/Hero'
import COMMON_BUTTON from '../common/Commonbtn'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const Foundations = () => {
  useEffect(() => {
    gsap.fromTo(
      '.heading span',
      { opacity: 0, y: 50, rotation: 0, duration: 4 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 4, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.heading',
          start: 'top center',
          end: 'bottom 50%',
          // toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.to('.heading span', {
      rotation: 5,
      yoyo: true,
      repeat: -1,
      duration: 4,
      ease: 'easeInOut',
      scrollTrigger: {
        trigger: '.heading',
        start: 'top center',
        end: 'bottom 50%',
        scrub: true,
      },
    });
    gsap.fromTo(
      '.para',
      { x: -100, opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.para',
          start: 'top center',
          end: 'bottom 50%',
        },
      }
    );
    gsap.fromTo(
      '.button',
      { x: 100, opacity: 0,},
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.button',
          start: 'top center',
          end: 'bottom 50%',
        },
      }
    );
    gsap.fromTo(
      '.helloManTwo',{
        duration: 3,
        x: 100,
        opacity: 0
      },
      {
        opacity:1,
        x: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.helloManTwo',
          start: "top center",
          end: "bottom 50%"
        }
      }
    )
   

  }, []);
  return (
    <div className='bg-headerBg bg-full'>
      <Hero />
      <div className='container max-w-[1164px] px-3 mx-auto relative pt-[72px] pb-[120px] max-sm:pb-10' >
        <div className='flex justify-center'>
          <div className='flex flex-col text-center items-center '>
            <h1 className='font-semibold heading text-11xl max-sm:text-[28px] max-md:text-4xl max-sm:leading-8 z-20 max-w-[807px] leading-[66px] text-black'>
              <span>The Foundations of</span>{' '}
              <span className='text-orange'>German Immigration</span>{' '}
              <span>Expertise </span>
            </h1>
            <p className='para font-lato font-normal max-w-[685px] max-sm:text-sm z-20 text-base leading-6 text-gray pt-4 max-sm:pt-[14px]'>Herbert, our AI chatbot, is built on a comprehensive understanding of German immigration law. To ensure accuracy and reliability, Herbert's knowledge base is derived from the following authoritative sources:</p>
           <div className=' button'>
          <COMMON_BUTTON className='mt-[42px] max-sm:mt-8 z-20' text={"Contact Us"} />
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Foundations
