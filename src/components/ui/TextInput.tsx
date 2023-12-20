import { Dispatch, SetStateAction } from "react";

export const TextInput = ({
  name,
  label,
  className,
  borderColour,
  handler,
  textArea = false,
  containerClassName,
  state,
  setState,
  required,
}: {
  name: string;
  handler?: (value: string) => void;
  label?: string;
  className?: string;
  borderColour:  string;
  textArea?: boolean;
  containerClassName?: string;
  state?: string;
  setState?: Dispatch<SetStateAction<string>>;
  required?: boolean;
}) => {
  return (
    <>
      {textArea ? (
        <div className={`flex flex-col w-full ${containerClassName}`}>
          <label htmlFor={name} className="font-semibold flex">
            <p className="pr-2">{label}</p>
            {required && <p className="font-bold">*</p>}
          </label>
          <textarea
            required={required}
            name={name}
            value={state}
            className={`resize-none md:h-36 h-20  border-b focus:outline-none border-b-${borderColour}-100 overflow-visible scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300 ${className}`}
            onChange={(e) => setState ?  setState(e.target.value) : null}
          />
        </div>
      ) : (
        <div className={`flex flex-col w-full ${containerClassName}`}>
          <label htmlFor={name} className="font-semibold flex">
            <p className="pr-2">{label}</p>
            {required && <p className="font-bold">*</p>}
          </label>
          <input
            required={required}
            name={name}
            value={state}
            className={` border-b focus:outline-none border-b-${borderColour}-100 ${className}`}
            type="text"
            onChange={handler ? (e) => handler(e.target.value) : (e) => setState ? setState(e.target.value) : null}
          />
        </div>
      )}
    </>
  );
};