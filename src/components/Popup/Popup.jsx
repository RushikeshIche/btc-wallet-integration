import React from "react";
import { useState } from "react";
import "./Popup.css";
import Button from "../Button/Button";
import { LaserEyesProvider } from "@omnisat/lasereyes";
import ConnectWallet from "../ConnectWallet/ConnectWallet";

export const Popup = ({ text, closePopup }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed w-full h-full backdrop-blur-[2px] text-2xl">
      <div
        className={`absolute sm:left-1/10 sm:right-1/10 md:left-1/10 md:right1/10 lg:left-1/4 lg:right-1/4   text-center text-[#E9983D] mx-auto rounded-lg border border-black bg-black overflow-auto flex-col gap-3 top-1/12 ${
          expanded ? "h-150" : "h-fit"
        }`}
      >
        <div onClick={closePopup} className=" absolute top-3 right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="white"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
        <div>
          <h1 className="popupHead text-5xl mt-14 mb-7">Wallets</h1>
        </div>
        <div>
          <h1 className="text-center text-white">{text}</h1>
        </div>
        <LaserEyesProvider
          config={{
            network: "mainnet",
          }}
        >
          <ConnectWallet />
        </LaserEyesProvider>

        <div className="mt-8">
          <p
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="text-white mb-15 font-semibold text-sm hover:underline hover:cursor-pointer"
          >
            {expanded ? "Show Less" : "Show More Options"}
          </p>
        </div>
      </div>
    </div>
  );
};
