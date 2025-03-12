"use client";
import { CampaignCard, ConnectModal, StartButton } from "@/components/general";
import { Campaign } from "@/types";
import { useGetCampaignsOfAddress } from "@/utils/hooks";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const Page = () => {
	const { isConnected, address } = useAccount();
	const { campaigns, isPending } = useGetCampaignsOfAddress(address as string);
	const _campaigns = campaigns as Campaign[];

	useEffect(() => {
		document.body.style.overflow = !isConnected ? "hidden" : "auto";
	}, [isConnected]);

	if (!isConnected) {
		return <ConnectModal />;
	}

	if (isPending)
		return <div className="h-dvh grid place-content-center">Loading...</div>;

	return (
		<div className=" my-[50px] ">
			{_campaigns?.length ? (
				<div className=" grid_layout ">
					{_campaigns.map((campaign, index: number) => (
						<CampaignCard
							campaign={campaign}
							isTrending={false}
							key={index}
						/>
					))}
				</div>
			) : (
				<div className=" grid place-content-center h-[200px] ">
					<p className=" mb-4">You do not have any MonfundMe Campaign</p>
					<div className="w-fit mx-auto ">
						<StartButton />
					</div>
				</div>
			)}
		</div>
	);
};

export default Page;
