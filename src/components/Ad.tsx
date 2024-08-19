import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md text-sm">
            {/* TOP */}
            <div className="flex items-center justify-between text-gray-500 font-medium">
                <span>Sponsored Ads</span>
                <Image src="/more.png" alt="More options" width={16} height={16} />
            </div>
            {/* BOTTOM */}
            <div className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : size === "md" ? "gap-4" : "gap-6"}`}>
                <div className={`relative w-full ${size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"}`}>
                    <Image
                        src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
                        alt="Ad image"
                        layout="fill"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className={"flex items-center gap-4"}>
                    <Image
                        src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
                        alt="Ad image"
                        width={24}
                        height={24}
                        className="rounded-full w-6 h-6 object-cover"
                    />
                    <span className={"text-blue-400 font-medium"}>Remember this time</span>
                </div>
                <p className={size==="sm" ? "text-xs" : "text-sm"}>
                    {size === "sm" ? "Lorem ipsum dolor sit amet consectetur consectetur" : size === "md" ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt." : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."}
                </p>
                <button className={"bg-gray-200 text-gray-500 p-2 text-xs rounded-lg"}>Learn More</button>
            </div>
        </div>
    );
};

export default Ad;