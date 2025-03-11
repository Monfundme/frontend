import MonVotingTab from "@/components/ui/dashboard/tab/MonVotingTab";
import React from "react";

export default function index() {
  return (
    <div className="w-full h-dvh px-[36px] mt-6">
      <div className="flex items-center justify-between">
        <h4 className="text-[24px] font-nohemi">Mon Voting</h4>
      </div>
      <div className="mt-[15px]">
        <MonVotingTab />
        
      </div>
    </div>
  );
}
