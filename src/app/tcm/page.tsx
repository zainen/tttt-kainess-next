import HerbRow from "@/components/ui/tcm-table/HerbRow";
import { HerbTable } from "@/components/ui/tcm-table/HerbTable"

const tcm = () => {
  return (
    <div className="flex justify-center w-full bg-tttt-200">
      <HerbTable className="flex flex-col justify-center w-full md:w-2/3 text-primary-400" />
    </div>
  )
}

export default tcm
