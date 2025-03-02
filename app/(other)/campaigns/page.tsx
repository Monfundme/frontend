import { GetCampaigns, SearchForm } from "@/components/campaigns";

const page = () => {
	return (
		<div className=" pt-[100px] lg:pt-[125px] p-3 ">
			<main className=" width_to_center ">
				<h2 className=" text-[35px] font-extrabold  text-center">
					Find fundraising campaigns
				</h2>
				<p className=" text-center">
					Search for campaigns by creator&apos;s address, funding category or
					keyword
				</p>

				<SearchForm />

				<section>
					<h2 className="text-2xl font-semibold my-2 ">Active campaigns</h2>
					<GetCampaigns />
				</section>
			</main>
		</div>
	);
};

export default page;
