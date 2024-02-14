import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar';
import Feeds from './Feeds';
import Rightbar from './Rightbar'

function Home() {
  return (
    <>
       <Header />
       <div className='main-content-sec'>
          <div className='container'>
            <Sidebar />
            <Feeds />
            <Rightbar />
          </div>
          
       </div>
    </>
  
  )
}

export default Home