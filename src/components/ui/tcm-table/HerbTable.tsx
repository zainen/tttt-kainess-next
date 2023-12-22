"use client";

import useTcmHerbJist from "@/hooks/useTcmHerbJist";
import HerbRow from "./HerbRow";



export const HerbTable = (props: {className?: string;}) => {
  const {herbIndexes, herbList, isError, isLoading} = useTcmHerbJist();
  return (
    <table className={`table-auto ${props.className}`}>
      <thead className="border-primary-400 border-b-2">
        <tr className="flex">
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">TCM Name English</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">TCM Name</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">Herb Pinyin Name</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">Herb Latin Name</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">Properties</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">Meridians</th>
          <th className="flex px-4 items-center flex-1 border-r-2 py-2">Therapeutic Class English</th>
          <th className="flex px-4 items-center flex-1">Therapeutic Class</th>
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
