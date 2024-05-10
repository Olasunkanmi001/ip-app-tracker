import React from 'react';
import bgImage from './assets/pattern-bg-mobile.png';
import { FaChevronRight } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className='w-full bg-[url("https://i.postimg.cc/59gvQ60v/pattern-bg-mobile.png")] bg-cover h-[300px] text-white text-center pt-7 '>
        {/* <img src={bgImage} alt="Background" /> */}
        <h1 className='text-2xl font-bold mb-5 md:text-4xl md:mb-9'>IP ADDRESS TRACKER</h1>
        <div className=' flex text-center justify-center'>
          <input type='text' placeholder='search for any IP address or domain'  className='w-[270px] md:w-[700px] md:h-20 h-14 rounded-l-2xl text-black pl-6 text-sm md:text-3xl '/>
          <button className='w-10 pl-3 bg-black h-14 rounded-r-2xl md:h-20 md:w-20 md:pl-7'><FaChevronRight className='md:w-7 md:h-7'/></button>
        </div>
      </div>
    </div>
  );
};

export default Header;