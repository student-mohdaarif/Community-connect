import React from 'react'

const Loading = () => {
  return (
     <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="backdrop-blur-lg bg-white/30 p-8 rounded-2xl shadow-xl flex flex-col items-center space-y-4">
        
        <div className="w-14 h-14 border-4 border-indigo-600 
        border-t-transparent rounded-full animate-spin"></div>

        <p className="text-gray-700 text-lg font-semibold">
          Please wait...
        </p>

      </div>
    </div>
  )
}

export default Loading
