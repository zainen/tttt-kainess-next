import HerbRow from "./HerbRow";
import { HerbJist } from "@/types";

type Props = {
  className?: string;
  herbs: HerbJist[];
  pages: number[]
};

export const HerbTable = (props:Props) => {
  return (
    <div className="relative flex flex-col  w-full md:w-4/5 min-w-fit">
      <table className={`table-auto ${props.className} overflow-x-scroll scrollbar-none table-auto`}>
        <thead className="border-primary-400 border-b-2">
          <tr className="flex">
            <th className="flex px-2 items-center flex-1 border-r-2 py-2">TCM Name English</th>
            <th className="hidden md:flex px-2 items-center flex-1 border-r-2 py-2">TCM Name</th>
            <th className="hidden md:flex px-2 items-center flex-1 border-r-2 py-2">Herb Pinyin Name</th>
            <th className="hidden lg:flex px-2 items-center flex-1 border-r-2 py-2">Herb Latin Name</th>
            <th className="hidden md:flex px-2 items-center flex-1 border-r-2 py-2">Properties</th>
            <th className="flex px-2 items-center flex-1 border-r-2 py-2">Meridians</th>
            <th className="flex px-2 items-center flex-1 border-r-2 py-2">Therapeutic Class English</th>
            <th className="hidden md:flex px-2 items-center flex-1">Therapeutic Class</th>
          </tr>
        </thead>
        <tbody>
          {props.herbs && props.herbs.length ? 
          <>
            {props.herbs.map((herb, i) => {
              return <HerbRow key={`herb_key_${i}`}  herb={herb} />
            })}
          </>
            : 
            <></>
          }
        </tbody>
      </table>
    </div>
  )
};
