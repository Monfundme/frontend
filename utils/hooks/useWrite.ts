"use client";
import { useTransition } from "react";
import { useAccount } from "wagmi";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";
import monfund_ABI from "@/components/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { config } from "@/components/web3/config";
import { toast, Id } from "react-toastify";
import { CampaignInput } from "@/types";

const useWrite = () => {
	const [isPending, startTransition] = useTransition();
	const { address } = useAccount();

	let toastId: Id;

	const _config: any = config;

	const write = (writeData: CampaignInput) => {
		startTransition(async () => {
			console.log("approve wallet transaction.");
			toastId = toast.info("Approve wallet transaction ");
			try {
				const hash = await writeContract(config, {
					abi: monfund_ABI,
					address: monfund_CA as `0x${string}`,
					functionName: "createCampaign",
					args: [
						address,
						writeData.title,
						writeData.description,
						Number(writeData.target),
						writeData.deadline,
						writeData.image,
					],
				});

				console.log("Waiting for tx to be mined", hash);
				toastId = toast.loading("Transaction pending ...");

				const res = await waitForTransactionReceipt(_config, { hash });
				console.log("transaction --- ", res);

				console.log("Transaction successful!");
				toast.update(toastId, {
					render: "Transaction successful!",
					type: "success",
					isLoading: false,
					autoClose: 2000,
				});
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

	return { isPending, write };
};

export default useWrite;
