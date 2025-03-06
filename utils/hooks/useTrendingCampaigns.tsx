"use client";
import { useEffect, useState } from "react";
import { Campaign } from "@/types";
import useGetOneCampaign from "./useGetOneCampaign";

const useTrendingCampaigns = () => {
	const [isPending, setIsPending] = useState<boolean>(true);
	const [campaigns, setCampaigns] = useState<Campaign[]>([]);

	const { campaign: campaign_1, isPending: isPending_1 } = useGetOneCampaign(
		"0xcad98deba6a4282cd5ca7ea5"
	);
	const { campaign: campaign_2, isPending: isPending_2 } = useGetOneCampaign(
		"0x761966b49aa930cf633c481b"
	);
	const { campaign: campaign_3, isPending: isPending_3 } =
		useGetOneCampaign("2");

	useEffect(() => {
		if (!isPending_1 && !isPending_2 && !isPending_3) {
			setCampaigns([
				campaign_1 as Campaign,
				campaign_2 as Campaign,
				campaign_3 as Campaign,
			]);
			setIsPending(false);
		}
	}, [isPending_1, isPending_2, isPending_3]);

	return { campaigns, isPending };
};

export default useTrendingCampaigns;
