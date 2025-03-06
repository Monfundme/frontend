"use client";
import { CampaignCard } from "../general";
import { Campaign } from "@/types";
import { useGetCampaigns } from "@/utils/hooks";
import LoadingCard from "../general/LoadingCard";

const TrendingCampaign = () => {
	const campaigns = useGetCampaigns();

	return (
		<>
			{campaigns?.length
				? campaigns.slice(0, 3).map((campaign: Campaign) => (
						<CampaignCard
							campaign={campaign}
							key={campaign._id}
							isTrending
						/>
				  ))
				: [1, 2, 3].map((i: number) => (
						<LoadingCard
							key={i}
							isTrending={true}
						/>
				  ))}
		</>
	);
};

export default TrendingCampaign;
