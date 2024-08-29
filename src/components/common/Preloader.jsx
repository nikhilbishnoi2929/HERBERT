import React, { useEffect, useState } from 'react';
import pageLogo from "../../assets/images/svg/pageLogo.svg";

const Preloader = () => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        document.body.classList.add('overflow-hidden');
        const Timer = setTimeout(() => {
            setVisible(false);
            document.body.classList.remove('overflow-hidden');
        }, 2000);
        return () => {
            clearTimeout(Timer);
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    if (!visible) return null;
    return (
        <div className='min-h-screen w-full bg-white z-[100] fixed top-0 left-0 grid place-items-center'>
            <div className='flex justify-center items-center text-center'>
               <div className='flex flex-col items-center'>
               <img src={pageLogo} alt="logo" className='w-[250px] sm:w-[380px] relative z-10' />
               <h1 className=' loader mt-5'></h1>
               </div>
            </div>
        </div>
    )
}

export default Preloader