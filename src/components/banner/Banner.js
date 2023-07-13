import React from 'react'
import LeftBanner from './LeftBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="pt-10 pb-20 px-50 flex flex-col gap-5 xl:gap-0 items-center border-b-[1px] font-titleFont border-b-black"
    >
      <LeftBanner />
    </section>
  );
}

export default Banner