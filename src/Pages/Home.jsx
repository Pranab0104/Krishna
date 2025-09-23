import React from 'react'
import Video from '../components/Home/Video'
import Top from '../components/Home/Top'
import Bottom from '../components/Home/Bottom'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>

        <Video />

      </div>

      <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden pb-3'>

        <Top />
        <Bottom />

      </div>
    </div>
  )
}

export default Home
