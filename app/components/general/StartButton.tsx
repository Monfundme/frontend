import Link from "next/link";

const StartButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/create"
      className={` hover:bg-accent-80 transition-colors ease-linear duration-150 bg-accent-default text-white rounded-lg px-6 py-3 font-semibold ${className}`}
    >
      Start a Monfundme
    </Link>
  );
};

export default StartButton;
