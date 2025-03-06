import { formatEther, parseEther } from "viem";

interface ObjData {
	targetDate: string | number | Date;
}

export const convertDate = (date: string): number => {
	const objData: ObjData = {
		targetDate: date,
	};

	const timestampInSeconds = Math.floor(
		new Date(objData.targetDate).getTime() / 1000
	);

	return timestampInSeconds;
};

export const getPercentage = (
	targetAmount: bigint,
	totalDonated: bigint
): number => {
	const f_targetAmount = Number(formatEther(targetAmount));
	const f_totalDonated = Number(formatEther(totalDonated));
	const percentage = (f_totalDonated / f_targetAmount) * 100;
	return percentage;
};
