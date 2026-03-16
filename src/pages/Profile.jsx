import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import {dummyPostsData, dummyUserData} from '../assets/assets.js'
import { useEffect } from 'react'
import Loading from '../components/Loading.jsx'
import UserProfileInfo from '../components/UserProfileInfo.jsx'
import PostCard from '../components/PostCard.jsx'
import moment from 'moment'
import { Link } from 'react-router-dom'
const Profile = () => {

  const {profileId} = useParams()
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [activeTab, setActiveTab] = useState('Posts')
  const [showEdit, setShowEdit] = useState(false)


  const fetchUser =  async() => {
    setUser(dummyUserData)
    setPosts(dummyPostsData)
  }
    
  useEffect(()=>{
    fetchUser()
  },[])

  return user ? (
    <div className='relative h-full overflow-y-scroll bg-gray-50 p-6'>
      <div className='max-w-3xl mx-auto'>
        {/* Profile Card */}
        <div className='bg-white rounded-2xl shadow overflow-hidden'>
          {/* Cover Photo */}
          <div className='h-40 md:h-56 bg-gradient-to-r from-indigo-200
           via-purple-200 to-pink-200'>
            {user.cover_photo && <img src={user.cover_photo} alt="Cover" 
            className='w-full h-full bg-cover' />}
          </div>
          {/* User Information Section */}
           <UserProfileInfo user={user} posts={posts} profileId={profileId} setShowEdit={setShowEdit}/>
        </div>
        {/* Tabs */}
        <div className='mt-6'>
          <div className='bg-white rounded-xl shadow p-1 flex items-center justify-center max-w-md mx-auto'>
            {['Posts', 'Media', 'Likes'].map((tab) => (
              <button
                key={tab}
                className={` flex-1 px-6 py-2 text-sm font-medium cursor-pointer rounded-lg transition duration-200 ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-500 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          {/* posts */}
          {activeTab === 'Posts' && (
            <div className='mt-6 flex flex-col items-center gap-6'>
              {posts.map((post) => (<PostCard key={post._id} post={post} user={user}/>))}
            </div>
          )}
          {/* media */}
          {activeTab === 'Media' &&(
            <div className=' flex flex-wrap mt-6 max-w-64xl'>
              {posts.filter((post) => post.image_urls.length >0).map((post) => (
                <>
                {post.image_urls.map((image, index) =>(
                  <Link target='_blank' to={image} key={index}
                   className='relative group'>
                    <img src={image} key={index} className='w-64 aspect-video object-cover'/>
                    <p className='absolute bottom-0 right-0 text-xs p-1 px-3 backdrop-blur-xl
                     text-white opacity-0 group-hover:opacity-100 transition duration-300'>
                      Posted {moment(post.createdAt).fromNow()}</p>
                  </Link>
                ))}
                </>    
              ))
              }
            </div>
          )}
        </div>
      </div>

      {showEdit && (
        <div className= 'bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-full max-w-md'>
            <h2 className='text-xl font-bold mb-4'>Edit Profile</h2>
            <p className='text-gray-600 mb-4'>Update your profile information.</p>
          </div>
        </div>
      )}
    </div>
  ):(<Loading/>)
}

export default Profile
