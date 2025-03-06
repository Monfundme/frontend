import React, { Suspense } from "react";
import { Main } from "@/components/campaigns";

type Params = Promise<{ id: string }>;

const Funding = async ({ params }: { params: Params }) => {
  const id = (await params).id;

  return (
    <div className="  py-[120px] px-3 min-h-dvh ">
      <Suspense
        fallback={
          <div className=" grid place-content-center h-dvh ">Loading...</div>
        }
      >
        <Main id={id} />
      </Suspense>
    </div>
  );
};

export default Funding;
