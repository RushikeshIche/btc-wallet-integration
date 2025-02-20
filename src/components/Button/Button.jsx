import "./Button.css";
import {
  UnisatIcon,
  LeatherIcon,
  MagicEdenIcon,
  OKXIcon,
  XverseIcon,
} from "../../assets/asset";
const LogoDisplay = ({ name }) => {
  const logos = {
    Unisat: UnisatIcon,
    Leather: LeatherIcon,
    "Magic Eden": MagicEdenIcon,
    OKX: OKXIcon,
    Xverse: XverseIcon,
  };

  return (
    <img src={logos[name]} alt={`${name} logo`} className="w-8 h-8 inline" />
  );
};

const Button = ({ label }) => {
  return (
    <div
      className={`wallets px-4 py-3 w-3xs ml-2 mr-2 mt-6  text-left text-white border-[1px] border-black text-xl font-extrabold rounded-2xl hover:text-[#E9983D] hover:border-[#E9983D] hover:cursor-pointer bg-[#27272A]
      `}
    >
      <LogoDisplay name={label} />

      {" " + label}
    </div>
  );
};

export default Button;
