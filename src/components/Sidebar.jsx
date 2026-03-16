import logoimg from '../assets/logoimg.png';
import { Link, useNavigate } from 'react-router-dom';
import Menuitems from './Menuitems';
import { Circle, CirclePlus, LogOut } from 'lucide-react';
import { UserButton, useClerk } from '@clerk/clerk-react';
import { dummyUserData } from '../assets/assets';


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => { 

  const navigate = useNavigate()
  const user = dummyUserData
  const {signOut} = useClerk()

  return (
  <div className={`w-60 xl:w-65 bg-white border-r border-gray-200
    flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 
    ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} 
    transition-all duration-300 ease-in-out`}>

        <div className='w-full'>
            <img 
              onClick={() => navigate('/')} 
              src={logoimg} 
              alt='logoimg'
              className='w-30 ml-15 mb-0 mt-1 cursor-pointer'
            />
            <hr className='border-gray-300 mb-10'/>
            <Menuitems setSidebarOpen={setSidebarOpen}/>
            <Link to='/create-post' className='flex items-center justify-center gap-1
             py-2.5 mt-6 mx-6 rounded-lg
              text-white font-medium bg-gradient-to-r from-indigo-600 to-green-500
              transition-all duration-300 ease-in-out
              hover:-translate-y-1 hover:shadow-lg'>
            <CirclePlus className='w-5 h-5'/>
            Create Post
            </Link>
        </div>

        <div className='w-full border-t border-gray-200 p-4 px-10
        flex items-center justify-between'>
          <div className='flex gap-2 items-center cursor-pointer'>
              <UserButton/>
          </div>

          <div className='pr-8'>
            <h1 className='text-sm font-medium'>{user.full_name}</h1>
            <p className='text-xs text-gray-500'>@{user.username}</p>
          </div>
            <LogOut onClick={signOut} className='w-4.5 text-gray-400 hover:text-gray-700 
             transition cursor-pointer'/>
        </div>
    </div>
  )
}

export default Sidebar


