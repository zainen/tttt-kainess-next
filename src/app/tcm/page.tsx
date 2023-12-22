import HerbRow from "@/components/ui/tcm-table/HerbRow";
import { HerbTable } from "@/components/ui/tcm-table/HerbTable"

const tcm = () => {
  return (
    <div className="flex justify-center w-full bg-tttt-200">
      <HerbTable className="flex flex-col  w-full md:w-4/5 text-primary-400 my-4 border-primary-400 border-2" />
    </div>
  )
}

export default tcm
