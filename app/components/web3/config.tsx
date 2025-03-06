"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { arbitrumSepolia } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createPublicClient, http } from "viem";
import CustomToastConatainer from "../general/CustomToastConatainer";

export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains: [arbitrumSepolia],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

export const publicClient = createPublicClient({
  transport: http(),
  chain: arbitrumSepolia,
});

const queryClient = new QueryClient();
const Web3Provider = ({ children }: { children: any }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
          <CustomToastConatainer />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
