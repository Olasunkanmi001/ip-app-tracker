import { FaChevronRight } from "react-icons/fa";

const Header = ({handleClick,ip,setIp}) => {
  return (
    <div>
      <div className="w-full bg-[url('https://i.postimg.cc/59gvQ60v/pattern-bg-mobile.png')] md:bg-[url('https://i.postimg.cc/2yJQsNRm/bg-desktop.png')] bg-cover h-[20vh] md:h-[25vh] text-white text-center pt-7">
        <h1 className='text-2xl font-bold mb-5 md:text-4xl md:mb-9'>IP ADDRESS TRACKER</h1>
        <div className=' flex text-center justify-center  relative bottom-4'>
          <input type='text' placeholder='search for any IP address or domain'  className='w-[270px] md:w-[700px] md:h-20 h-14 rounded-l-2xl text-black pl-6 text-sm md:text-3xl '
          value={ip}
          onChange={(e)=>setIp(e.target.value)} />
          <button className='w-10 pl-3 bg-black h-14 rounded-r-2xl md:h-20 md:w-20 md:pl-7'><FaChevronRight className='md:w-7 md:h-7'
          onClick={ ()=>{
            if(!ip){
              alert('Please enter a Ip Address');
              return;
            }
            handleClick()
          }}/></button>
        </div>
      </div>
    </div>
  );
};

export default Header;