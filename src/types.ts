export type ColourTypes = 'accent' | 'primary' | 'tttt';

export interface EmailParams {
  sender: string;
  receiver: string;
  first_name: string;
  last_name?: string;
  phone_number?: string;
  body: string;
}

export type SearchParams = Record<string, string> | null | undefined

export interface HerbFull {
  id: number,
  tcmbank_id: string,
  level1_name_en: string | null,
  level2_name: string | null,
  tcm_name: string | null,
  tcm_name_en: string | null,
  herb_pinyin_name: string | null,  
  herb_latin_name: string | null,
  properties: string | null,
  meridians: string | null,
  usepart: string | null,
  function: string | null,
  indication: string | null,
  toxicity: string | null,
  clinical_manifestations: string | null,
  therapeutic_en_class: string | null,
  therapeutic_cn_class: string | null,
  tcmid_id: string | null,
  tcm_id_id: number | null
  symmap_id: number | null
  tcmsp_id: number | null
  herb_id: string | null,
};

export interface HerbJist {
  id: number,
  tcm_name?: string,
  tcm_name_en?: string,
  herb_pinyin_name?: string,
  herb_latin_name?: string,
  properties?: string,
  meridians?: string,
  therapeutic_en_class?: string,
  therapeutic_cn_class?: string,
}

export interface SearchHerbName {
  language: string,
  herb_name: string,
}

export type GetHerbJist = {
  herbs: HerbJist[];
  pages: number[];
}


export type JSONResponse<T> = {
  data?: T
  errors?: Array<{message: string}>
}