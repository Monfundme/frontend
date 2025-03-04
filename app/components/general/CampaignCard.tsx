import Image from "next/image";
import Link from "next/link";
import { Wallet } from "lucide-react";

const CampaignCard = ({ isTrending }: { isTrending: boolean }) => {
  return (
    <Link
      href={`/campaigns/${10}`}
      className={` ${
        isTrending ? "h-[500px]" : "h-[300px]"
      } flex flex-col shadow-xl rounded-t-xl group border-[0.5px] border-slate-200 `}
    >
      <div className="h-[60%] relative rounded-t-xl overflow-hidden -z-10  ">
        <Image
          src={"/images/monadalak.jpeg"}
          alt=""
          className="group-hover:scale-105 transition-all  duration-150 ease-linear"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className={` ${
          isTrending ? "gap-2" : "gap-1"
        } flex-1 bg-slate-100 rounded-t-xl -mt-2 p-4 flex flex-col `}
      >
        <h2
          className={`${
            isTrending ? "text-xl leading-5" : "leading-4"
          } font-bold `}
        >
          Help mondalak get a wife, That he loves so much ...
        </h2>
        {isTrending && (
          <p className=" leading-[16px] flex-1 text-black/90">
            We&apos;re trying to get someone for monadalak that would help and
            be his support system ...
          </p>
        )}

        <div className=" h-[5px] w-full mt-4 bg-gray-300 relative overflow-hidden">
          <div className=" h-full absolute bg-accent-default top-0 left-0 z-10 w-[84%] "></div>
        </div>
        <div
          className={` ${
            isTrending ? "" : "text-sm"
          } font-semibold flex items-center gap-2`}
        >
          <p className="flex-1">$50,000 raised</p>
          <p> 84% </p>
        </div>
        <div className=" flex items-center gap-2 ">
          <div className=" p-2 bg-accent-default rounded-full">
            <Wallet
              className=" text-white font-bold "
              size={isTrending ? 16 : 13}
            />
          </div>
          <p className={isTrending ? "" : "text-sm"}>0x12...5sd3f</p>
        </div>
      </div>
    </Link>
  );
};

export default CampaignCard;
