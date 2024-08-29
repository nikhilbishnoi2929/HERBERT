const COMMON_BUTTON = ({ text, className, onclick, href }) => {
    const BUTTON_CLASS = `font-rubik font-semibold max-sm:text-sm max-sm:leading-4 border-[1px] border-transparent hover:border-[1px] border-btnOrange hover:shadow-btn_Shadow custom_Duration hover:bg-white hover:text-btnOrange  text-base leading-5 text-white bg-btnOrange p-[14px 24px] py-[14px] px-[24px] bg-blue  duration-300 ease-linear rounded-[8px] cursor-pointer  flex items-center justify-center w-fit ${className}`
    return (
        <a href={href}
            onclick={onclick}
            className={BUTTON_CLASS}>{text}</a>
    );
};
export default COMMON_BUTTON;