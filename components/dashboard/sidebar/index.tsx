import Image from "next/image";
import MenuLink from "./menuLinks/menuLink";
import { MdDashboard } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { HiDocument, HiDocumentSearch } from "react-icons/hi";
import { IoReceipt, IoSettingsSharp } from "react-icons/io5";
import { BiHelpCircle } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoIosPaper } from "react-icons/io";
import {TbLogout } from "react-icons/tb"

const menuItems = [
  {
    title: "Main",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <GoHome />,
      },
      {
        title: "Campaigns Created",
        path: "/campaigns-created",
        icon: <HiSpeakerWave />,
      },
      {
        title: "Campaigns Donated To",
        path: "/campaigns-donated-to",
        icon: <HiSpeakerWave />,
      },
      {
        title: "Transactions",
        path: "/transactions",
        icon: <IoIosPaper />,
      },
    ],
  },
  {
    title: "Administration",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <IoSettingsSharp />,
      },
     
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className=" w-full flex flex-1 h-full  flex-col justify-between  py-6 bg-white">
      <div className="">
        <div className="w-full ">
          <div className="w-full  flex items-center">
            <div className="flex items-center gap-2 py-2 px-6">
              <Image src="/svgs/logo.svg" width={134} height={30} alt="" />
            </div>
          </div>

          <nav className="mt-6 px-4">
            <ul className="w-full flex flex-col">
              <li className="flex gap-1 flex-col">
                {menuItems
                  .find((menu) => menu.title === "Main")
                  ?.list.map((item) => (
                    <MenuLink item={item} key={item.title}  />
                  ))}
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="flex flex-col ">
        <nav className="px-4 ">
          <ul className="w-full flex flex-col">
            <li className="flex  flex-col pb-3 ">
              {menuItems
                .find((menu) => menu.title === "Administration")
                ?.list.map((item) => (
                  <MenuLink item={item} key={item.title}  />
                ))}
            </li>
          </ul>
        </nav>
        <div className="py-2">
          <div className="py-3">
            <div className="w-full px-6  h-[40px] flex items-center justify-between  ">
              <div className="flex items-center gap-3  ">
                <Image src="/svgs/avatar.svg" width={40} height={40} alt="" />
                <div className="flex flex-col">
                  <h5 className="text-[14px] font-semibold  text-[#101928]">
                    Nono
                  </h5>
                  <h6 className="text-[14px]  text-[#475367]">0x10000111...</h6>
                </div>
              </div>

              <TbLogout size={20} className="text-black" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
