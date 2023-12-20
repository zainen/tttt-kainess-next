import Image from 'next/image'

const kai = () => {
  return (
    <div className="w-full flex flex-col items-center bg-tttt-200 pb-10">
      <div className='w-full md:w-4/5 lg:w-3/4 '>
        <div className="flex flex-col justify-center items-center text-tttt-200">
          <div className=" px-10 md:px-0 py-10 text-center text-primary-400">
            <h2 className="text-3xl font-bold pb-6">Living with Kai-ness</h2>
            <h4 className="text-xl font-semibold">
              {`To be "Kai" stems from a word meaning to "Open", "Start", "Run" , and
              "Steer." Living with Openness and a readiness to begin on a new
              journey.`}
            </h4>
          </div>
        </div>
        <div className="text-primary-400 border-none w-full flex flex-col justify-center items-center md:items-start md:flex-row-reverse text-lg ">
        <Image className=" object w-3/4 md:w-1/2" height={300} width={300} src={`/img/light-through-trees.jpeg`} alt="second" />

          <div className="w-3/4 md:w-1/2 py-4 md:px-4 flex flex-col">
            <div className="pb-4 md:pb-10">
              <h4 className="text-xl font-bold text-center md:text-left">The Kai Care & Wellness Program</h4>
            </div>

            <div className="max-w-md">
              <p className="py-2">Health and Wellness is not one-size-fits-all.</p>
              <p className="py-2">
                At Kai Care and Wellness, we believe that each person has their own
                story to tell and path to forge, especially when it comes to
                physical, emotional, and mental health.
              </p>
              <p className="py-2">
                Tysia works one-on-one with clients to identify core values, needs,
                and desires, to together build a unique Health and Wellness Plan
                that works for you. Through motivational interviewing, check-in
                sessions, and wellness plan reviews, the Kai Care & Wellness Program
                works to support you in achieving your physical, mental,
                nutritional, and emotional wellbeing goals.
              </p>
            </div>
          </div>
        </div>
        <div className="text-primary-400 border-none w-full flex flex-col justify-center items-center md:items-start md:flex-row text-lg">
          <Image className=" object-scale-down object w-3/4 md:w-1/2" height={500} width={500} src={`/img/tttt-smile.JPG`} alt="second" />

          <div className="w-3/4 md:w-1/2 py-4 md:px-4 flex flex-col">
            <div className="pb-4 md:pb-10">
              <h4 className="text-xl font-bold text-center md:text-left">The Kai Workshop</h4>
            </div>

            <div className="max-w-md">
              <p className="py-2">** COMING SOON **</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default kai
