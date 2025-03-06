"use client";
import { ConnectModal } from "@/components/general";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const Page = () => {
	const { isConnected } = useAccount();

	useEffect(() => {
		document.body.style.overflow = !isConnected ? "hidden" : "auto";
	}, [isConnected]);

	if (!isConnected) {
		return <ConnectModal />;
	}
	return <div>This feature coming soon... </div>;
};

export default Page;
