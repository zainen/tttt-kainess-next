import { Card } from "@/components/ui/Card";
import Image from 'next/image'


const pageNotFound = () => {
  return (
    <>
      <Card className='text-primary-400 w-full flex flex-col justify-center md:justify-around md:flex-row items-center text-lg bg-tttt-100' >
        <h2>PAGE NOT FOUND</h2>
      </Card>
    </>
  )
}

export default pageNotFound