import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    // 2024-07-10 22:17:58
    <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src={"https://images.pexels.com/photos/26926257/pexels-photo-26926257/free-photo-of-just-chillin.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt='' 
                width={40} 
                height={40} 
                className='w-10 h-10 rounded-full' />
                <span className='font-medium'>Bessie Gregory</span>
            </div>
            <Image src={"/more.png"} 
                alt='' 
                width={16} 
                height={16} />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
            <Image src={"https://images.pexels.com/photos/25583966/pexels-photo-25583966/free-photo-of-a-small-flower-with-green-leaves-and-red-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} 
                alt='' 
                fill 
                className='object-cover rounded-lg'/>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fuga, ipsa consequatur laboriosam minus ducimus non corporis in velit nobis dignissimos soluta expedita. Natus, eum voluptate iure nam molestiae laboriosam.</p>
        </div>
        {/* INTERACTION */}
        <div className="flex items-center justify-between text-sm my-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src={"/Like.png"} 
                alt=''
                width={16}
                height={16}
                className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>244 <span className='hidden md:inline'>Likes</span></span>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src={"/comment.png"} 
                alt=''
                width={16}
                height={16}
                className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>244 <span className='hidden md:inline'>Comments</span></span>
                </div>
            </div>
            <div className="">
            <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
                <Image src={"/share.png"} 
                alt=''
                width={16}
                height={16}
                className='cursor-pointer'/>
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>244 <span className='hidden md:inline'>Shares</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post