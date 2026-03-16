import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets'

const CreatePost = () => {

  const [content, setContent] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const user = dummyUserData;


  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        <div className='mb-8'>
          <h1 className='text-3xl font-bold text-gray-800'>Create Post</h1>
          <p className='text-gray-600 text-lg mt-1'>Share your thoughts and moments</p>
        </div>

        {/* form */}
        <div className='max-w-xl bg-white p-4 sm:p-8 sm:pb-3 rounded-xl shadow-md space-y-4'>
            <div>
              <img src={user.profile_picture} alt="Profile" className='w-10 h-10 rounded-full 
              bg-cover inline mr-3' />
              <div>
                <h1 className='text-lg font-bold text-gray-800'>{user.full_name}</h1>
                <p className='text-gray-600'>@{user.username || 'set username'}</p>
                <p>{user.bio || 'No bio available'}</p>
              </div>
            </div>
            {/* Text area for post content */}
            <div>
              <textarea
               className='w-full resize-none max-h-20 mt-4 text-sm outline-none placeholder-gray-400'
                placeholder="What's on your mind?"
                onChange={(e) => setContent(e.target.value)} value={console}
              />
            </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
