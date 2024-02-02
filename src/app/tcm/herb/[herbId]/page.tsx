import { formatSymbol, formatEnglishHerbName } from "@/helperFunctions";
import { HerbFull } from "@/types";

type Props = {
  params: {
    herbId: string;
  }
}

const getHerbData = async (herbId: string) => {

  const apiCall = await fetch(`http://127.0.0.1:8080/tcm/herbs/${herbId}`, { 
    method: "GET", 
    mode: "cors",
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
  const data: HerbFull[] = await apiCall.json() 
  return data
} 

export default async function Page (props: Props) {
  try {
    const herb_arr = await getHerbData(props.params.herbId);
    const herb = herb_arr[0];
    if (!herb) {
      // TODO proper error
      throw "herb not found"
    }

    return (
      <div className="bg-tttt-200 w-full flex justify-center md:py-10 lg:py-14 ">
        <div className="w-full sm:px-4 md:mx-10 lg:mx-14 max-w-screen-xl h-fit text-primary-400 p-4 md:p-8 ">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 w-full">
            <div className="flex-1 flex flex-col items-center">
              <p className="text-primary-400 font-bold py-4 md:py-8 w-fit">Chinese:</p>
              <p>{herb.tcm_name ?? "unknown"}</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="text-primary-400 font-bold py-4 md:py-8 w-fit">Pinyin:</p>
              <p>{herb.herb_pinyin_name ?? "unknown"}</p>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <p className="font-bold text-primary-400 py-4 md:py-8 w-fit">English:</p>
              <div className="flex flex-col items-center">
                {herb.tcm_name_en ? formatEnglishHerbName(herb.tcm_name_en ?? "").map((str, i) => {
                    return <p className="w-fit text-center" key={`herb_en_part_${i}`}>{str}</p>
                  }) :
                  <p>unknown</p>
                }
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <p className="text-primary-400 font-bold py-4 md:py-8 w-fit text-center">Latin:</p>
              <div className="flex justify-center">
                <p>{herb.herb_latin_name ?? "unknown"}</p>
              </div>
            </div>
          </div>
          <div className="w-full border border-b border-accent-100 my-8 md:my-12"/>
          <div className="pb-4 md:pb-8 flex w-full">
            <div className="flex flex-col items-center flex-1 px-2">
              <p className="text-primary-400 font-bold py-8 text-center">Functions</p>
              <div>
                <p className="text-center">
                  {herb.function ?? "unknown"}
                </p>
                {/* {herb.function ? formatSymbol(herb.function, ",").map((str, i) => {
                    return <p key={`herb_function_${i}`}>{str}</p>
                  }) : <p>unknown</p>
                } */}
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 px-2">
              <p className="text-primary-400 font-bold py-8 text-center">Indications</p>
              <div>
                <p className="text-center">
                  {herb.indication ?? "unknown"}
                </p>

                {/* {herb.indication ? formatSymbol(herb.indication, ",").map((str, i) => {
                    return <p key={`herb_function_${i}`}>{str}</p>
                  }) : <p>unknown</p>
                } */}
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <p className="text-primary-400 font-bold py-8 pr-4 text-center">Toxicity Level</p>
              <div className="flex flex-col justify-center">
                {herb.toxicity ? formatSymbol(herb.toxicity, ",").map((str, i) => {
                  return <p key={`herb_function_${i}`} className="text-center">{str}</p>
                }) : <p>unknown</p>
              }
              </div>
            </div>
          </div>
          <div className="w-full border border-b border-accent-100 my-4"/>
          <div className="grid grid-cols-5 gap-x-4 py-4 md:py-8">
            <div className="flex flex-col items-center flex-1 justify-between">
              <p className="text-primary-400 font-bold py-4 md:py-8 text-center">Properties</p>
              <div className="h-full">
                  {herb.properties ? formatSymbol(herb.properties, ";").map((str, i) => {
                      return <p key={`herb_function_${i}`} className="text-center">{str}</p>
                    }) : <p>unknown</p>
                  }
                </div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-between">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4 md:py-8 text-center">Meridians</p>
              </div>
              <div className="h-full">
                  {herb.meridians ? formatSymbol(herb.meridians, ";").map((str, i) => {
                      return <p key={`herb_function_${i}`} className="text-center">{str}</p>
                    }) : <p>unknown</p>
                  }
                </div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-between">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4 md:py-8 text-center">Use Parts</p>
              </div>
              <div className="h-full">
                <p className="text-center">{herb.usepart ?? "unknown"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-between">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4 md:py-8 text-center">Therapeutic Class</p>
              </div>
              <div className="h-full">
                <p>{herb.therapeutic_en_class ?? "unknown"}</p>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 justify-between">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4 md:py-8 text-center">Therapeutic Class Chinese</p>
              </div>
              <div className="h-full">
                <p>{herb.therapeutic_cn_class ?? "unknown"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (e) {
    // TODO PLACE HOLDER FOR NOT FOUND HERB
    return (
      <div className="h-1/2 w-full bg-primary-400 flex justify-center items-center">
        <h2 className="text-primary-300">HERB NOT FOUND</h2>
      </div>
    )
  }
}