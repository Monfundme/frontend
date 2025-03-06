import Link from "next/link";

const StartButton = ({ className }: { className?: string }) => {
	return (
		<Link
			href="/create"
			className={` accent_with_fade text-white rounded-lg px-6 py-3 font-semibold ${className}`}>
			Start a Monfundme
		</Link>
	);
};

export default StartButton;
