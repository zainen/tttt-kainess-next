import { HtmlHTMLAttributes } from "react";

type Props = HtmlHTMLAttributes<{}>

export const Spinner = (props: Props) => <div className="w-fit h-fit -translate-y-5 -translate-x-5"><div className={`border-4 border-t-4 ${props.color} rounded-full w-10 h-10 animate-spin border-solid`}></div></div>;
