import { categoryData } from "@/constant";
import { CategoryDataType } from "@/types";

const HelpCategory = () => {
  return (
    <main className="my-[50px] width_to_center p-2 lg:p-4">
      <h2 className="text-center font-semibold text-[50px] ">Monfund Helps</h2>
      <main className=" grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]  ">
        {categoryData.map((category: CategoryDataType) => (
          <div
            key={category.id}
            className=" grid place-content-center gap-2 text-center group "
          >
            <div className="relative">
              <img
                src={category.icon}
                alt="img"
                className="size-[200px] group-hover:scale-105 ease-linear duration-150 transition-all "
                // fill
                // style={{ objectFit: "contain" }}
              />
            </div>
            <p className=" font-semibold ">{category.name}</p>
          </div>
        ))}
      </main>
    </main>
  );
};

export default HelpCategory;
