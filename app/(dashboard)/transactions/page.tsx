import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-dvh px-[36px] mt-6">
      <div className="flex items-center justify-between">
        <h4 className="text-[24px] font-nohemi">Transactions</h4>
        <div className="flex items-center gap-4">
          <button className="px-3 h-[36px] text-[#8E35FD] font-dmSans text-sm font-semibold border border-[#8E35FD] bg-white rounded-[8px] flex items-center gap-2">
            <Image src="/svgs/filter.svg" alt="filter" width={16} height={16} />
            Filter
          </button>
          <button className="px-3 h-[36px] text-white font-dmSans text-sm font-semibold bg-[#8E35FD] rounded-[8px] flex items-center gap-2">
            <Image
              src="/svgs/download.svg"
              alt="filter"
              width={16}
              height={16}
            />
            Export CSV{" "}
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-6">
        <table className="w-full border-separate border-spacing-0">
          <tr>
            <td className="bg-[#F0F2F5] text-left p-3 pl-6 font-nohemi text-[#344054] text-xs first:rounded-tl-[10px]">
              Name
            </td>
            <td className="bg-[#F0F2F5] text-left px-6 py-4 font-nohemi text-[#344054] text-xs">
              Amount
            </td>
            <td className="bg-[#F0F2F5] text-left px-6 py-4 font-nohemi text-[#344054] text-xs">
              Campaign Funded
            </td>
            <td className="bg-[#F0F2F5] text-left px-6 py-4 font-nohemi text-[#344054] text-xs">
              Date
            </td>
            <td className="bg-[#F0F2F5] text-left px-6 py-4 font-nohemi text-[#344054] text-xs">
              Status
            </td>
            <td className="bg-[#F0F2F5] w-[44px] rounded-tr-[10px]"></td>
          </tr>

          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b">
                <td className="px-6 py-4 ">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[EADFF9] border-[#D0D5DD] border rounded-[2.7px]"></div>
                    <div className="w-10 h-10 rounded-full bg-[#EADFF9] border border-white flex items-center justify-center">
                      <span className="text-[#8E35FD] text-[15px] font-semibold">
                        N
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-[#101928] font-nohemi">
                        Nono
                      </p>
                      <p className="text-sm text-[#475367] font-inter">
                        0x1000000000223456
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-[#344054] text-sm font-inter px-6 py-4">
                  5,000 MON
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-[2px] rounded-full bg-[#EADFF9] text-[#8E35FD] text-sm font-inter font-medium">
                    {transaction.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-inter">
                  Mar. 04, 2025 | 09:32AM
                </td>
                <td className="px-6 py-4">
                  <span className="px-3 py-[2px] rounded-full bg-[#EADFF9] text-[#8E35FD] text-sm font-inter font-medium">
                    Successful
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] bg-[#Ffff] border borrder-[#E4E7EC]">
                    <Image
                      src="/svgs/dots.svg"
                      alt="more"
                      width={16}
                      height={16}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Sample data
const transactions = [
  { type: "Support a farmer" },
  { type: "Transfer from wallet" },
  { type: "Transfer from wallet" },
  { type: "Support a farmer" },
  { type: "Transfer from wallet" },
  { type: "Transfer from wallet" },
  { type: "Support a farmer" },
  { type: "Transfer from wallet" },
  { type: "Transfer from wallet" },
  // Add more transactions as needed
];
