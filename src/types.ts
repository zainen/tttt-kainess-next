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
  level1_name_en?: string,
  level2_name?: string,
  tcm_name?: string,
  tcm_name_en?: string,
  herb_pinyin_name?: string,
  herb_latin_name?: string,
  properties?: string,
  meridians?: string,
  usepart?: string,
  function?: string,
  indication?: string,
  toxicity?: string,
  clinical_manifestations?: string,
  therapeutic_en_class?: string,
  therapeutic_cn_class?: string,
  tcmid_id?: string,
  tcm_id_id?: number
  symmap_id?: number
  tcmsp_id?: number
  herb_id?: string,
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