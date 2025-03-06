"use client";

import Image from "next/image";

const ModalChildren = ({ id }: { id: string }) => {
	const url = new URLSearchParams("");
	url.append(
		"text",
		`🚨 Support My Campaign! 🚨 \n\nI’m raising funds on MonFundMe! 🌟 Your donation will help . Click here to support: https://monfundme.vercel.app/campaigns/${id} \n\nEvery contribution counts—please share and spread the word! 🙌`
	);
	return (
		<div className="grid place-content-end gap-4 p-4 text-center h-full w-full relative rounded-md">
			<Image
				loading="eager"
				src={"/images/write.jpg"}
				alt="bg"
				fill
				className="rounded-lg"
			/>
			<div className="relative">
				<p className="text-xl font-extrabold">Campaign created ...</p>
				<a
					className="underline text-white hover:text-accent-default"
					href={`https://x.com/intent/post?${url.toString()}`}>
					Share on X
				</a>
			</div>
		</div>
	);
};

export default ModalChildren;
