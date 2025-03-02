import { categoryData } from "@/constant";
import { categoryDataType } from "@/types";
import Link from "next/link";

const HelpCategory = () => {
	return (
		<main className="my-[50px] width_to_center p-2 lg:p-4">
			<h2 className="text-center font-semibold text-[50px] ">Monfund Helps</h2>
			<main className=" grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  ">
				{categoryData.map((category: categoryDataType) => (
					<Link
						href={"#"}
						key={category.id}
						className=" grid place-content-center gap-2 text-center ">
						<div className="relative">
							<img
								src={category.icon}
								alt="img"
								className="size-[200px]"
								// fill
								// style={{ objectFit: "contain" }}
							/>
						</div>
						<p className=" font-semibold ">{category.name}</p>
					</Link>
				))}
			</main>
		</main>
	);
};

export default HelpCategory;
