import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";

const categories = [
  {
    name: "Overview",
    posts: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
    
    ],
  },
  {
    name: "Popular",
    posts: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      }
    ],
  },
];

export default function MonVotingTab() {
  return (
    <div className="flex ">
      <div className="w-full ">
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="font-dmSans font-medium text-[16px] pb-[15px]  focus:outline-none data-[selected]:text-[#8E35FD]  data-[selected]:border-b data-[selected]:border-[#8E35FD] data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <div className="grid grid-cols-12 gap-[53px]">
            <div className="col-span-8">
              <TabPanels className="mt-3">
                {categories.map(({ name, posts }) => (
                  <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                    <ul>
                      {posts.map((post) => (
                        <li
                          key={post.id}
                          className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5"
                        >
                          <a href="#" className="font-semibold ">
                            <span className="absolute inset-0" />
                            {post.title}
                          </a>
                          <ul
                            className="flex gap-2 text-white/50"
                            aria-hidden="true"
                          >
                            <li>{post.date}</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.commentCount} comments</li>
                            <li aria-hidden="true">&middot;</li>
                            <li>{post.shareCount} shares</li>
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
            </div>
            <div className="col-span-4 border border-[#D9D9D9] w-full p-8 rounded-[23px]">
              <div className="p-4 border border-[#F0F2F5] rounded-[8px]">
                <h5 className="text-[#101928] font-nohemi text-[20px]">
                  Cast your vote here
                </h5>
                <div className="flex gap-4 mt-[9px]">
                  <div className="flex items-center gap-1">
                    <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                      Yes
                    </h5>
                    <Image
                      src="/svgs/yes.svg"
                      alt="yes"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                      No
                    </h5>
                    <Image
                      src="/svgs/no.svg"
                      alt="yes"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                      Abstain
                    </h5>
                    <Image
                      src="/svgs/abstain.svg"
                      alt="yes"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
              <div className="my-4">
                <h5 className="text-[#101928] font-nohemi text-[20px] mb-3">
                  Results
                </h5>
                <div className="px-5 py-6 border border-[#F0F2F5] bg-white rounded-[10px] flex flex-col gap-5">
                  <div className="w-full h-[42px] border border-[#01AD02] bg-[#E7F6EC] rounded-[8px] flex justify-between items-center px-4">
                    <div className="flex items-center gap-1">
                      <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                        Yes
                      </h5>
                      <Image
                        src="/svgs/yes.svg"
                        alt="yes"
                        width={20}
                        height={20}
                      />
                    </div>
                    <h5 className="text-sm font-dmSans font-semibold">
                      256.67%
                    </h5>
                  </div>
                  <div className="w-full h-[42px] border border-[#DF1C2F] bg-[#FEE4E6] rounded-[8px] flex justify-between items-center px-4">
                    <div className="flex items-center gap-1">
                      <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                        No
                      </h5>
                      <Image
                        src="/svgs/no.svg"
                        alt="yes"
                        width={20}
                        height={20}
                      />
                    </div>
                    <h5 className="text-sm font-dmSans font-semibold">
                      256.67%
                    </h5>
                  </div>
                  <div className="w-full h-[42px] border border-[#98A2B3] bg-[#F9FAFB] rounded-[8px] flex justify-between items-center px-4">
                    <div className="flex items-center gap-1">
                      <h5 className="text-[#475367] font-inter text-[18px] font-semibold">
                        Abstain
                      </h5>
                      <Image
                        src="/svgs/abstain.svg"
                        alt="yes"
                        width={20}
                        height={20}
                      />
                    </div>
                    <h5 className="text-sm font-dmSans font-semibold">
                      256.67%
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabGroup>
      </div>
    </div>
  );
}
