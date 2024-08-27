import React, { useEffect } from 'react';
import COMMON_BUTTON from '../common/Commonbtn';
import man_First from '../../assets/images/webp/manImgOne.webp';
import man_Second from '../../assets/images/webp/manImgSecond.webp';
import Hero from '../common/Hero';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Navigating = () => {
  useEffect(() => {
    // Staggered animation for heading text
    gsap.fromTo(
      '.heading span',
      { opacity: 0, y: 50, rotation: 0, duration: 4, },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 4,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.heading',
          start: 'top bottom',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
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
      { x: 100, opacity: 0,duration: 2, },
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
      '.helloMan', {
      duration: 3,
      x: -100,
      opacity: 0
    },
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.helloMan',
          start: "top center",
          end: "bottom 50%"
        }
      }
    )
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
      <div className='container max-w-[1164px] px-3 mx-auto relative pt-[139px] max-sm:pt-[72px] max-md:pt-[90px] xl:pb-[310px] pb-16 max-sm:pb-7 max-md:pb-10 max-lg:pb-14'>
        <div className='flex justify-center'>
          <div className='flex flex-col text-center items-center'>
            <h1 className='font-semibold heading text-11xl max-sm:text-[28px] max-md:text-4xl max-sm:leading-8 z-20 max-w-[716px] leading-[66px] text-black'>
              <span>Navigating</span>{' '}
              <span className='text-orange'>German Bureaucracy</span>{' '}
              <span>with ease</span>
            </h1>
            <p className='font-lato para max-sm:text-sm font-normal z-20 text-base leading-6 text-gray pt-4 max-sm:pt-[14px]'>
              Herbert Visa: Your AI-powered assistant for German visa and immigration processes
            </p>
            <div className='button'>
              <COMMON_BUTTON className='mt-[42px] max-sm:mt-8 z-20' text={"Start your conversation with Herbert"} />
            </div>
          </div>
        </div>
        <div className='xl:hidden flex justify-between w-full items-start pt-20 gap-4'>
          <img src={man_First} className='w-full helloMan pointer-events-none max-sm:max-w-[204px] max-md:max-w-[250px] max-w-[329px]' alt="manFirst" />
          <img src={man_Second} className='w-full pointer-events-none max-sm:max-w-[139px] max-md:max-w-[250px] pt-9 max-w-[324px]' alt="manSecond" />
        </div>
        <img src={man_First} className='w-full helloMan pointer-events-none max-xl:hidden max-w-[329px] absolute bottom-[63px] left-[-54px] z-0 max-2xl:left-3' alt="man_First" />
        <img src={man_Second} className='w-full helloManTwo pointer-events-none max-xl:hidden max-w-[324px] absolute bottom-[60px] right-[-75px] z-0 max-2xl:right-3' alt="man_Second" />
      </div>
    </div>
  );
};

export default Navigating;
