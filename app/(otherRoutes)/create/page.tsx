"use client";
import { FormInputs } from "@/components/create";
import { useAccount } from "wagmi";
import convert from "@/utils/convertDate";
import CustomToastConatainer from "@/components/general/CustomToastConatainer";
import { useWrite } from "@/utils/hooks";
import { CampaignInput } from "@/types";

const Page = () => {
	const { isPending, write } = useWrite("createCampaign");
	const { isConnected } = useAccount();

	const submit = async (data: FormData) => {
		const objData = Object.fromEntries(data);

		const writeData = {
			title: objData.title as string,
			description: objData.description as string,
			target: Number(objData.target),
			deadline: convert(objData.deadline as string),
			image: objData.image as string,
		};

		write(writeData);
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

export default Page;
