import Image from 'next/image'
import React from 'react'

const Comments = () => {
  return (
    <div className="">
        {/* WRITE */}
        <div className="flex items-center gap-4">
            <Image
                src={"https://images.pexels.com/photos/26926216/pexels-photo-26926216/free-photo-of-a-hand-holding-a-flower-with-the-words-how-to-grow-frangipani.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                alt=''
                width={32}
                height={32}
                className='w-8 h-8 rounded-full'
            />
            <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
                <input type="text" 
                placeholder='Write a comment...' 
                className='bg-transparent outline-none flex-1'
                />
                <Image
                src={"/emoji.png"}
                alt=''
                width={16}
                height={16}
                className='cursor-pointer'
            />
            </div>
        </div>
        {/* COMMENTS */}
        <div className=""></div>
    </div>

    // 2024-07-10 23:13:38
  )
}

export default Comments