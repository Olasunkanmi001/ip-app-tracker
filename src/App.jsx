import Header from './components/Header'
import Map from './components/Map'


const App = () => {
  return (
    <div className='flex flex-col max-h-screen'>
      <div className=''>
        <Header/>
      </div>
      <div className=''>
        <Map/>
      </div>
    </div>
  )
}

export default App