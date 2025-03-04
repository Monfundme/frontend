const CountBox = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col items-center w-[150px] cursor-default ">
      <h4 className="font-epilogue font-bold text-[30px] text-accent-default  p-3 bg-gray-300 rounded-t-[10px] w-full text-center ">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] text-[#cecfda] bg-slate-600 px-3 py-2 w-full rouned-b-[10px] text-center shadow-xl">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
