import { PropsWithChildren } from "react";

export const HerbTable = (props: PropsWithChildren<{className?: string;}>) => {
  return (
    <div className={props.className}>{props.children}</div>
  )
};
