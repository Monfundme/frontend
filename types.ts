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
  deadline: number;
  image: string;
  target: bigint;
  title: string;
  description: string;
  function: "createCampaign";
}

export interface Campaign extends CampaignInput {
  amountCollected: bigint;
  donations: bigint[];
  donators: string[];
  owner: string;
  title: string;
  _id: string;
}

export interface DonateInput {
  id: number;
  amount: bigint;
  function: "donateWithMON";
}

export type WriteDataType = CampaignInput | DonateInput;
