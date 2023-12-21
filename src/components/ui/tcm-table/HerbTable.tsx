"use client";

import useTcmHerbJist from "@/hooks/useTcmHerbJist";
import HerbRow from "./HerbRow";



export const HerbTable = (props: {className?: string;}) => {
  const {herbIndexes, herbList, isError, isLoading} = useTcmHerbJist();
  return (
    <table className={props.className}>
      <thead>
        <tr className="flex flex-1 justify-between">
          <th>TCM Name English</th>
          <th>TCM Name</th>
          <th>Herb Pinyin Name</th>
          <th>Herb Latin Name</th>
          <th>Properties</th>
          <th>Meridians</th>
          <th>Therapeutic Class English</th>
          <th>Therapeutic Class</th>
        </tr>
      </thead>
      <tbody>
        {herbList && herbList.length ? 
        <>
          {herbList.map((herb, i) => {
            return (<HerbRow key={`herb_key_${i}`}  herb={herb} />)
          })}
        </>
          : 
          <></>
         }
      </tbody>
    </table>
  )
};
