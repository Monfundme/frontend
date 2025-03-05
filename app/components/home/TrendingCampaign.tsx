"use client";
import { CampaignCard } from "../general";
import { Campaign } from "@/types";
import useGetCampaigns from "@/utils/hooks/useGetCampaigns";

const TrendingCampaign = () => {
	const campaigns = useGetCampaigns();

	return (
		<>
			{campaigns &&
				campaigns.slice(0, 3).map((campaign: Campaign) => (
					<CampaignCard
						campaign={campaign}
						key={campaign._id}
						isTrending
					/>
				))}
		</>
	);
};

export default TrendingCampaign;
