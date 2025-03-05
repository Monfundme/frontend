"use client";
import { Campaign } from "@/types";
import { CampaignCard } from "../general";
import useGetCampaigns from "@/utils/hooks/useGetCampaigns";

const GetCampaigns = () => {
	const campaigns: Campaign[] = useGetCampaigns();

	return (
		<div className=" grid grid-cols-2 gap-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-5">
			{campaigns &&
				campaigns.map((campaign: any, index: number) => (
					<CampaignCard
						key={index}
						isTrending={false}
						campaign={campaign}
					/>
				))}
		</div>
	);
};

export default GetCampaigns;
