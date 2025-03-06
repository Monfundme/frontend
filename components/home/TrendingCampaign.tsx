"use client";
import { CampaignCard } from "../general";
import { Campaign } from "@/types";
import LoadingCard from "../general/LoadingCard";
import { useTrendingCampaigns } from "@/utils/hooks";

const TrendingCampaign = () => {
	const { campaigns, isPending } = useTrendingCampaigns();

	if (isPending) {
		return [1, 2, 3].map((i: number) => (
			<LoadingCard
				key={i}
				isTrending={true}
			/>
		));
	}

	console.log("campaigns....", campaigns);

	return (
		<>
			{campaigns &&
				campaigns.map((campaign: Campaign, index: number) => (
					<CampaignCard
						campaign={campaign}
						key={index}
						// key={campaign._id}
						isTrending
					/>
				))}
		</>
	);
};

export default TrendingCampaign;
