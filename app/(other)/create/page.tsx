<<<<<<< HEAD
import { FormInputs } from "@/components/create";

const page = () => {
	return (
		<div className=" py-[125px] ">
			<form
				action="#"
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

				<button
					type="submit"
					className=" text-white bg-accent-default rounded-lg w-fit mx-auto hover:bg-accent-80 px-5 py-3 duration-150 ease-linear transition-colors shadow-md my-3 ">
					Create campaign
				</button>
			</form>
		</div>
	);
=======
"use client";
import { FormInputs } from "@/components/create";
import { useAccount, useWriteContract } from "wagmi";
import monfund_ABI from "@/components/web3/abi/monfund_ABI";
import { monfund_CA } from "@/constant";
import { config } from "@/components/web3/config";
import { waitForTransactionReceipt } from "viem/actions";
import convert from "@/utils/convertData";

const page = () => {
  const { writeContractAsync } = useWriteContract();
  const { address } = useAccount();

  const _config: any = config;

  const submit = async (data: FormData) => {
    try {
      const objData = Object.fromEntries(data);

      const targetDate = objData.targetDate;
      const hash = await writeContractAsync({
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
      const res = await waitForTransactionReceipt(_config, { hash });
      console.log("transaction --- ", res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" py-[125px] ">
      <form
        action={submit}
        className="shadow-xl bg-slate-100 border-[0.5px] border-slate-200 flex flex-col gap-3 p-5 max-w-[800px] mx-auto "
      >
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

        <button
          type="submit"
          className=" text-white bg-accent-default rounded-lg w-fit mx-auto hover:bg-accent-80 px-5 py-3 duration-150 ease-linear transition-colors shadow-md my-3 "
        >
          Create campaign
        </button>
      </form>
    </div>
  );
>>>>>>> 47529f7356aa35aeb06d83c094366cfc4c016a7a
};

export default page;
