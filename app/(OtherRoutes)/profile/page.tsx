"use client";
import { redirect } from "next/navigation";

const page = () => {
	return redirect("/profile/campaigns");
};

export default page;
