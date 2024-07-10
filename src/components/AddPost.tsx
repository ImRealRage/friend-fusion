import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md flex gap-4 justify-between text-sm'>
      {/* AVATAR */}
      <Image src={"https://images.pexels.com/photos/26146543/pexels-photo-26146543/free-photo-of-the-sun-is-setting-over-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
      alt='' width={48} height={48} className= "w-12 h-12 object-cover rounded-full" />
      {/* POSTS */}
      <div className= "flex-1">
        {/* TEXT INPUT */}
        <div className='flex gap-4'>
          <textarea name="" id="" placeholder="What's on your mind?" className='bg-slate-100 flex-1 rounded-lg p-2'></textarea>
          <Image src={"/emoji.png"} 
          alt='' width={20} height={20} className= "w-5 h-5 cursor-pointer self-end" />
        </div>
        {/* POST OUPTIONS */}
        <div className='flex items-center gap-4 mt-4 text-gray-400 flex-wrap'>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src={"/addImage.png"} 
          alt='' 
          width={20} 
          height={20} 
          />
          Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src={"/addVideo.png"} 
          alt='' 
          width={20} 
          height={20} 
          />
          Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src={"/poll.png"} 
          alt='' 
          width={20} 
          height={20} 
          />
          Poll
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src={"/addevent.png"} 
          alt='' 
          width={20} 
          height={20} 
          />
          Event
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPost