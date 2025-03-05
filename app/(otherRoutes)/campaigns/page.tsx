"use client";
import { useTransition } from "react";
import { FormInputs } from "@/components/create";
import { useAccount } from "wagmi";
import { waitForTransactionReceipt, writeContract } from "wagmi/actions";
import monfund_ABI from "@/components/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { config } from "@/components/web3/config";
import convert from "@/utils/convertDate";
import { toast, Id } from "react-toastify";
import CustomToastConatainer from "@/components/general/CustomToastConatainer";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const page = () => {
	const [isPending, startTransition] = useTransition();
	const { isConnected } = useAccount();
	const { openConnectModal } = useConnectModal();

	let toastId: Id;
	const { address } = useAccount();
	const _config: any = config;

	const submit = async (data: FormData) => {
		startTransition(async () => {
			console.log("approve wallet transaction.");
			toastId = toast.info("Approve wallet transaction ");
			try {
				const objData = Object.fromEntries(data);
				const hash = await writeContract(config, {
					abi: monfund_ABI,
					address: monfund_CA as `0x${string}`,
					functionName: "createCampaign",
					args: [
						address,
						objData.title,
						objData.description,
						Number(objData.targetAmount),
						convert(objData.targetDate as string),
						objData.imageURL,
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
			} catch (error) {
				console.error("TRANSACTION ERROR!", error);
				toastId
					? toast.update(toastId, {
							render: "Error in transaction!",
							type: "error",
							isLoading: false,
							autoClose: 2000,
					  })
					: toast.error("Error in transaction!");
			}
		});
	};

	return (
		<div className=" py-[125px] ">
			<CustomToastConatainer />
			<form
				action={submit}
				className="shadow-xl bg-slate-100 border-[0.5px] border-slate-200 flex flex-col gap-3 p-5 max-w-[800px] mx-auto ">
				<h2 className="text-center text-2xl font-semibold ">
					Create a campaign
				</h2>

				<div className=" grid grid-cols-2 gap-7 ">
					<FormInputs
						id="name"
						placeholder="e.g. John Wrick"
						name="Your name"
						type="text"
					/>
					<FormInputs
						id="title"
						placeholder="e.g. Get me a wife"
						name="Campaign title"
						type="text"
					/>
				</div>

				<div>
					<FormInputs
						id="description"
						name="Description"
						placeholder="Tell us more about your campaign"
						type="textarea"
					/>
				</div>

				<div className=" bg-accent-dark text-white text-center p-4 ">
					You will recieve a 100% of the raised amount
				</div>

				<div className=" grid grid-cols-2 gap-7 ">
					<FormInputs
						id="targetAmount"
						placeholder="e.g. 1,000,000"
						name="Target Amount"
						type="number"
					/>
					<FormInputs
						id="targetDate"
						placeholder="e.g. dd/mm/yy"
						name="Target Date"
						type="date"
					/>
				</div>

				<div className=" ">
					<FormInputs
						id="imageURL"
						placeholder="image url for your campaign"
						name="Image URL"
						type="url"
					/>
				</div>

				{isConnected ? (
					<button
						type="submit"
						disabled={isPending ? true : false}
						className={` ${
							isPending
								? "bg-accent-10"
								: "bg-accent-default  hover:bg-accent-80"
						} text-white rounded-lg w-fit mx-auto  px-5 py-3 duration-150 ease-linear transition-colors shadow-md my-3`}>
						Create campaign
					</button>
				) : (
					<button
						type="button"
						disabled
						className={` disabled:bg-accent-10 text-white rounded-lg w-fit mx-auto  px-5 py-3 duration-150 ease-linear transition-colors shadow-md my-3`}>
						Connect Wallet to creae a campaign
					</button>
				)}
			</form>
		</div>
	);
};

export default page;
