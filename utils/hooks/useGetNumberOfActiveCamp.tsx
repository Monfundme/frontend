"use client";
import { config } from "@/web3/config";
import monfund_ABI from "@/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { useEffect } from "react";
import { useReadContract, useBlockNumber } from "wagmi";

const useGetNumberOfActiveCamp = () => {
	const { data: blockNumber } = useBlockNumber({ watch: true });
	const {
		data: numberOfActiveCamp,
		refetch,
		isPending,
	} = useReadContract({
		abi: monfund_ABI,
		address: monfund_CA,
		functionName: "numberOfActiveCampaigns",
		config: config,
	});

	useEffect(() => {
		if (Number(blockNumber) % 5 === 0) refetch();
	}, [blockNumber]);

	return { numberOfActiveCamp: numberOfActiveCamp as number, isPending };
};

export default useGetNumberOfActiveCamp;
