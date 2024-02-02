"use client";
import { appendURLParams } from "@/helperFunctions";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Pagination({ totalPages, currentPage, meridians }: { totalPages: number; currentPage: number; meridians?: string | string[]}) {
  const router = useRouter();
  if (currentPage < 1 || currentPage > totalPages) {
    router.replace(`/tcm/1`);
  }

  const minusFive = currentPage - 5
  const low = minusFive < 1 ? 1 : minusFive;
  const plusFive = currentPage + 5;

  const high = plusFive > totalPages ? totalPages : plusFive;

  const pages: number[] = [];
  for (let i = low; i <= high; i++) {
    pages.push(i);
  }
  const dropPageOptionsIfIncludes = [0,  1 ,  pages.length - 1,  pages.length - 2];

  const [includesFirst, isNotNext] = [pages.includes(1), !pages.includes(2)];
  const [includesLast, isNotLast] = [pages.includes(totalPages), !pages.includes(totalPages-1)];


  return (
    <ul className="text-primary-300 flex items-center text-sm border border-primary-400">
      {!includesFirst && 
        <li className="h-full">
          <Link href={appendURLParams(`/tcm/1`, 'meridians', meridians)} className={`px-3 py-2 border-r ${currentPage === 1 ? "bg-primary-100" : "hover:bg-primary-200"}`}>1</Link>
        </li>
      }
      {isNotNext && <li className="border-r px-3 py-2">...</li>}
      {
        pages.map((page, i) => {
          return (
            <li key={`page_number_${page}`} className="h-full">
              <Link href={appendURLParams(`/tcm/${page}`, 'meridians', meridians)} className={`${dropPageOptionsIfIncludes.includes(i) ? "hidden md:block" : ""} px-3 py-2 border-r ${currentPage === page ? "bg-primary-100" : "hover:bg-primary-200"}`}>{page}</Link>
            </li>
          )
        })
      }
      {isNotLast && <li className="border-r px-3 py-2">...</li>}
      {!includesLast && 
      <li className="h-full">
        <Link href={appendURLParams(`/tcm/${totalPages}`, 'meridians', meridians)} className={`px-3 py-2 ${currentPage === totalPages ? "bg-primary-100" : "hover:bg-primary-200"}`}>{totalPages}</Link>
      </li>
      }
    </ul>
  )
}