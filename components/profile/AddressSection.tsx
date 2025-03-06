"use client";
import { config } from "@/web3/config";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { formatEther } from "viem";
import { useAccount, useBalance } from "wagmi";

const AddrSection = ({ pathName }: { pathName: any }) => {
	const { address, isConnected } = useAccount();
	const { data } = useBalance({ address: address, config: config });

	if (!isConnected) return;

	const Mon_bal = data
		? `${Number(formatEther(data?.value)).toFixed(2)} DMON`
		: "Loading...";

	return (
		<section>
			<div className=" flex gap-2 items-center">
				<div className=" size-[50px] rounded-full border-2 border-accent-default "></div>
				<div>
					<div className="flex gap-1 items-center ">
						<h2>{`${address?.slice(0, 4)}...${address?.slice(-6)}`} </h2>
						<a
							href={`https://explorer.monad-devnet.devnet101.com/address/${address}`}
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-accent-default">
							<ArrowRightIcon
								size={20}
								className=" -rotate-45"
							/>
						</a>
					</div>

					<p>{Mon_bal}</p>
				</div>
			</div>

			<div className=" flex items-center gap-4 mt-5">
				<Link
					className={`${
						pathName === "/profile/campaigns" ? "underline" : "no-underline"
					}`}
					href={"/profile/campaigns"}>
					Campaigns
				</Link>
				<Link
					className={`${
						pathName === "/profile/donations" ? "underline" : "no-underline"
					}`}
					href={"/profile/donations"}>
					Donations
				</Link>
			</div>
		</section>
	);
};

export default AddrSection;
