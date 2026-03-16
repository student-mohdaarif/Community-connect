import React from 'react'
import { dummyConnectionsData} from '../assets/assets'
import { Eye, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Message = () => {

  const navigate = useNavigate()
  
  return (
    <div className='min-h-screen relative bg-gray-50'>
      <div className='max-w-6xl max-auto p-6'>
        <div className='mb-8'>
          <h1 className='text-2xl font-bold mb-2'>Messages</h1>
          <p className='text-gray-600'>Your messages will appear here.</p>
        </div>
        
        {/* here content */}
        <div className='flex flex-col gap-3 max-w-xl'>
          {dummyConnectionsData.map((user) =>(
            <div key={user._id} className='bg-white p-4 rounded-lg shadow'>
              <div className='flex max-w-xl items-center gap-3 mb-2'>
                <img src={user.profile_picture} alt={user.full_name} className='w-10 h-10 rounded-full'/>
                <div>
                  <h2 className='font-semibold'>{user.full_name}</h2>
                  <p className='text-sm text-gray-500'>@{user.username}</p>
                  <p className='text-sm text-gray-500'>{user.bio}</p>
                </div>
                <div>
                  <button onClick={() => navigate(`/messages/${user._id}`)} className='size-10 flex items-center justify-center text-rounded
                   bg-slate-100 hover:bg-slate-200 text-slate-800 
                   active:scale-95 transition cursor-pointer gap-1'>
                    <MessageSquare className='w-4 h-4'/>
                  </button>
                  <button onClick={() => navigate(`/profile/${user._id}`)} className='size-10 flex items-center justify-center text-rounded
                   bg-slate-100 hover:bg-slate-200 text-slate-800 
                   active:scale-95 transition cursor-pointer'>
                    <Eye className='w-4 h-4'/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Message
