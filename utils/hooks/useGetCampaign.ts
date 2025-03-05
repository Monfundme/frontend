"use client";
import { config } from "@/components/web3/config";
import monfund_ABI from "@/components/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { useEffect } from "react";
import { useReadContract, useBlockNumber } from "wagmi";
import { Campaign } from "@/types";

const useGetCampaigns = (lowerLimit: number = 0, upperLimit: number = 50) => {
	const { data: blockNumber } = useBlockNumber({ watch: true });
	const { data: donations, refetch } = useReadContract({
		abi: monfund_ABI,
		address: monfund_CA,
		functionName: "getActiveCampaigns",
		args: [lowerLimit, upperLimit],
		config: config,
	});

	useEffect(() => {
		console.log("blockNumber", blockNumber);
		if (Number(blockNumber) % 5 === 0) refetch();
	}, [blockNumber]);

	return donations as Campaign[];
};

export default useGetCampaigns;
