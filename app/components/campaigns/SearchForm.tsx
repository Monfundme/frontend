"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search } from "lucide-react";

const SearchForm = () => {
  const router = useRouter();
  const params = useSearchParams();
  const getSearch = params.get("search");
  const [search, setSearch] = useState<string>(
    getSearch ? getSearch.toString() : ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams();
      params.append("search", search);
      router.replace(`/campaigns?${params.toString()}`);
    }, 500);

    return () => clearInterval(timer);
  }, [search]);

  return (
    <form className=" flex items-center gap-2 bg-l_yellow text-[#252525] w-[400px] px-3 rounded-lg mx-auto my-7 ">
      <Search size={16} />
      <input
        type="text"
        value={search}
        disabled
        autoComplete="off"
        placeholder="Search feature incoming..."
        className=" placeholder:text-black/70 p-2 bg-inherit flex-1 focus:outline-none "
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
