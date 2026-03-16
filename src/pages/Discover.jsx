import React from 'react'
import { dummyConnectionsData } from '../assets/assets'
import { useState } from 'react'
import UserCard from '../components/UserCard'

const Discover = () => {

    const [input, setInput] = useState('')
    const [users, setUsers] = useState(dummyConnectionsData)
    const [loading, setLoading] = useState(false)

    const handleSearch = async(e) => {
        if(e.key === 'Enter'){
            setUsers([])
            setLoading(true)
                setTimeout(()=>{
                    setUsers(dummyConnectionsData)
                    setLoading(false)
            }, 1000)
        }
    }

  return (
    <div className='min-h-screen bg-slate-50'>
      <div className='max-w-6xl mx-auto p-6'>
        <h1 className='text-3xl font-bold text-gray-800'>Discover</h1>
        <p className='text-gray-600 text-lg mt-1'>Explore new connections and content</p>
        <input type='text' placeholder='Search...' className='w-[50%] mt-4 p-2 border
         rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-400'/>
        </div>

        <div className='flex flex-wrap gap-6'>
            {users.map((user) =>(
                <UserCard key={user._id} user={user} />
            ))}
        </div>

        {
            loading && (<loading height= '60vh'/>)
        }
    </div>
  )
}

export default Discover
