"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useDisconnect } from "wagmi";

const Nav = () => {
  const { openConnectModal } = useConnectModal();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    console.log("DISCONNECTING... ");
    disconnect();
  };

  return (
    <nav className="fixed top-0 w-full p-2 lg:p-4 bg-background z-50 shadow-xl ">
      <main className="flex items-center justify-between gap-2 width_to_center ">
        <Link
          href="/campaigns"
          className="flex items-center gap-1 hover:bg-l_yellow px-4 py-2 rounded-md"
        >
          <Search />
          <p>Search</p>
        </Link>

        <Link href={"/"}>
          <p className=" text-accent-default font-extrabold ">MONFUNDME</p>
        </Link>

        <button
          onClick={isConnected ? handleDisconnect : openConnectModal}
          className=" hover:text-accent-default ease-linear duration-150 transition-colors border-2 px-4 py-2 border-accent-default rounded-lg font-bold "
        >
          {isConnected
            ? `${address?.slice(0, 4)}...${address?.slice(-6)}`
            : "connect wallet"}
        </button>
      </main>
    </nav>
  );
};

export default Nav;
