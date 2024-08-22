// const CommonButton = ({ text, className, onClick, href }) => {
//     const buttonClasses = `font-normal text-lg leading-7 rounded-full shadow-3xl text-white bg-blue hover:text-black px-6 py-2 sm:py-[14px] h-[50px] sm:h-[55px] hover:bg-white border border-white hover:border-black duration-300 ease-linear cursor-pointer shadow-[4px_4px_20px_0px_#084CAF4D] flex items-center justify-center w-fit ${className}`;
//     return (
//         <a
//             href={href}
//             onClick={onClick}
//             className={buttonClasses}
//         >
//             {text}
//         </a>
//     );
// };

// export default CommonButton;

const COMMON_BUTTON = ({text, className, onclick, href}) => {
    const BUTTON_CLASS = `font-rubik font-semibold text-base leading-5 text-white bg-btnOrange p-[14px 24px] py-[14px] px-[24px] rounded-full bg-blue  hover:border-black duration-300 ease-linear cursor-pointer  flex items-center justify-center w-fit ${className}`
    return(
        <a href={href}
        onclick={onclick}
        className={BUTTON_CLASS}>{text}</a>
    );
};
export default COMMON_BUTTON;