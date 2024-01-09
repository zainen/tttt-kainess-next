import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export const Bookings = () => {
  return (
    <div className="w-full pb-4">
      <div className="flex flex-row items-center justify-center pb-4 md">
        <Image priority className='w-1/2 object-cover object-center max-h-80 p-2' width={300} height={300} src="/img/wellness-plan.jpeg" alt="wellness plan"/>
        <Card rounded={false} className="h-fit w-80 sm:-translate-x-20 bg-primary-100 text-primary-400 p-8 md:p-12" >
          <h4 className="text-lg font-bold ">Online Initial Consultation</h4>
          <div className="border border-b-1 my-4 border-primary-400" />
          <div className="h-fit">
            <p>1 hr</p>
            <p className="pb-4">$60</p>
            <Link className="bg-accent-100 rounded-lg py-2 px-4" href={"/?modal=true"}>
              Book Now
            </Link>
          </div>
          
        </Card>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Image priority className='w-1/2 object-cover object-center max-h-80 p-2' width={300} height={300} src="/img/healthy-eating.jpeg" alt="blank recipe card"/>
        <Card rounded={false} className="h-fit w-80 sm:-translate-x-20 bg-primary-100 text-primary-400 p-8 md:p-12" >
          <h4 className="text-lg font-bold">Healthy Living Seminar</h4>
          <div className="border border-b-1 my-4 border-primary-400" />
          <div className="h-fit">
            <p>1 hr</p>
            <p className="pb-4">Inquire for pricing</p>
            <Link className="bg-accent-100 rounded-lg py-2 px-4" href={"/?modal=true"}>
              Book Now
            </Link>
          </div>
          
        </Card>
      </div>
    </div>
  )
}