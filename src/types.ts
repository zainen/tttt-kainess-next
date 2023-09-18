export type ColourTypes = 'accent' | 'primary' | 'tttt';

export interface EmailParams {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export type SearchParams = Record<string, string> | null | undefined 
