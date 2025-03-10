import Image from "next/image";
import React from "react";

export default function TopNav() {
  return (
    <div className="w-full flex justify-between items-center h-[64px] px-[36px] bg-white my-3 font-dmSans">
      <div>
        <div className="w-[629px] h-[40px] bg-[#F9FAFB] rounded-[6px] px-3  gap-2 flex items-center">
          <Image src="/svgs/search.svg" width={20} height={21} alt="search" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full h-full bg-transparent outline-none text-sm text-[#667185]"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-[40px] h-[40px] bg-[#F0F2F5] rounded-full flex items-center justify-center"></div>
        <Image src="/svgs/avatar.svg" width={40} height={40} alt="avatar" />
      </div>
    </div>
  );
}
