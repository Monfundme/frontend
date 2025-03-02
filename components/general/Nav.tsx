import { Search } from "lucide-react";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className="fixed top-0 w-full p-2 lg:p-4 bg-background z-50 shadow-xl ">
			<main className="flex items-center justify-between gap-2 width_to_center ">
				<Link
					href="#"
					className="flex items-center gap-1">
					<Search />
					<p>Search</p>
				</Link>

				<figcaption>
					<p className=" text-accent-default font-extrabold ">MONFUNDME</p>
				</figcaption>

				<button className=" hover:text-accent-default ease-linear duration-150 transition-colors border-2 px-4 py-2 border-accent-default rounded-lg font-bold ">
					connect wallet
				</button>
			</main>
		</nav>
	);
};

export default Nav;
