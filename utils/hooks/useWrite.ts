"use client";
import { useState, useTransition } from "react";
import { useAccount } from "wagmi";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";
import monfund_ABI from "@/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { config } from "@/web3/config";
import { toast, Id } from "react-toastify";
import { WriteDataType } from "@/types";
import { parseEther } from "viem";

type Status = "success" | "reverted" | undefined;

const useWrite = (): {
	isPending: boolean;
	write: (writeData: WriteDataType, callback?: (arg?: any) => void) => void;
	_status: Status;
} => {
	const [isPending, startTransition] = useTransition();
	const [_status, setStatus] = useState<Status>();
	const { address } = useAccount();

	let toastId: Id;

	const _config: any = config;

	const write = (
		writeData: WriteDataType,
		callback?: (arg?: boolean) => void
	) => {
		startTransition(async () => {
			console.log("approve wallet transaction.");
			toastId = toast.info("Approve wallet transaction ");

			try {
				const hash =
					writeData.function === "createCampaign"
						? await writeContract(config, {
								abi: monfund_ABI,
								address: monfund_CA as `0x${string}`,
								functionName: writeData.function,
								args: [
									address,
									writeData.title,
									writeData.description,
									writeData.target,
									writeData.deadline,
									writeData.image,
								],
						  })
						: await writeContract(config, {
								abi: monfund_ABI,
								value: BigInt(writeData.amount),
								address: monfund_CA as `0x${string}`,
								functionName: writeData.function,
								args: [writeData.id, writeData.amount],
						  });

				console.log("Waiting for tx to be mined", hash);
				toastId = toast.loading("Transaction pending ...");

				const { status, transactionHash } = await waitForTransactionReceipt(
					_config,
					{
						hash,
						timeout: 30 * 1_000,
					}
				);
				setStatus(status);
				console.log("transaction --- ", transactionHash);

				console.log("Transaction successful!");
				toast.update(toastId, {
					render: "Transaction successful!",
					type: "success",
					isLoading: false,
					autoClose: 2000,
				});
				callback && callback(true);
			} catch (error: any) {
				console.error("TRANSACTION ERROR!", error);
				const errorMessage = error.shortMessage
					? error.shortMessage
					: error?.message;
				toastId
					? toast.update(toastId, {
							render: errorMessage,
							type: "error",
							isLoading: false,
							autoClose: 2000,
					  })
					: toast.error("Error in transaction!");
			}
		});
	};

	return { isPending, write, _status };
};

export default useWrite;
