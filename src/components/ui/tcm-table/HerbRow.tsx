"use client";
import { HerbJist } from "@/types";

type HerbRowProps = {
  herb: HerbJist
}

const HerbRow = ({herb}: HerbRowProps) => {
  return (
    <tr className="">
      <td>{herb.tcm_name_en ?? "NULL"}</td>
      <td>{herb.tcm_name ?? "NULL"}</td>
      <td>{herb.herb_pinyin_name ?? "NULL"}</td>
      <td>{herb.herb_latin_name ?? "NULL"}</td>
      <td>{herb.properties ?? "NULL"}</td>
      <td>{herb.meridians ?? "NULL"}</td>
      <td>{herb.therapeutic_en_class ?? "NULL"}</td>
      <td>{herb.therapeutic_cn_class ?? "NULL"}</td>
    </tr>
  )
}

export default HerbRow