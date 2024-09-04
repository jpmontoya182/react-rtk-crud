import {useState} from 'react'
import {taskLogo} from '../assets/index'
import MenuSvg from './design/MenuSvg'
import MobileMenu from './design/MobileMenu'
import { Link } from 'react-router-dom'

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false)  

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
        }else {
            setOpenNavigation(true)
        }
    }

  return (
    <header className='fixed top-0 left-0 w-full z-50 lg:backdrop-blur-sm bg-gray-300'>
      <div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a href='/'>
            <img 
                src={taskLogo} 
                alt='tasklogo' 
                className='block w-[3rem] xl:mr-8' 
                
            />
        </a>
        <nav className={`fixed lg:static top-[5rem] left-0 right-0 bottom-0 lg:flex lg:mx-auto lg:bg-transparent ${openNavigation ? 'flex': 'hidden'}`}>
          <div className='relative z-10 flex flex-col items-center m-auto lg:flex-row'>  
            {/* several links */}
            <a className='block relative font-code text-2xl uppercase transition-colors hover:text-gray-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12'>
              <Link to='/' onClick={toggleNavigation}>
                Home
              </Link>
            </a>
            <a className='block relative font-code text-2xl uppercase transition-colors hover:text-gray-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12'>
            <Link to='/new-task' onClick={toggleNavigation}>
              New task
            </Link>              
            </a>
          </div> 
        <MobileMenu />
        </nav>
        <button className='ml-auto lg:hidden ' onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </header>
  )
}

  

  

export default Header
