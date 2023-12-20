import { HerbTable } from "@/components/ui/tcm-table/HerbTable"

const tcm = () => {
  return (
    <div className="flex justify-center w-full bg-tttt-200">
      <HerbTable className="flex flex-col justify-center w-full md:w-1/2 text-primary-400">
        <div>child</div>
        <div>child</div>
        <div>child</div>
        <div>child</div>
      </HerbTable>
    </div>
  )
}

export default tcm
