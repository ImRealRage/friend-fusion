import Image from "next/image";
import React from "react";

const Comments = () => {
  return (
    <div className="">
      {/* WRITE */}
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/26926216/pexels-photo-26926216/free-photo-of-a-hand-holding-a-flower-with-the-words-how-to-grow-frangipani.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full">
          <input
            type="text"
            placeholder="Write a comment..."
            className="bg-transparent outline-none flex-1"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="">
        {/* COMMENT */}
        <div className="flex gap-4 justify-between mt-6">
          {/* AVATAR */}
          <Image
            src={
              "https://images.pexels.com/photos/26926216/pexels-photo-26926216/free-photo-of-a-hand-holding-a-flower-with-the-words-how-to-grow-frangipani.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          {/* DESC */}
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Christina McBride</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              alias eius! Id blanditiis dicta qui impedit quo eaque incidunt
              suscipit, vitae ipsum? Voluptatem eaque assumenda, at animi
              architecto obcaecati eius!
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="cursor-pointer w-4 h-4"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">123 Likes</span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          {/* ICON */}
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer w-4 h-4"
          ></Image>
        </div>
      </div>
    </div>
    // 2024-07-10 23:13:38
    // 2024-07-11 20:04:04
  );
};

export default Comments;
