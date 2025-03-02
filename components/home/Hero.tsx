import { DM_Serif_Text, Love_Light } from "next/font/google";
import Image from "next/image";

const dm = DM_Serif_Text({
	subsets: ["latin"],
	weight: ["400"],
});

const ll = Love_Light({
	subsets: ["latin"],
	weight: "400",
});

const Hero = () => {
	console.log("hello!!!");

	return (
		<main>
			<div className=" h-dvh lg:max-h-[1000px] relative bg-gradient-to-b from-white/5 to-black p-2 grid place-content-center text-center ">
				<Image
					className="-z-10"
					src="/images/loveChain.jpg"
					alt="img"
					fill
					style={{ objectFit: "cover", background: "black" }}
				/>

				<section className=" mx-auto text-white  ">
					<h2
						className={`${dm.className} text-[30px] leading-[30px] lg:text-[60px] lg:leading-[60px]`}>
						Leading web3 <br /> crowdfunding platform
					</h2>

					<p className={` ${ll.className} text-[20px] lg:text-[50px] `}>
						Built by Nads to support the world
					</p>

					<button className=" hover:bg-accent-80 transition-colors ease-linear duration-150 bg-accent-default text-white rounded-lg px-6 py-3 my-4 font-semibold ">
						Start a Monfundme
					</button>
				</section>
			</div>
		</main>
	);
};

export default Hero;
