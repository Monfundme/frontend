import CampaignCard from "@/components/general/CampaignCard";
import { Campaign } from "@/types";
import React from "react";

const campaigns: Campaign[] = [{
  currentAmount: BigInt(50),
  deadline: Number(BigInt(Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60)), // 7 days from now
  description: "Help farmers grow and thrive! Your support provides the resources they need to cultivate a better future.",
  id: "1",
  image: "/campaign1.jpg",
  owner: "0x1234567890123456789012345678901234567890",
  owner_id: "0x1234567890123456789012345678901234567890",
  targetAmount: 100,
  title: "Support a Farmer",
  donations: [],
  name: "Farmer Support Campaign",
  function: "createCampaign" as const
}];

export default function Page() {
  return (
    <div className="w-full h-dvh px-4 lg:px-[36px] mt-6">
      <div className="flex items-center justify-between">
        <h4 className="text-[24px] font-nohemi">Campaigns Created</h4>
        <div className="flex items-center gap-2">
          <h6 className="text-[#909097] text-sm font-dmSans font-semibold">
            Filter by: <span className="text-[#8E35FD]">All Category</span>
          </h6>
        </div>
      </div>

      {/* Map over the campaigns array */}
      <div className="grid_layout mt-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((_id: number) => (
          <CampaignCard
            key={_id}
            isTrending={false}
            campaign={campaigns[0]}
          />
        ))}
      </div>
    </div>
  );
}
