import { SearchMeridians } from "@/components/tcm/Search";
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

const getHerbsFilter = async (page: string, meridianFilter: string[]) => {
  const apiCall = await fetch(`${process.env.NEXT_PUBLIC_KAINESS_API}/tcm/${page}/meridian-filter?meridians=${meridianFilter.join(',')}`, { 
    method: "GET", 
    mode: "cors",
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
  const data: GetHerbJist = await apiCall.json() 
  return data
} 

const getMeridianOptions = async () => {
  const apiCall = await fetch(`${process.env.NEXT_PUBLIC_KAINESS_API}/tcm/search/meridians`, { 
    method: "GET", 
    mode: "cors",
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
  const data: {meridians: string[]} = await apiCall.json() 
  return data.meridians
} 

type Props = {
  params: {
    pageNumber: string;
  }
  searchParams: {
    meridians?: string | string[];
  }
}

export default async function Page (props: Props) {
  let herbs: HerbJist[] = []
  // default 20 pages to handle preloading before async finishes and trying to access outof bounds of array in Pagination
  let pages: number[] = Array.from(Array(20).keys())
  let data: GetHerbJist;
  let meridianOptions: string[] = [];
  let meridians: string[] = [];
  const checkMeridianType = props.searchParams.meridians;
  try {
    if (checkMeridianType) {
      if (Array.isArray(checkMeridianType)) {
        meridians = checkMeridianType;
      } else {
        meridians = [checkMeridianType];
      }
      data = await getHerbsFilter(`${pages[Number(props.params.pageNumber)]}`, meridians)
    } else {

      data = await getHerbs(`${pages[Number(props.params.pageNumber)]}`)
    }
    meridianOptions = await getMeridianOptions();
    
    herbs = data.herbs;
    pages = data.pages;
  } catch (e) {
    console.log("FAILED WITH ", e)
  }
  
  return (
    <div className="flex py-4 md:py-10 flex-col items-center w-full bg-tttt-200 min-w-fit">
      <div className="w-full flex justify-end pr-8 md:pr-16 mb-4 md:mb-8 text-primary-300">
        <SearchMeridians meridiansOptions={meridianOptions} meridianParams={meridians}/>
      </div>
      <div className="flex flex-col">
        <div className=" overflow-x-auto">
          <div className="inline-block min-w-full my-2, align-middle md:px-6 lg:px-8">
            <div className="overflow-scroll scrollbar-none shadow ring-1 ring-black ring-opacity-5">
              <table className='table-auto text-primary-400 border-accent-200 border-x-[1px] overflow-x-scroll scrollbar-none'>
                <thead className="border-accent-200 border-b-2 border-t-[1px] position-sticky">
                  <tr>
                    <th className="p-2 border-r-2 border-accent-200">TCM Name English</th>
                    <th className="hidden md:table-cell p-2 border-r-2 border-accent-200">TCM Name</th>
                    <th className="hidden md:table-cell p-2 border-r-2 border-accent-200">Herb Pinyin Name</th>
                    <th className="hidden lg:table-cell p-2 border-r-2 border-accent-200">Herb Latin Name</th>
                    <th className="hidden md:table-cell p-2 border-r-2 border-accent-200">Properties</th>
                    <th className="p-2 border-r-2 border-accent-200">Meridians</th>
                    <th className="p-2 border-r-2 border-accent-200">Therapeutic Class English</th>
                    <th className="hidden md:table-cell px-2 border-accent-200">Therapeutic Class</th>
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
        <Pagination totalPages={pages.length} currentPage={Number(props.params.pageNumber)} meridians={checkMeridianType} />
      </div>
    </div>
  )
}


