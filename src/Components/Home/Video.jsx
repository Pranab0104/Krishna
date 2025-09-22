import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video className='w-full h-full object-cover' autoPlay loop muted playsInline src="src\assets\Krishna.mp4"></video>
    </div>
  )
}

export default Video
