import { useState } from "react";
import "./Button.css";

const LogoDisplay = ({ name }) => {
  const logos = {
    Unisat: `/unisat.svg`,
    Leather: `/leather.svg`,
    "Magic Eden": `/magiceden.svg`,
    OKX: `/okx.svg`,
    Xverse: `/xverse.svg`,
  };

  return (
    <img src={logos[name]} alt={`${name} logo`} className="w-8 h-8 inline" />
  );
};

const Button = ({ label }) => {
  return (
    <button
      className={`wallets px-4 py-3 w-3xs ml-2 mr-2 mt-6  text-left text-white border-[1px] border-black text-xl font-extrabold rounded-2xl hover:text-[#E9983D] hover:border-[#E9983D] hover:cursor-pointer bg-[#27272A]
      `}
    >
      <LogoDisplay name={label} />

      {" " + label}
    </button>
  );
};

export default Button;
