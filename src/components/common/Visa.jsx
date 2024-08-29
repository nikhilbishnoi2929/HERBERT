import React, { useEffect } from 'react'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Visa = () => {
  useEffect(() => {
    gsap.fromTo(
      '.frequentlyAsked', {
      duration: 2,
      opacity: 0,
      x: -100,
    }, {
      duration: 2,
      x: 0,
      opacity: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.frequentlyAsked',
        start: 'top bottom',
        end: 'bottom top',
      }
    }
    )
    gsap.fromTo(
      '.paraLorem', {
        duration: 2,
        opacity: 0,
        x: 100,
      }, {
        duration: 2,
        x: 0,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.paraLorem',
          start: 'top bottom',
          end: 'bottom top',
        }
      }
    )
    gsap.fromTo(
      '.fullCard', {
        duration: 2,
        opacity: 0,
       scale: 0
      }, {
         scale: 1,
        duration: 2,
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.fullCard',
          start: 'top bottom',
          end: 'bottom top',
        }
      }
    )

  }, []);
  return (
    <div className=' container max-w-[1164px] mx-auto px-3 '>
      <div className='fullCard transform translate-y-[134px] max-sm:translate-y-[150px] py-16 max-md:py-10 max-sm:py-5 max-md:px-5 bg-btnOrange rounded-[8px] flex justify-center '>
        <div className='flex flex-col items-center '>
          <h2 className='frequentlyAsked font-semibold text-5xl leading-[56px] max-w-[632px] max-sm:text-2xl max-md:text-3xl max-sm:leading-7 text-white text-center '>Need Help in Your Visa? Ask Herbert Now!</h2>
          <p className='paraLorem font-lato font-normal text-base max-sm:text-sm max-sm:leading-5 leading-6 text-center text-white max-w-[528px] max-sm:max-w-[287px] max-sm:pt-3 pt-4'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
          <div className='pt-[42px] max-sm:pt-8 flex gap-4 max-sm:gap-3 flex-wrap justify-center'>
            <button className='frequentlyAsked font-semibold hover:border-[1px] hover:border-white hover:bg-btnOrange hover:shadow-card_Shadow hover:text-white border-[1px] border-transparent custom_Duration text-base leading-5 text-btnOrange max-sm:w-full  p-[14px_24px] bg-white rounded-[8px]'>Start your conversation</button>
            <button className='paraLorem font-semibold hover:border-[1px] hover:border-btnOrange  hover:bg-white hover:shadow-card_Shadow hover:text-btnOrange custom_Duration border-[1px] border-transparent text-base leading-5 text-white p-[14px_24px] max-sm:w-full border-white text-nowrap rounded-[8px]'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Visa
