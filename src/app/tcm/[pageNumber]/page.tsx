import Pagination from "@/components/ui/Pagination";
import { HerbTable } from "@/components/ui/tcm-table/HerbTable"
import { GetHerbJist, HerbJist } from "@/types";
import { useRouter } from "next/router";

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
    <div className="flex py-4 md:py-8 flex-col items-center w-full bg-tttt-200 min-w-fit">
      <HerbTable className="text-primary-400 border-primary-400 border-2"  pages={pages} herbs={herbs}/>
      <div className="w-full mt-4 md:w-4/5 flex justify-center md:justify-end items-center">
        <Pagination totalPages={pages.length} currentPage={Number(props.params.pageNumber)}/>
      </div>
    </div>
  )
}


