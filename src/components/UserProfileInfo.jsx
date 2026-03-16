import { Verified, MapPin, Calendar, Edit } from 'lucide-react'
import React from 'react'
import moment from 'moment'

const UserProfileInfo = ({user, posts, profileId, setShowEdit}) => {
  return (
    <div className='relative py-4 px-6 md:px-8 bg-white'>
        <div className='flex flex-col md:flex-row items-start gap-6'>
            <div className='w-32 h-32 border-white shadow-lg rounded-full absolute -top-16'>
                <img src={user.profile_picture} alt="Profile" className='w-full h-full rounded-full 
                bg-cover' />
            </div>

            <div className='w-full pt-16 md:pt-0 md:pl-36'>
                <div className='flex flex-col md:flex-row items-start justify-between'>
                    <div>
                        <div className='flex items-center gap-3'>
                            <h2 className='text-2xl font-bold text-gray-900'>{user.full_name}</h2>
                            <Verified className='w-5 h-5 text-blue-500' />
                        </div>
                        <p className='text-gray-500 text-sm'>{user.username ?
                         `@${user.username}` : 'set username'}</p>
                    </div>
                    {/* user will be able to edit their profile only when they are viewing their own profile */}
                    {profileId === user.id && (
                        <button
                            onClick={() => setShowEdit(true)}
                            className='bg-blue-500 hover:bg-blue-600 text-white py-2
                             px-4 rounded-md cursor-pointer transition duration-200 flex items-center '>
                            <Edit className='w-4 h-4 mr-1'  />
                            Edit Profile
                        </button>
                    )}
                </div>
                <p className='text-gray-700 text-sm max-w-md mt-4'>{user.bio}</p>
                    <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm
                     text-gray-500 mt-4'>
                        <span className='flex items-center gap-2'>
                            <MapPin className='w-4 h-4' />
                            {user.location ? user.location : 'set location'}
                        </span>
                        <span className='flex items-center gap-2'>
                            <Calendar className='w-4 h-4' />
                            Joined <span className='font-medium'>{moment(user.createdAt).fromNow()}</span>
                        </span>
                    </div>
                    <div className='flex items-center gap-6 mt-6 border-t border-gray-200 pt-4'>
                        <div>
                            <span className='sm:text-xl font-bold text-gray-900'>{posts.length}</span>
                            <span className='sm:text-sm text-xs  text-gray-500 ml-1.5'> Posts</span>
                        </div>
                         <div>
                            <span className='sm:text-xl font-bold text-gray-900'>{user.followers.length}</span>
                            <span className='sm:text-sm text-xs  text-gray-500 ml-1.5'> Followers</span>
                        </div>
                        <div>
                            <span className='sm:text-xl font-bold text-gray-900'>{user.following.length}</span>
                            <span className='sm:text-sm text-xs  text-gray-500 ml-1.5'> Following</span>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfileInfo
