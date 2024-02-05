"use client";
import { GetHerbJist, HerbJist } from "@/types";
import { useEffect, useState } from "react";

const useTcmHerbJist = (page: number = 0) => {
  const [herbList, setHerbList] = useState<HerbJist[]>();
  const [herbIndexes, setHerbIndexes] = useState<number[]>();
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getData = async () => {
    setIsLoading(true);
    try {

      const response = await fetch(`${process.env.NEXT_PUBLIC_KAINESS_API}/tcm/0`, {
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          mode: 'cors',
          method: "GET"
        }
      )
    const herbJson = await response.json() as GetHerbJist;
    setHerbList(herbJson.herbs)
    setHerbIndexes(herbIndexes)
    } catch (e) {
      console.log("ERROR ", e)
      setIsError(true);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { herbList, herbIndexes, isLoading, isError }
}

export default useTcmHerbJist