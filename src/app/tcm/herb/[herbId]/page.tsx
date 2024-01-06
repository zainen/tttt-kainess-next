import { formatSymbol, formatEnglishHerbName } from "@/helperFunctions";
import { HerbFull } from "@/types";

type Props = {
  params: {
    herbId: string;
  }
}

const getHerbData = async (herbId: string) => {

  const apiCall = await fetch(`http://127.0.0.1:8080/tcm/search/${herbId}`, { 
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
    const herbNameEnglishArr = formatEnglishHerbName(herb.tcm_name_en ?? "");

    console.log(herb)
    return (
      <div className="bg-tttt-200 text-primary-300 w-full flex justify-center py-10">
        <div className="w-full md:w-4/5">
          <div className="flex-col">
            <div className="grid grid-col-2 gap-4 justify-around md:flex md:justify-evenly w-full pb-10">
              <div className="flex-1 flex flex-col items-center">
                <p className="text-primary-400 font-bold py-4 w-fit">Chinese:</p>
                <p>{herb.tcm_name}</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <p className="text-primary-400 font-bold py-4 w-fit">Pinyin:</p>
                <p>{herb.herb_pinyin_name}</p>
              </div>
              <div className="flex-1 flex flex-col items-center">
                    <p className="font-bold text-primary-400 py-4 w-fit">English:</p>
                  {herbNameEnglishArr[0].length ? herbNameEnglishArr.map((str, i) => {
                    return <p className="w-fit" key={`herb_en_part_${i}`}>{str}</p>

                  }) :
                  <p>Unlisted</p>
                  }
              </div>
              <div className="flex-1 flex flex-col items-center">
                  <p className="text-primary-400 font-bold py-4 w-fit">Latin:</p>
                <div className="flex justify-center">
                <p>{herb.herb_latin_name}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" pb-4">
            <div className="flex flex-col items-center">
              <p className="text-primary-400 font-bold py-4">Functions</p>
              <div>
                {herb.function ?? "unknown"}
                {/* {herb.function ? formatSymbol(herb.function, ",").map((str, i) => {
                    return <p key={`herb_function_${i}`}>{str}</p>
                  }) : <p>unknown</p>
                } */}
              </div>
            </div>
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4">Indications</p>
              </div>
              <div>
              {herb.indication ?? "unknown"}

                {/* {herb.indication ? formatSymbol(herb.indication, ",").map((str, i) => {
                    return <p key={`herb_function_${i}`}>{str}</p>
                  }) : <p>unknown</p>
                } */}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center pb-4">
            <div className="w-full flex justify-center">
              <p className="text-primary-400 font-bold py-4">Toxicity</p>
            </div>
            <div>
                {herb.toxicity ? formatSymbol(herb.toxicity, ",").map((str, i) => {
                    return <p key={`herb_function_${i}`}>{str}</p>
                  }) : <p>unknown</p>
                }
              </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4">Properties</p>
              </div>
              <div>
                  {herb.properties ? formatSymbol(herb.properties, ";").map((str, i) => {
                      return <p key={`herb_function_${i}`}>{str}</p>
                    }) : <p>unknown</p>
                  }
                </div>
            </div>
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
                <p className="text-primary-400 font-bold py-4">Meridians</p>
              </div>
              <div>
                  {herb.meridians ? formatSymbol(herb.meridians, ";").map((str, i) => {
                      return <p key={`herb_function_${i}`}>{str}</p>
                    }) : <p>unknown</p>
                  }
                </div>
            </div>
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
              <p   className="text-primary-400 font-bold py-4">Use Parts</p>
              </div>
              <p>{herb.usepart ?? "unknown"}</p>
            </div>
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
              <p className="text-primary-400 font-bold py-4">Therapeutic Class</p>
              </div>
              <p>{herb.therapeutic_en_class ?? "unknown"}</p>
            </div>
            <div className="flex flex-col items-center pb-4">
              <div className="w-full flex justify-center">
              <p className="text-primary-400 font-bold py-4">Therapeutic Class Chinese</p>
              </div>
              <p>{herb.therapeutic_cn_class ?? "unknown"}</p>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (e) {
    // TODO PLACE HOLDER FOR NOT FOUND HERB
  }
  return <></>
}