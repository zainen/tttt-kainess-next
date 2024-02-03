'use client';

import { useEffect, useState } from "react";
import { Dropdown } from "../ui/Dropdown";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  meridiansOptions: string[]
  meridianParams: string[]
}

export const SearchMeridians = ({meridiansOptions, meridianParams}: Props) => {
  const [meridians, setMeridians] = useState<Record<string, boolean>>({})
  const router = useRouter();

  const makeParams = (): string => {
    const meridianArr = Object.entries(meridians).reduce<string[]>((acc, [s, v]) => {
      if (v) {
        acc.push(`meridians=${s}`)
      }
      return acc
    }, [])
    return meridianArr.join("&")
  }

  useEffect(() => {
    const newMeridians = meridiansOptions.reduce<Record<string,boolean>>((acc, merid) => {
      acc[merid] = meridianParams.includes(merid);
      return acc;
    }, {});
  
    setMeridians(newMeridians);
  }, [meridianParams, meridiansOptions]);
  return (
    <Dropdown title="Filter">

      {Object.keys(meridians).map((meridian) => {
        console.log(meridians)
        return (
          <div key={meridian}>
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
              <input
                className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 accent-primary-300 text-tttt-200 rounded-full border-2 border-solid border-neutral-300"
                type="checkbox"
                checked={meridians[meridian]}
                id={`meridian_input_${meridian}`} 
                value={meridian}
                onChange={(e) => setMeridians(prev => {
                  return {...prev, [meridian]: !prev[meridian]}
                })}
                />
                <label
                  className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
                  htmlFor={`meridian_label_${meridian}`}>
                  {meridian}
                </label>
            </div>
          </div>
        )
      })}
      <div className="w-full flex justify-end">
        <button className="px-4 py-2 bg-primary-200 text-accent-100 rounded-md font-bold mb-2">
          <Link href={`/tcm/1?${makeParams()}`}>
            Go
          </Link>
          </button>
      </div>
    </Dropdown>
  )
}