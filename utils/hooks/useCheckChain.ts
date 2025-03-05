"use client";
import { useAccount, useSwitchChain } from "wagmi";
import { config } from "@/web3/config";

const useCheckChain = () => {
	const { chainId } = useAccount();
	const _config: any = config;

	const { switchChainAsync } = useSwitchChain();

	const checkAndSwitch = async () => {
		console.log("config ---- ", _config.chains[0]?.id);
		console.log("user chain ---- ", chainId);

		if (chainId !== _config.chains[0]?.id) {
			console.log("Incorrect chain...!!!!!");
			await switchChainAsync({ chainId: config.chains[0]?.id });
			console.log("chain changed!");
		}
	};

	return { checkAndSwitch };
};

export default useCheckChain;
