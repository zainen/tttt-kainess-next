import { PropsWithChildren } from "react";
import { buttonColour } from "@/helperFunctions";
import { ColourTypes } from "@/types";

export const Button = (
  props: PropsWithChildren<{
    onClick?: () => void;
    image?: string;
    className?: string;
    colour?: ColourTypes;
    type: 'submit' | 'button'
  }>
) => {
  return (
    <div
      className={`border rounded-lg ${buttonColour(props.colour)} ${
        props.className
      }`}
    >
      <button className="w-full h-full py-1 font-semibold" type={props.type} onClick={props.onClick ?? (() => {})}>
        {props.children}
      </button>
    </div>
  );
};