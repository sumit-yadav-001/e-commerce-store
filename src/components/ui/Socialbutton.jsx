const SocialButton = ({ text, bg }) => {
  return (
    <button className={`
      w-full 
      py-2.5 sm:py-3 
      rounded-xl 
      text-white 
      ${bg}
    `}>
      {text}
    </button>
  );
};

export default SocialButton;