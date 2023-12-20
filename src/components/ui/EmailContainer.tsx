'use client'
import { Button } from "@/components/ui/Button";
import { TextInput } from "@/components/ui/TextInput";
import { FormEvent, useState } from "react";
import { validateEmailParams } from "@/helperFunctions";

export const EmailContainer = ({inputClassname, borderColour}: { inputClassname: string; borderColour: string }) => {
  const [showError, setShowError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const [error, setError] = useState('');

  const resetPopup = () => {
    setShowError(false);
    setShowSuccess(false);
    setError("");
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    const first_name = formData.get("firstName")?.toString() ?? '';
    const last_name = formData.get("lastName")?.toString() ?? '';
    const email = formData.get('sender')?.toString() ?? '';
    const phone = formData.get("phoneNumber")?.toString() ?? '';
    const body = formData.get('body')?.toString() ?? '';

    const params = {
      first_name,
      last_name,
      sender: email,
      receiver: process.env.NEXT_PUBLIC_EMAIL_RECEIVER ?? '',
      phone,
      body
    };
    
    const missingParams = validateEmailParams(params)
    
        if (missingParams.length) {
          throw missingParams.join(', ')
        }
    
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_KAINESS_API}/send-email/` ||`http://localhost:8080/send-email/`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
      });

      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => resetPopup(), 5000)
      } else {
        setError("Response not ok")
        setShowError(true)
      }
    } catch (err) {
      console.log("ERR", err)
      setError(JSON.stringify(err));
      setShowError(true);
    }
  }
  

  const handleErrorFade = () => {
    setTimeout(() => {
      resetPopup();
    }, 5000)
  }

  const handleSuccessFade = () => {
    setTimeout(() => {
      resetPopup();
    }, 5000)
  }

  const popupColour = () => {
    if (showSuccess) return "bg-primary-100";
    if (error) return 'bg-red-warn'
  }


  return (
    <div className="flex flex-col items-center h-fit max-w-4xl w-full flex-grow">
      <h4 className="text-xl font-bold">{"Let's Connect!"}</h4>
        <div className={`w-full rounded-md ${popupColour()} py-2 px-4 transition-all duration-500  ${showError || showSuccess ? `opacity-100` : `opacity-0 -translate-x-full `}`}>
          {!showError && !showSuccess && <div className="flex text-tttt-100 opacity-0">
            {/* DUMMY TO KEEP SPACING */}
            <p>x</p>
            <p>x</p>
            </div>}
          {showError && <div className="flex flex-row-reverse justify-between text-primary-400">
            <p className="text-end cursor-pointer" onClick={handleErrorFade}>X</p>
            <p>{error}</p>
          </div>}
          {showSuccess && <div className="flex flex-row-reverse justify-between text-primary-400">
            <p className="text-end cursor-pointer" onClick={handleSuccessFade}>X</p>
            <p>Sent</p>
          </div>}
        </div>
        <form className="w-full" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
            <TextInput required name='firstName' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="First Name"/> 
            <TextInput  name='lastName' className={`${inputClassname}`} borderColour={borderColour} label="Last Name"/> 
          </div>
          <div className="flex flex-col md:flex-col lg:flex-row  justify-between w-full mt-4"> 
            <TextInput required name='sender' className={`lg:mr-2 ${inputClassname}`} borderColour={borderColour} label="Email"/> 
            <TextInput name='phoneNumber' className={`${inputClassname}`} borderColour={borderColour} label="Phone Number"/> 
          </div>
          <div className="w-full mt-4"> 
            <div className="flex flex-col w-full">
              <TextInput
                required
                name='body'
                label="Message"
                borderColour={borderColour}
                textArea
                className="border-b h-40 focus:outline-none bg-primary-400 border-b-tttt-200"
              />
            </div> 
          </div>
          <div className="w-full flex justify-center">
            <Button className={'text-primary-400 px-2 mt-4 text-lg w-fit'} type='submit'>Submit</Button>
          </div>
        </form>
    </div>
  )
}