export interface CategoryDataType {
	id: string;
	name: string;
	icon: string;
}

export type InputIdTypes =
	| "name"
	| "title"
	| "description"
	| "target"
	| "deadline"
	| "image";

export interface CampaignInput {
	name: string;
	deadline: number;
	image: string;
	targetAmount: bigint;
	title: string;
	description: string;
	function: "createCampaign";
}

export interface Donation {
	donator_id: string;
	amount: bigint;
	id?: string;
	timestamp?: string;
}

export interface Campaign extends CampaignInput {
	owner_id: string;
	currentAmount: bigint;
	donations: Donation[] | [];
	owner: string;
	title: string;
	id: string;
}

export interface DonateInput {
	id: string;
	amount: bigint;
	function: "donateWithMON";
}

export type WriteDataType = CampaignInput | DonateInput;
