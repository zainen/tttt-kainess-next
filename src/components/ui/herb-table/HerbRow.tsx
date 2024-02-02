import { HerbJist } from "@/types";
import Link from "next/link";
import { formatSymbol } from "@/helperFunctions";

interface Props  {
  herbs: HerbJist[]
}

export const HerbRow = (props: Props) => {
  return (
    <>
      {props.herbs.map((herb, i) => {
        return (
          <tr key={`herb_row_key_${i}`} className="border-b-[1px]">
            <td className={`border-accent-200 border-r-[1px] py-1 px-2 ${herb.tcm_name_en ?? "bg-gray-700/15"}`}>
              <Link href={`/tcm/herb/${herb.id}`} className="underline">
                <div className=" flex flex-col">
                  {
                    formatSymbol(herb.tcm_name_en ?? '', ';').map((str, i) => {
                      return <p key={`english_name_${i}`}>{str}</p>
                    })
                  }
              </div>
              </Link>
            </td>
            <td className={`hidden md:table-cell border-accent-200 border-r-[1px] py-1 px-2 ${herb.tcm_name ?? "bg-gray-700/15 "}`}>{herb.tcm_name ?? ""}</td>
            <td className={`hidden md:table-cell border-accent-200 border-r-[1px] py-1 px-2 ${herb.herb_pinyin_name ?? "bg-gray-700/15"}`}>{herb.herb_pinyin_name ?? ""}</td>
            <td className={`hidden lg:table-cell border-accent-200 border-r-[1px] py-1 px-2 ${herb.herb_latin_name ?? "bg-gray-700/15"}`}>{herb.herb_latin_name ?? ""}</td>
            <td className={`hidden md:table-cell border-accent-200 border-r-[1px] py-1 px-2 ${herb.properties ?? "bg-gray-700/15"}`}>
              <div className="flex flex-col">
                {
                  formatSymbol(herb.properties ?? '', '; ').map((str, i) => {
                    return <p key={`property_${i}`}>{str}</p>
                  })
                }
              </div>
            </td>
            <td className={`border-accent-200 border-r-[1px] py-1 px-2 ${herb.meridians ?? "bg-gray-700/15"}`}>
              <div className="flex flex-col">
                {
                  formatSymbol(herb.meridians ?? '', '; ').map((str, i) => {
                    return <p key={`meridian_${i}`}>{str}</p>
                  })
                }
              </div>
            </td>
            <td className={`border-accent-200 border-r-[1px] py-1 px-2 ${herb.therapeutic_en_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_en_class ?? ""}</td>
            <td className={`hidden md:table-cell py-1 px-2 ${herb.therapeutic_cn_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_cn_class ?? ""}</td>
          </tr>
        )
      })}
    </>
  )
}