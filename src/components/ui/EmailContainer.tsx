'use client'
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { handleSendEmail } from "@/serverFunctions";
import { useState } from "react";

export const EmailContainer = ({inputClassname, borderColour}: { inputClassname: string; borderColour: string }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [fade, setFade] = useState(true);
  const [showError, setShowError] = useState(false)
  const [showSuccess, setSuccess] = useState(false)

  const [error, setError] = useState('');

  const handleErrorFade = () => {
    setShowError(!showError)
    setTimeout(() => {
      setFade(!fade)
    }, 500)
  }

  const handleSuccessFade = () => {
    setSuccess(!showSuccess)
    setTimeout(() => {
      setFade(!fade)
    }, 500)
  }


  return (
    <div className="flex flex-col items-center h-fit max-w-xl w-full">
      <h4 className="text-xl font-bold">{"Let's Connect!"}</h4>
        <div className={`w-full rounded-md ${error && 'bg-red-warn'} ${showSuccess && 'bg-primary-100'} py-2 px-4 transition-all duration-500  ${showError || showSuccess ? 'opacity-80' : `opacity-0 translate-x-full ${fade && 'hidden'}`}`}>
          {showError && <div>
            <p className="text-end" onClick={handleErrorFade}>X</p>
            <p>{error}</p>
          </div>}
          {showSuccess && <div>
            <p className="text-end" onClick={handleSuccessFade}>X</p>
            <p>Sent</p>
          </div>}
        </div>
        <form action={handleSendEmail}>

          <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
            <TextInput required state={firstName} setState={setFirstName} name='first_name' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="First Name"/> 
            <TextInput state={lastName} setState={setLastName} name='lastName' className={`${inputClassname}`} borderColour={borderColour} label="Last Name"/> 
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
            <TextInput required state={email} setState={setEmail} name='email' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="Email"/> 
            <TextInput state={phoneNumber} setState={setPhoneNumber} name='phoneNumber' className={`${inputClassname}`} borderColour={borderColour} label="Phone Number"/> 
          </div>
          <div className="w-full mt-4"> 
            <div className="flex flex-col w-full">
              <label htmlFor="message" className="font-semibold flex">Message</label>
              <textarea  
                required
                name='message'
                className="border-b h-40 focus:outline-none bg-primary-400 border-b-tttt-200"
              />
            </div> 
          </div>
          <div className="w-full flex justify-center">

            <Button className={'text-primary-400 px-2 mt-4 text-lg w-fit'} type='submit' action={() =>{}}>Submit</Button>
          </div>
        </form>
    </div>
  )
}