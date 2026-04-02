import React, { useState } from 'react'
import { dummyUserData } from '../assets/assets.js'
import { X } from 'lucide-react'

const CreatePost = () => {
  const [content, setContent] = useState('')
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)

  const user = dummyUserData;
  return (
    <div className='min-h-screen bg-linear-to-b from-slate-50 to-white'>
      <div className='max-w-6xl mx-auto p-6'>
        {/* Title */}
        <div>
          <h1 className='text-3xl font-bold text-slate-900 mb-2'>Create Post</h1>
          <p className='text-slate-600'>Share your thoughts with the world</p>
        </div>

        {/* Post Form */}
        <div className='max-w-xl bg-white p-4 sm:p-8 sm:pb-3 rounded-xl shadow-md space-y-4'>
          <div className='flex items-center gap-3'>
            <img src={user.profile_picture} alt="Profile" className='w-12 h-12 rounded-full shadow'/>
            <div>
              <h1 className='text-sm font-semibold text-slate-900'>{user.full_name}</h1>
              <p className='text-xs text-slate-500'>@{user.username}</p>
            </div>
          </div>

          {/* Textarea for post content */}
            <textarea className='w-full resize-none max-h-20 mt-4 text-sm outline-none 
            placeholder-gray-400' placeholder='What are you thinking?'
            onChange={(e)=>setContent(e.target.value)}/>

            {/* Image upload section */}
            {
              images.length > 0 && <div className='flex flex-wrap gap-2 mt-4'>
                {images.map((image, i) =>(
                  <div key={i} className='relative group'>
                    <img src={URL.createObjectURL(image)} className='h-20 rounded-md' alt=''/>
                    <div onClick={() => setImages(images.filter((_, index) => index !== i))} className='absolute hidden group-hover:flex justify-center items-center top-0
                     right-0 bottom-0 left-0 bg-black/40 rounded-md cursor-pointer'>
                      <X className='w-6 h-6 text-white'/>
                    </div>
                  </div>
                ))}
              </div>
            }
        </div>
      </div>
    </div>
  )
}

export default CreatePost

