import Header from './components/Header'
import Map from './components/Map'
import { useState , useCallback } from 'react'


const App = () => {

  const [ip,setIp]=useState('');
  const [data,setData]=useState([]);

  const handleClick=async()=>{
    const res=await fetch(`https://geo.ipify.org/api/v1?apiKey=${import.meta.env.VITE_API_KEY}&${ip}`);
    const data=await res.json();
    setData(data);
  };

  return (
    <div className='flex flex-col max-h-screen'>
      <div className=''>
        <Header handleClick={handleClick} ip={ip} setIp={setIp} />
      </div>
      <div className=''>
        <Map data={data}/>
      </div>
    </div>
  )
}

export default App