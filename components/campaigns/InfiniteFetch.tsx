"use client";

import { Dispatch, SetStateAction, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteFetch = ({
	limits,
	setLimits,
	isPending,
}: {
	limits: { lowerLimit: number; upperLimit: number };
	setLimits: Dispatch<
		SetStateAction<{ lowerLimit: number; upperLimit: number }>
	>;
	isPending: boolean;
}) => {
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			console.log("this element just entered the Browser... ");

			setLimits({
				lowerLimit: limits.lowerLimit,
				upperLimit: limits.upperLimit + 25,
			});
		}
	}, [inView]);

	return (
		<div
			ref={ref}
			className=" h-[100px] grid place-content-center ">
			{isPending ? "Loading ..." : ""}
		</div>
	);
};

export default InfiniteFetch;
