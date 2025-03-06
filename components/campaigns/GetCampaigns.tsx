"use client";
import { Campaign } from "@/types";
import { CampaignCard } from "../general";
import { useGetCampaigns } from "@/utils/hooks";
import { zeroAddress } from "viem";
import InfiniteFetch from "./InfiniteFetch";
import { useEffect, useState } from "react";

const GetCampaigns = () => {
	const [start, setStart] = useState<boolean>(true);
	const [noCampaign, setNoCampaign] = useState<boolean>(false);
	const [campaigns, setCampaigns] = useState<Campaign[]>([]);

	const [limits, setLimits] = useState({
		lowerLimit: 0,
		upperLimit: 25,
	});

	const { campaigns: _campaigns, isPending } = useGetCampaigns(
		limits.lowerLimit,
		limits.upperLimit
	);

	useEffect(() => {
		if (start && !isPending) {
			setStart(false);
		}

		if (_campaigns && !_campaigns.length && !isPending) {
			setNoCampaign(true);
		} else {
			setNoCampaign(false);
		}

		if (!isPending) {
			setCampaigns(_campaigns);
		}
	}, [isPending, _campaigns]);

	if (start && isPending)
		return (
			<div className=" h-[300px] grid place-content-center"> Loading ...</div>
		);

	if (noCampaign)
		return (
			<div className=" h-[300px] grid place-content-center">
				No Active Campaigns...
			</div>
		);

	return (
		<>
			<div className=" grid_layout  ">
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
			<InfiniteFetch
				limits={limits}
				setLimits={setLimits}
				isPending={isPending}
			/>
		</>
	);
};

export default GetCampaigns;
