<<<<<<< HEAD
export interface categoryDataType {
	id: string;
	name: string;
	icon: string;
=======
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
>>>>>>> 47529f7356aa35aeb06d83c094366cfc4c016a7a
}
