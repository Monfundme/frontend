import Link from "next/link";
import TrendingCard from "./TrendingCard";

const Trending = () => {
	return (
		<div className="p-2 lg:p-4 ">
			<main className=" width_to_center mt-[50px] ">
				<h2 className=" text-2xl">Popular campaigns</h2>
				<section className=" grid grid-cols-[repeat(auto-fill,_minmax(300,_1fr))] gap-5 my-5 ">
					{[1, 2, 3].map((i) => (
						<TrendingCard key={i} />
					))}
				</section>
				<div className=" mt-[50px] w-fit mx-auto ">
					<Link
						href={"#"}
						className=" hover:text-accent-default ease-linear duration-150 transition-colors border-2 border-accent-default px-5 py-3 rounded-lg font-bold ">
						Explore all campaigns
					</Link>
				</div>
			</main>
		</div>
	);
};

export default Trending;
