'use server';
import { EmailParams } from "@/types";
import { ColourTypes } from "@/types";

export const validateEmailParams = (params: EmailParams): Partial<(keyof Omit<EmailParams, 'phone'>)>[] => {
  const missingParams: Partial<(keyof Omit<EmailParams, 'phone'>)>[] = []
  for (const [key, val] of Object.entries(params)) {
    if (key !== 'phone' && val === '') {
      missingParams.push(key as Partial<(keyof Omit<EmailParams, 'phone'>)>)
    }
  }
  return missingParams
}

export const handleSendEmail = async (formData: FormData): Promise<boolean> => {
  const firstName = formData.get('firstName')
  const lastName = formData.get('lastName')

  const params: EmailParams = {
    name: `${firstName} ${lastName}`,
    email: `${formData.get('email')}`,
    phone: `${formData.get('phoneNumber')}`,
    message: `${formData.get('message')}`
  };
  const missingParams = validateEmailParams(params)
  
  try {
    if (missingParams.length) {
      throw missingParams.join(', ')
    }
    console.log("end point", process.env)
    // const response = await fetch(process.env.REACT_APP_EMAIL_SERVICE ?? '', {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(params)
    // });
    // if (response.status === 200) {
    //   return true;
    // } else {
    //   return false
    // }
    return true;
  } catch (err) {
    return false;
  }
}