import { ColourTypes, EmailParams } from "@/types";

export const buttonColour = (colourOptions?: ColourTypes) => {
  switch (colourOptions) {
    case "accent": {
      return 'border-accent-200 bg-accent-100'
    }
    case "primary": {
      return 'border-primary-400 bg-primary-300'
    }
    case "tttt": {
      return 'border-tttt-200 bg-tttt-100'
    }
    default: 
    return 'border-accent-200 bg-accent-100'
  }
}

export const validateEmailParams = (params: EmailParams): Partial<(keyof Omit<EmailParams, 'phoneNumber'>)>[] => {
  const missingParams: Partial<(keyof Omit<EmailParams, 'phoneNumber'>)>[] = []
  for (const [key, val] of Object.entries(params)) {
    if (key !== 'phoneNumber' && val === '') {
      missingParams.push(key as Partial<(keyof Omit<EmailParams, 'phoneNumber'>)>)
    }
  }
  return missingParams
}

export const formatEnglishHerbName = (herbNameEnglish: string) => {
  const arr = []
  if (herbNameEnglish.includes(":")) {
    const [first, second] = herbNameEnglish.split(": ");
    const cleanSecond = formatSymbol(second, ",")
    arr.push(`${first}: `, ...cleanSecond);
  } else {
    arr.push(herbNameEnglish);
  }
  return arr;
}

export const formatSymbol = (str: string, symbol: string): string[] => {
  return str.includes(symbol) ? str.split(`${symbol} `) : [str]
}