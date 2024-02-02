'use client'
import { Card } from "@/components/ui/Card";
import { EmailContainer } from "./EmailContainer";
import { useRouter } from "next/navigation";

export const ModalPopup = () => {
  const router = useRouter();
  return (
    <div className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center  ">
      <Card className="z-20 border-none bg-primary-200 max-w-xl w-full  sm:rounded-xl">
        <div className="flex justify-end" >

          <button className="hover:text-tttt-200 text-right" onClick={router.back}>X</button>
        </div>
        <EmailContainer borderColour="" inputClassname="" textBoxColour="bg-tttt-200" />
      </Card>
    </div>
  )
}