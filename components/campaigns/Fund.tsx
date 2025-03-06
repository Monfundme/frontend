"use client";
import { useState } from "react";
import { useCheckChain, useWrite } from "@/utils/hooks";
import { WriteDataType } from "@/types";
import { formatEther, parseEther } from "viem";
import { Modal } from "../general";
import { useAccount, useBalance } from "wagmi";
import { config } from "@/web3/config";
import { toast } from "react-toastify";
import Image from "next/image";

const Fund = ({ id, refetch }: { id: string; refetch: () => void }) => {
	const [amount, setAmount] = useState<string>("");
	const [toggle, setToggle] = useState<boolean>(false);
	const { isPending, write, _status } = useWrite();
	const { checkAndSwitch } = useCheckChain();
	const { isConnected, address } = useAccount();

	const { data: bal } = useBalance({ address: address, config: config });

	const Mon_bal = bal
		? ` ${Number(formatEther(bal?.value)).toFixed(2)} DMON`
		: " -- ";

	if (_status == "success") {
		refetch();
	}

	const handleDonate = async () => {
		if (parseEther(amount) > (bal?.value as bigint)) {
			toast.error("Insufficient DMON", {
				autoClose: 2000,
			});
			return;
		}

		const writeData: WriteDataType = {
			function: "donateWithMON",
			amount: parseEther(amount),
			id: id,
		};
		await checkAndSwitch();
		write(writeData, setToggle);
	};

	return (
		<>
			{toggle && (
				<Modal setToggle={setToggle}>
					<Image
						src={"/thankYou.gif"}
						alt="thank you"
						fill
						className="rounded-lg"
					/>
				</Modal>
			)}
			<div className="flex-1 sticky top-[100px] ">
				<h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
					Fund
				</h4>

				<div className="mt-[20px] flex flex-col p-5 bg-slate-100 rounded-[10px] shadow-lg border border-slate-200 ">
					<p className="font-epilogue fount-medium text-[20px] leading-[30px] text-center text-black font-semibold">
						Fund the campaign
					</p>
					<div className="mt-[30px]">
						<div className=" bg-white grid grid-cols-[65%_35%] ">
							<input
								type="number"
								placeholder="MON 0.1"
								step="0.01"
								className="w-full py-[10px] bg-white sm:px-[20px] px-[15px] outline-none text-black text-[18px] leading-[30px] placeholder:text-black/50 rounded-[10px]"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
							<p className="bg-accent-default text-white font-semibold grid place-content-center cursor-default ">
								{Mon_bal}
							</p>
						</div>

						<div className="my-[20px] p-4rounded-[10px]">
							<p className="mt-[20px] font-epilogue font-normal leading-[22px] text-[#808191]">
								Support the campaign for no reward, just because it speaks to
								you.
							</p>
						</div>
						{isConnected ? (
							<button
								type="button"
								disabled={isPending ? true : false}
								className={` disabled:bg-accent-10 font-epilogue font-semibold text-[16px] leading-[26px] shadow-md text-white  min-h-[52px] px-4 rounded-[10px] accent_with_fade `}
								onClick={!isPending ? handleDonate : () => null}>
								Fund campaign
							</button>
						) : (
							<button
								type="button"
								disabled
								className={` bg-accent-10 font-epilogue font-semibold text-[16px] leading-[26px] shadow-md text-white  min-h-[52px] px-4 rounded-[10px]`}>
								Connect wallet to fund
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Fund;
