import Pagination from "@/components/ui/Pagination";
import { HerbTable } from "@/components/ui/tcm-table/HerbTable"
import { GetHerbJist, HerbJist } from "@/types";
import { useRouter } from "next/router";

const getHerbs = async (page: string) => {

  const apiCall = await fetch(`http://127.0.0.1:8080/tcm/${page}`, { 
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
    console.log(e)
  }
  return (
    <div className="flex justify-center w-full bg-tttt-200">
      <Pagination totalPages={pages.length} currentPage={Number(props.params.pageNumber)}/>
      <HerbTable className="text-primary-400 my-4 border-primary-400 border-2"  pages={pages} herbs={herbs}/>
    </div>
  )
}


