export interface CategoryDataType {
	id: string;
	name: string;
	icon: string;
}

export type WriteType = "createCampaign" | "donateWithMON";

export type InputIdTypes =
	| "name"
	| "title"
	| "description"
	| "target"
	| "deadline"
	| "image";

export interface CampaignInput {
	deadline: number;
	image: string;
	target: number;
	title: string;
	description: string;
}

export interface Campaign extends CampaignInput {
	amountCollected: number;
	donations: number[];
	donators: string[];
	owner: string;
	title: string;
	_id: number;
}

export interface DonateInput {
	id: number;
	amount: number;
}

export type WriteDataType = CampaignInput | DonateInput;
