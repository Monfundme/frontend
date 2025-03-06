"use client";
import { config } from "@/web3/config";
import monfund_ABI from "@/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { useEffect } from "react";
import { useReadContract, useBlockNumber } from "wagmi";

const useGetCampaignsOfAddress = (address: string) => {
	const { data: blockNumber } = useBlockNumber({ watch: true });
	const {
		data: campaigns,
		refetch,
		isPending,
	} = useReadContract({
		abi: monfund_ABI,
		address: monfund_CA,
		functionName: "getCampaignsOfAddress",
		args: [address],
		config: config,
	});

	useEffect(() => {
		if (Number(blockNumber) % 5 === 0) refetch();
	}, [blockNumber]);

	return { campaigns, isPending, refetch };
};

export default useGetCampaignsOfAddress;
