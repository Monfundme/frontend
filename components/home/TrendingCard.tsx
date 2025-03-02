import Image from "next/image";
import Link from "next/link";
import { Wallet } from "lucide-react";

const TrendingCard = () => {
	return (
		<Link
			href="#"
			className=" h-[500px] flex flex-col shadow-xl rounded-t-xl group border-[0.5px] border-slate-200 ">
			<div className="h-[60%] relative rounded-t-xl overflow-hidden -z-10  ">
				<Image
					src={"/images/monadalak.jpeg"}
					alt=""
					className="group-hover:scale-105 transition-all  duration-150 ease-linear"
					fill
					style={{ objectFit: "cover" }}
				/>
			</div>
			<div className=" flex-1 bg-slate-100 rounded-t-xl -mt-2 p-4 flex flex-col gap-2 ">
				<h2 className=" text-xl font-bold leading-5">
					Help mondalak get a wife, That he love&apos;s so much ...
				</h2>
				<p className=" leading-[16px] flex-1 text-black/90">
					We&apos;re trying to get someone for monadalak that would help and be
					his support system ...
				</p>
				<div className=" h-[5px] w-full mt-4 bg-gray-300 relative overflow-hidden">
					<div
						className=" h-full absolute bg-accent-default top-0 left-0 z-10 "
						style={{ width: "84%" }}></div>
				</div>
				<p className="font-semibold ">$50,000 raised | 84% </p>
				<div className=" flex items-center gap-2 ">
					<div className=" p-2 bg-accent-default rounded-full">
						<Wallet
							className=" text-white font-bold "
							size={16}
						/>
					</div>
					<p>0x12...5sd3f</p>
				</div>
			</div>
		</Link>
	);
};

export default TrendingCard;
