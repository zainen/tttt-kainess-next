"use client";
import {usePathname, useSearchParams, useRouter} from "next/navigation"

export default function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number; }) {
  const router = useRouter();
  if (currentPage < 1 || currentPage > totalPages) {
    console.log(totalPages, currentPage)
    router.replace("http://localhost:3000/tcm/1");
  }

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
 
  return <></>
}