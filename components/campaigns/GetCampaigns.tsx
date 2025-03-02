import { CampaignCard } from "../general";

const GetCampaigns = () => {
	const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

	return (
		<div className=" grid grid-cols-2 gap-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] lg:gap-5">
			{data.map((i) => (
				<CampaignCard key={i} />
			))}
		</div>
	);
};

export default GetCampaigns;
