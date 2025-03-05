interface ObjData {
	targetDate: string | number | Date;
}

const convert = (date: string): number => {
	const objData: ObjData = {
		targetDate: date,
	};

	const timestampInSeconds = Math.floor(
		new Date(objData.targetDate).getTime() / 1000
	);

	return timestampInSeconds;
};

export default convert;
