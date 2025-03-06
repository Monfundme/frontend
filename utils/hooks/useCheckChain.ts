"use client";
import { useAccount, useSwitchChain } from "wagmi";
import { config } from "@/web3/config";

const useCheckChain = () => {
	const { chainId } = useAccount();
	const _config: any = config;

	const { switchChainAsync } = useSwitchChain();

	const checkAndSwitch = async () => {
		if (chainId !== _config.chains[0]?.id) {
			await switchChainAsync({ chainId: config.chains[0]?.id });
		}
	};

	return { checkAndSwitch };
};

export default useCheckChain;
