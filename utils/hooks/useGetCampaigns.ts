"use client";
import { config } from "@/web3/config";
import monfund_ABI from "@/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { useEffect } from "react";
import { useReadContract, useBlockNumber } from "wagmi";
import { Campaign } from "@/types";

const useGetCampaigns = (lowerLimit: number = 0, upperLimit: number = 50) => {
	const { data: blockNumber } = useBlockNumber({ watch: true });
	const {
		data: donations,
		refetch,
		isPending,
	} = useReadContract({
		abi: monfund_ABI,
		address: monfund_CA,
		functionName: "getActiveCampaigns",
		args: [lowerLimit, upperLimit],
		config: config,
	});

	useEffect(() => {
		if (Number(blockNumber) % 5 === 0) refetch();
	}, [blockNumber]);

	return { campaigns: donations as Campaign[], isPending };
};

export default useGetCampaigns;
