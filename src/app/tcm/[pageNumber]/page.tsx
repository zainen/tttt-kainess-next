import Pagination from "@/components/ui/Pagination";
import { formatSymbol } from "@/helperFunctions";
import { GetHerbJist, HerbJist } from "@/types";
import Link from "next/link";

const getHerbs = async (page: string) => {
  const apiCall = await fetch(`${process.env.NEXT_PUBLIC_KAINESS_API}/tcm/${page}`, { 
    method: "GET", 
    mode: "cors",
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
  const data: GetHerbJist = await apiCall.json() 
  return data
} 

type Props = {
  params: {
    pageNumber: string;
  }
}

export default async function Page (props: Props) {
  let herbs: HerbJist[] = []
  let pages: number[] = Array.from(Array(328).keys())
  try {
    const data = await getHerbs(`${pages[Number(props.params.pageNumber) - 1]}`)
    herbs = data.herbs;
    pages = data.pages;
  } catch (e) {
    console.log("FAILED WITH ", e)
  }
  return (
    <div className="flex py-4 md:py-16 flex-col items-center w-full bg-tttt-200 min-w-fit">
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          <div className="inline-block min-w-full my-2, align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5">
              <table className={`table-auto text-primary-400 border-primary-400 border-2 overflow-x-scroll scrollbar-none`}>
                <thead className="border-primary-400 border-b-2">
                  <tr>
                    <th className="p-2 border-r-2">TCM Name English</th>
                    <th className="hidden md:table-cell p-2 border-r-2">TCM Name</th>
                    <th className="hidden md:table-cell p-2 border-r-2">Herb Pinyin Name</th>
                    <th className="hidden lg:table-cell p-2 border-r-2">Herb Latin Name</th>
                    <th className="hidden md:table-cell p-2 border-r-2">Properties</th>
                    <th className="p-2 border-r-2">Meridians</th>
                    <th className="p-2 border-r-2">Therapeutic Class English</th>
                    <th className="hidden md:table-cell px-2">Therapeutic Class</th>
                  </tr>
                </thead>
                <tbody>
                  {herbs && herbs.length ? 
                    <>
                      {herbs.map((herb, i) => {
                        return (
                          <tr key={`herb_row_key_${i}`} className="border-b-[1px]">
                            <td className={`border-primary-400 border-r-[1px] py-1 px-2 ${herb.tcm_name_en ?? "bg-gray-700/15"}`}>
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
                            <td className={`hidden md:table-cell border-primary-400 border-r-[1px] py-1 px-2 ${herb.tcm_name ?? "bg-gray-700/15 "}`}>{herb.tcm_name ?? ""}</td>
                            <td className={`hidden md:table-cell border-primary-400 border-r-[1px] py-1 px-2 ${herb.herb_pinyin_name ?? "bg-gray-700/15"}`}>{herb.herb_pinyin_name ?? ""}</td>
                            <td className={`hidden lg:table-cell border-primary-400 border-r-[1px] py-1 px-2 ${herb.herb_latin_name ?? "bg-gray-700/15"}`}>{herb.herb_latin_name ?? ""}</td>
                            <td className={`hidden md:table-cell border-primary-400 border-r-[1px] py-1 px-2 ${herb.properties ?? "bg-gray-700/15"}`}>
                              <div className="flex flex-col">
                                {
                                  formatSymbol(herb.properties ?? '', '; ').map((str, i) => {
                                    return <p key={`property_${i}`}>{str}</p>
                                  })
                                }
                              </div>
                            </td>
                            <td className={`border-primary-400 border-r-[1px] py-1 px-2 ${herb.meridians ?? "bg-gray-700/15"}`}>
                              <div className="flex flex-col">
                                {
                                  formatSymbol(herb.meridians ?? '', '; ').map((str, i) => {
                                    return <p key={`meridian_${i}`}>{str}</p>
                                  })
                                }
                              </div>
                            </td>
                            <td className={`border-primary-400 border-r-[1px] py-1 px-2 ${herb.therapeutic_en_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_en_class ?? ""}</td>
                            <td className={`hidden md:table-cell py-1 px-2 ${herb.therapeutic_cn_class ?? "bg-gray-700/15"}`}>{herb.therapeutic_cn_class ?? ""}</td>
                          </tr>
                        )
                      })}
                    </>
                    : 
                    <></>
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-4 md:pr-16 flex justify-center md:justify-end items-center">
        {/* TODO possibly change pages to next and prev button with a go to page input */}
        <Pagination totalPages={pages.length} currentPage={Number(props.params.pageNumber)}/>
      </div>
    </div>
  )
}


