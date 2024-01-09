"use client";
import { formatSymbol } from "@/helperFunctions";
import { HerbJist } from "@/types";
import Link from "next/link";

type HerbRowProps = {
  herb: HerbJist
}

const HerbRow = ({herb}: HerbRowProps) => {
  return (
    <tr className="flex justify-center border-primary-300 border-b-[1px] last:border-b-0">
      <td className={`flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.tcm_name_en ?? "bg-gray-700/15"}`}>
        <Link href={`/tcm/herb/${herb.id}`} className="underline">
          {herb.tcm_name_en ?? ""}
        </Link>
        </td>
      <td className={`hidden md:flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.tcm_name ?? "bg-gray-700/15 "}`}>{herb.tcm_name ?? ""}</td>
      <td className={`hidden md:flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.herb_pinyin_name ?? "bg-gray-700/15"}`}>{herb.herb_pinyin_name ?? ""}</td>
      <td className={`hidden lg:flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.herb_latin_name ?? "bg-gray-700/15"}`}>{herb.herb_latin_name ?? ""}</td>
      <td className={`hidden md:flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.properties ?? "bg-gray-700/15"}`}>
        <div className="flex flex-col">
          {
            formatSymbol(herb.properties ?? '', ';').map((str, i) => {
              return <p key={`property_${i}`}>{str}</p>
            })
          }
        </div>
      </td>
      <td className={`flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.meridians ?? "bg-gray-700/15"}`}>
        <div className="flex flex-col">
          {
            formatSymbol(herb.meridians ?? '', ';').map((str, i) => {
              return <p key={`meridian_${i}`}>{str}</p>
            })
          }
        </div>
      </td>
      <td className={`flex flex-1 items-center border-primary-400 border-solid border-r-[1px] py-1 px-2 ${herb.therapeutic_en_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_en_class ?? ""}</td>
      <td className={`hidden md:flex flex-1 items-center py-1 px-2 ${herb.therapeutic_cn_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_cn_class ?? ""}</td>
    </tr>
  )
}

export default HerbRow