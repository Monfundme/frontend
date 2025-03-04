export interface CategoryDataType {
  id: string;
  name: string;
  icon: string;
}

export type InputIdTypes =
  | "name"
  | "title"
  | "description"
  | "targetAmount"
  | "targetDate"
  | "imageURL";

export interface Campaign {
  amountCollected: number;
  deadline: number;
  description: string;
  donations: number[];
  donators: string[];
  image: string;
  owner: string;
  target: number;
  title: string;
  _id: number;
}
