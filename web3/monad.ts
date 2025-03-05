import { type Chain } from "viem";

export const monadTestnet = {
	id: 10143,
	name: "Monad Testnet",
	nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
	rpcUrls: {
		default: {
			http: ["https://testnet-rpc.monad.xyz/"],
		},
	},
	blockExplorers: {
		default: {
			name: "Monad Explorer",
			url: "http://testnet.monadexplorer.com/",
		},
	},
} as const satisfies Chain;
