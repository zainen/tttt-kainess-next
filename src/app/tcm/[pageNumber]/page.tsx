import Pagination from "@/components/ui/Pagination";
import { HerbRow } from "@/components/ui/herb-table/HerbRow"
import { GetHerbJist, HerbJist } from "@/types";

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
    const data = await getHerbs(`${pages[Number(props.params.pageNumber)]}`)
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
            <div className="overflow-scroll scrollbar-none shadow ring-1 ring-black ring-opacity-5">
              <table className='table-auto text-primary-400 border-primary-400 border-x-[1px] overflow-x-scroll scrollbar-none'>
                <thead className="border-primary-400 border-b-2 border-t-[1px] position-sticky">
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
                      <HerbRow herbs={herbs}/>
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


