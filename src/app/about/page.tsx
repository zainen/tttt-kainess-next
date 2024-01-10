import { Card } from "@/components/ui/Card";
import Image from 'next/image'


const about = () => {
  return (
    <>
      <div className='py-8 md:py-12 text-primary-400 w-full flex flex-col justify-center md:justify-around md:flex-row items-center text-lg bg-tttt-100' >
        <Image priority className="object-contain object-center md:w-1/2 w-3/4 max-w-lg" width={750} height={750}  src="/img/tttt-side.JPG" alt="Tysia Side Profile"/>
        <div>
          <h2 className='text-3xl font-bold py-8 text-center'>Meet Tysia</h2>
          <h4 className='text-xl text-center px-2'>Health and Wellness Coach | Holistic Nutritionist</h4>
          <div className='p-8 flex flex-col justify-center items-center'>
            <p className="p-4  md:max-w-lg">
              Tysia hails from Vancouver, Canada. Having spent a decade abroad in Europe and Asia, she loves to meet and work with people from all backgrounds and cultures.
            </p>
            <p className="p-4  md:max-w-lg">
              She completed her Medical Degree at Fudan University, Shanghai Medical College followed by continued education in Plant-Based Nutrition with Cornell University&apos;s T. Colin Campbell Centre for Nutrition studies and Wellness Coach Certification from the Mayo Clinic.
            </p>
            <p className="p-4  md:max-w-lg">
              Tysia strives to work collaboratively with clients to develop personalized wellness plans and attainable goals in support each person&apos;s wellness journey, whatever that looks like.
            </p>
            <p className="p-4  md:max-w-lg">
              With a love of all things food, she incorporates recipes and nutritional references for optimal health from the inside out. 
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default about