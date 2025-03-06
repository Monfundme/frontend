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
