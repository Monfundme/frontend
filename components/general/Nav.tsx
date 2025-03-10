"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Nav = () => {
	const { openConnectModal } = useConnectModal();
	const { address, isConnected } = useAccount();
	const { push } = useRouter();

	const handleDisconnect = () => {
		push("/profile/campaigns");
	};

	const handleConnect = () => {
		try {
			openConnectModal && openConnectModal();
		} catch (error) {
			console.error("connect error --- ", error);
		}
	};

	return (
		<nav className="fixed top-0 w-full p-2 lg:p-4 bg-background z-50 shadow-xl ">
			<main className="flex items-center justify-between gap-2 width_to_center ">
				<Link
					href="/campaigns"
					className="flex items-center gap-1 hover:bg-l_yellow px-4 py-2 rounded-md">
					<Search />
					<p>Search</p>
				</Link>

				<Link href={"/"} className="flex items-center gap-2">
					<Image src="/logo.png" alt="logo" width={28} height={28} />
					<p className=" font-extrabold ">Monfundme</p>
				</Link>

				<button
					onClick={isConnected ? handleDisconnect : handleConnect}
					className=" hover:scale-105 bg-accent-default text-white  ease-linear duration-150 transition-all border-2 px-4 py-2 border-accent-default rounded-lg font-bold ">
					{isConnected
						? `${address?.slice(0, 4)}...${address?.slice(-6)}`
						: "connect wallet"}
				</button>
			</main>
		</nav>
	);
};

export default Nav;
