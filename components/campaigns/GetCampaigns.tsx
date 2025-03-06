"use client";
import { Campaign } from "@/types";
import { CampaignCard } from "../general";
import { useGetCampaigns } from "@/utils/hooks";
import { zeroAddress } from "viem";
import { PageType } from "@/types";

const GetCampaigns = ({ page }: { page: PageType }) => {
	const { campaigns, isPending } = useGetCampaigns(
		page.lowerLimit,
		page.higherLimit
	);

	if (isPending)
		return (
			<div className=" h-[300px] grid place-content-center"> Loading ...</div>
		);

	if (!campaigns || !campaigns.length)
		return (
			<div className=" h-[300px] grid place-content-center">
				No Active Campaigns...
			</div>
		);

	return (
		<div className=" grid_layout ">
			{campaigns &&
				campaigns.map(
					(campaign: Campaign) =>
						campaign.owner !== zeroAddress && (
							<CampaignCard
								key={`${campaign._id}Loldsasa`}
								isTrending={false}
								campaign={campaign}
							/>
						)
				)}
		</div>
	);
};

export default GetCampaigns;
