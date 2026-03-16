import React from 'react'
import { dummyUserData } from '../assets/assets'
import { MapPin, MessageCircle, UserPlus, Plus } from 'lucide-react'

const UserCard = ({user}) => {

  const currentUser = dummyUserData

  const handleFollow = async() => {
    console.log('Followed user:', user._id)

  }

  const handleConnectionRequest = async() => {

  }

  return (
    <div key={user._id} className='p-4 pt-6 flex flex-col justify-between w-72 
    shadow border border-gray-200 rounded-md ml-6'>
      <div className='text-center'>
        <img src={user.profile_picture} alt="" className='w-16 h-16 rounded-full mb-4 mx-auto' />
        <p className='mt-4 font-semibold'>{user.full_name}</p>
        {user.username && <p className='text-gray-500 font-light'>@{user.username}</p>}
        {user.bio && <p className='text-gray-600 mt-2'>{user.bio}</p> }
      </div>

      <div className='flex items-center justify-center gap-2 mt-4 text-xs text-gray-600' >
        <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1'>
          <MapPin className= 'w-4 h-4'/>{user.location}
        </div>
         <div className='flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1'>
          <span>{user.followers.length}</span>Followers
        </div>
      </div>

      <div className='flex mt-4 gap-2 justify-center'>
        <button onClick={handleFollow} disabled={currentUser?.following.includes(user._id)} 
        className='flex justify-center py-2 w-full bg-gradient-to-r from-indigo-500
         via-purple-500 to-pink-500 
         text-white px-6 rounded-md text-[18px] font-light hover:from-indigo-600
         hover:via-purple-600 hover:to-pink-600 transition-colors duration-300 cursor-pointer'>
          <UserPlus className='w-5 h-5 mr-1'/>{currentUser?.following.includes(user._id) ? 'Following' : 'Follow'}
        </button>

          <button className='bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-300 
          text-white p-3 rounded-full shadow-md hover:scale-105 
          transition flex items-center justify-center w-16 cursor-pointer' onClick={handleConnectionRequest}>
            {
              currentUser?.connections.includes(user._id) ? <MessageCircle className='w-5 h-5 group-hover:scale-105 transition'/>
               : 
               <Plus className='w-5 h-5 group-hover:scale-105 transition'/>
            }
          </button>
      </div>
    </div>
  )
}

export default UserCard
