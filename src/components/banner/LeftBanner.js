import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["cutting-edge fintech startup", "Better. Brighter. Banking."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full flex flex-col gap-20 ">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME...</h4>
        <h1 className="text-6xl font-bold text-white">
          This is <span className="text-designColor capitalize">FIN EDGE</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        We are an cutting-edge fintech startup dedicated to revolutionizing cross-border payments. Their vision is to enable seamless transactions for individuals and businesses, transcending geographical boundaries.
        </p>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        We are an innovative financial startup that aims to transform international payments. Their goal is to make it possible for people and businesses to transact seamlessly across borders.

        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner