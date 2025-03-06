"use client";
import { Campaign } from "@/types";
import CountBox from "../CountBox";
import { useGetOneCampaign } from "@/utils/hooks";
import { Wallet } from "lucide-react";
import Fund from "../Fund";

const Main = ({ id }: { id: string }) => {
  const { campaign, isPending, refetch } = useGetOneCampaign(id);
  const dayConvert = 24 * 60 * 60;
  const _campaign = campaign as Campaign;

  console.log("campaign----", campaign);

  if (isPending) {
    return <div className=" grid place-content-center h-dvh ">Loading...</div>;
  }

  if (!campaign)
    return (
      <div className=" m-[100px] text-center text-2xl font-semibold min-h-dvh">
        Can&apos;t find campaign
      </div>
    );

  return (
    <main className=" max-w-[1200px] mx-auto ">
      <div className=" flex md:flex-row flex-col mt-10 gap-[30px]">
        <div className="flex-1 flex-col">
          <div className=" overflow-hidden rounded-xl ">
            <img
              src={_campaign.image}
              fetchPriority="high"
              alt="campaign"
              className="w-full h-[410px] object-cover rounded-xl transition-all hover:scale-110 duration-150 ease-linear "
            />
          </div>
          <div className="relative w-full h-[5px] bg-gray-300 mt-2">
            <div className="absolute h-full bg-accent-default w-[84%]"></div>
          </div>
        </div>

        <div className="flex md:w-[150px] w-full flex-wrap justify-between gap-[30px]">
          <CountBox
            title="Days Left"
            value={Math.floor(
              (Number(_campaign.deadline) - Date.now() / 1000) / dayConvert
            )}
          />
          <CountBox
            title={`Mon Raised `}
            value={Number(_campaign.amountCollected).toLocaleString()}
          />
          <CountBox title="Total Donors" value={_campaign.donators.length} />
        </div>
      </div>

      <div className="mt-[60px] grid lg:grid-cols-[55%_auto] gap-6 ">
        <div className="flex-[2] flex flex-col gap-[40px]">
          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
              Creator
            </h4>

            <div className="mt-[20px] flex flex-row items-center flex-wrap gap-[14px]">
              <div className=" bg-slate-300 p-2 rounded-full text-white">
                <Wallet />
              </div>
              <div>
                <h4 className="font-epilogue font-semibold text-[14px] text-black break-all">
                  {_campaign.owner}
                </h4>
                <p className="mt-[4px] font-epilogue font-normal text-[12px] text-[#808191]">
                  10 Campaigns
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
              Story
            </h4>

            <div className="mt-[20px]">
              <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                {_campaign.description}
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-epilogue font-semibold text-[18px] text-black uppercase">
              Donators
            </h4>

            <div className="mt-[20px]">
              {_campaign.donators.length > 0 ? (
                _campaign.donators.map((address, index) => (
                  <div
                    key={`${address}-${index}`}
                    className="flex justify-between items-center gap-4"
                  >
                    <p className="font-epilogue font-normal text-[16px] text-[#b2b3bd] leading-[26px] break-ll">
                      {address}
                    </p>
                  </div>
                ))
              ) : (
                <p className="font-epilogue font-normal text-[16px] text-[#808191] leading-[26px] text-justify">
                  No donators yet. Be the first!
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <Fund id={id} refetch={refetch} />
        </div>
      </div>
    </main>
  );
};

export default Main;
