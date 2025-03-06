"use client";
import { useConnectModal } from "@rainbow-me/rainbowkit";

const ConnectModal = () => {
	const { openConnectModal } = useConnectModal();

	return (
		<div className="fixed w-dvw h-dvh top-0 right-0 z-[60] bg-white grid place-content-center  ">
			<main className=" p-[50px] bg-white shadow-lg rounded-lg text-center border-[0.5px] border-accent-10">
				<p>Connect wallet to view profile</p>

				<button
					onClick={openConnectModal}
					className=" hover:text-accent-default ease-linear duration-150 transition-colors border-2 px-4 py-2 border-accent-default rounded-lg font-bold mt-5 ">
					connect wallet
				</button>
			</main>
		</div>
	);
};

export default ConnectModal;
