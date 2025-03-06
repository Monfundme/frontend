import Image from "next/image";

const Modal = ({ setToggle }: { setToggle: (arg: boolean) => void }) => {
  return (
    <div
      onClick={() => setToggle(false)}
      className="bg-black/70 h-dvh w-dvw fixed top-0 left-0 grid place-content-center z-[60]"
    >
      <main className=" bg-white text-black w-[400px] h-[300px] relative rounded-lg  ">
        <Image
          src={"/thankYou.gif"}
          alt="thank you"
          fill
          className="rounded-lg"
        />
      </main>
    </div>
  );
};

export default Modal;
