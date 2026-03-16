import { useEffect, useState } from 'react'
import {dummyPostsData} from '../assets/assets'
import Loading from '../components/Loading';
import StoriesBar from '../components/StoriesBar';
import PostCard from '../components/PostCard';
import spnimg from '../assets/spnimg.avif'
import RecentMessage from '../components/RecentMessage';

const Feed = () => {

    const [feeds, setfeeds] = useState([])
    const [loading, setLoading] = useState(true)


    const fetchFeeds = async () =>{
      setfeeds(dummyPostsData)
      setLoading(false)
    }


    useEffect(() =>{
      fetchFeeds()
    },[])


  return !loading ?(
    <div className='h-full overflow-y-scroll no-scrollbar py-10
      xl:pr-5 flex items-start justify-center xl:gap-8'>
      {/* stories container  */}
      <div>
        <StoriesBar/>
        <div className='p-4 space-y-6'>
          {feeds.map((post) =>(
            <PostCard key={post._id} post={post}/>
          ))}
        </div>
      </div>
      {/* right sidebar */}
      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs bg-white text-xs p-4 rounded-md
         inline-flex flex-col gap-2 shadow bg-cover'>
          <h3 className='text-sky-950 font-semibold'>Sponsored</h3>
          <img src={spnimg} className='w-75 h-50 rounded-md'/>
          <p className='text-gray-600 text-xs'>We’ve teamed up with our partners to bring you 
            exciting products, services, or offers we think you’ll love.</p>
        </div>
        <div>
          <RecentMessage/>
        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default Feed
