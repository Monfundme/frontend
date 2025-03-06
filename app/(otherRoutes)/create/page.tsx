"use client";
import { FormInputs, ModalChildren } from "@/components/create";
import { useAccount } from "wagmi";
import { convertDate } from "@/utils/helpers";
import { useWrite, useCheckChain } from "@/utils/hooks";
import { CampaignInput } from "@/types";
import { parseEther } from "viem";
import { Modal } from "@/components/general";
import { useState } from "react";

const Page = () => {
	const [toggle, setToggle] = useState<boolean>(false);
	const { isPending, write, id } = useWrite();
	const { isConnected } = useAccount();
	const { checkAndSwitch } = useCheckChain();

	const submit = async (data: FormData) => {
		await checkAndSwitch();

		const objData = Object.fromEntries(data);

		const writeData: CampaignInput = {
			name: objData.name as string,
			title: objData.title as string,
			description: objData.description as string,
			target: parseEther(objData.target as string),
			deadline: convertDate(objData.deadline as string),
			image: objData.image as string,
			function: "createCampaign",
		};

		write(writeData, setToggle);
	};

	return (
		<div className=" py-[125px] ">
			{toggle && (
				<Modal setToggle={setToggle}>
					<ModalChildren id={id} />
				</Modal>
			)}
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
						id="target"
						placeholder="e.g. 1,000,000"
						name="Target Amount"
						type="number"
					/>
					<FormInputs
						id="deadline"
						placeholder="e.g. dd/mm/yy"
						name="Target Date"
						type="date"
					/>
				</div>

				<div className=" ">
					<FormInputs
						id="image"
						placeholder="image url for your campaign"
						name="Image URL"
						type="url"
					/>
				</div>

				{isConnected ? (
					<button
						type="submit"
						disabled={isPending ? true : false}
						className={` disabled:bg-accent-10 bg-accent-default hover:bg-accent-80 text-white rounded-lg w-fit mx-auto  px-5 py-3 duration-150 ease-linear transition-colors shadow-md my-3`}>
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

export default Page;
