import { InputIdTypes } from "@/types";
import { HTMLInputTypeAttribute } from "react";

interface FormInputInterface {
  id: InputIdTypes;
  name: string;
  type: HTMLInputTypeAttribute | "textarea";
  placeholder: string;
}

const FormInputs = ({ id, name, type, placeholder }: FormInputInterface) => {
  return (
    <label htmlFor={id}>
      <p>
        {name} <span className=" text-accent-default ">*</span>
      </p>
      {type === "textarea" ? (
        <textarea
          required
          placeholder={placeholder}
          className="px-4 py-2 w-full border border-slate-300 rounded-lg mt-1 h-[100px] "
        />
      ) : (
        <input
          required
          type={type}
          placeholder={placeholder}
          className={`px-4 py-2 w-full border border-slate-300 rounded-lg mt-1`}
        />
      )}
    </label>
  );
};

export default FormInputs;
