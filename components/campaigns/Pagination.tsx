"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PageType } from "@/types";
import { useGetNumberOfActiveCamp } from "@/utils/hooks";

type Pagers = "Previous" | "Next";

interface PageButtonInterface {
	name: Pagers;
	action: (arg: Pagers) => void;
}
interface Pagination {
	page: PageType;
	setPage: (arg: PageType) => void;
}

const Pagination = ({ page, setPage }: Pagination) => {
	const { numberOfActiveCamp, isPending } = useGetNumberOfActiveCamp();

	const normPage = {
		higherLimit: 24,
		lowerLimit: 0,
		no: 1,
	};

	if (isPending || numberOfActiveCamp < normPage.higherLimit) return;

	const action = (name: Pagers | number) => {
		if (typeof name === "number") {
			setPage(normPage);
		} else {
			if (name === "Previous") {
				const prev: PageType =
					page.no !== 1
						? {
								higherLimit: page.higherLimit - 24,
								lowerLimit: page.lowerLimit - 24,
								no: page.no - 1,
						  }
						: normPage;
				setPage(prev);
			} else {
				if (page.higherLimit > numberOfActiveCamp) return;

				const next = {
					higherLimit: page.higherLimit + 24,
					lowerLimit: page.lowerLimit + 24,
					no: page.no + 1,
				};
				setPage(next);
			}
		}
	};

	return (
		<div className="flex items-center justify-end mt-10">
			<div className=" flex items-center gap-3 ">
				<PageButton
					name="Previous"
					action={action}
				/>
				<p className="px-3 py-1 bg-l_yellow">{page.no}</p>
				<PageButton
					name="Next"
					action={action}
				/>
			</div>
		</div>
	);
};

export default Pagination;

const PageButton = ({ name, action }: PageButtonInterface) => {
	return (
		<button
			className="px-3 py-2 flex items-center gap-1 hover:bg-l_yellow rounded-lg transition-colors ease-linear duration-150 "
			onClick={() => action(name)}>
			{name}
			{name === "Previous" ? (
				<ChevronLeft size={16} />
			) : (
				<ChevronRight size={16} />
			)}
		</button>
	);
};
