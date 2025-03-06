"use client";
import { AddressSection } from "@/components/profile";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
	const pathName = usePathname();

	return (
		<div className="py-[100px] lg:pt-[125px] p-3 min-h-dvh">
			<main className=" width_to_center ">
				<AddressSection pathName={pathName} />
				<div className=" my-4">{children}</div>
			</main>
		</div>
	);
};

export default Layout;
