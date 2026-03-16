import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Login from './pages/login';
import {useUser} from '@clerk/clerk-react';
import Layout from './pages/Layout';
import Feed from './pages/Feed';
import Message from './pages/Message';
import {Toaster} from 'react-hot-toast';
import Connection from './pages/Connection';
import Discover from './pages/Discover';
import Profile from './pages/Profile';
import CreatePost from './pages/CreatePost';

const App = () => {
const {user} = useUser()

  return (
    <>
    <Toaster/>
      <Routes>
          <Route path='/'element={!user ?<Login /> : <Layout/>}>
            <Route index element={<Feed/>}/>
            <Route path='/messages/:userId' element= {<Message/>}/>
            <Route path='/messages' element= {<Message/>}/>
            <Route path='/Connections' element= {<Connection/>}/>
            <Route path='/Discover' element= {<Discover/>}/>
            <Route path='/Profile' element= {<Profile/>}/>
            <Route path='/Create-Post' element= {<CreatePost/>}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
