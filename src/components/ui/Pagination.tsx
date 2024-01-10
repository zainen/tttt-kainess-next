"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"

export default function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number; }) {
  const router = useRouter();
  if (currentPage < 1 || currentPage > totalPages) {
    console.log(totalPages, currentPage)
    router.replace("http://localhost:3000/tcm/1");
  }

  const minusFive = currentPage - 5
  const low = minusFive < 1 ? 1 : minusFive;
  const plusFive = currentPage + 5;

  const high = plusFive > totalPages ? totalPages : plusFive;

  const pages = [];
  for (let i = low; i <= high; i++) {
    pages.push(i);
  }

  const [includesFirst, isNotNext] = [pages.includes(1), !pages.includes(2)];
  const [includesLast, isNotLast] = [pages.includes(totalPages), !pages.includes(totalPages-1)];


  return (
    <ul className="text-primary-300 flex items-center text-sm border border-primary-400">
      {!includesFirst && 
        <li className="h-full">
          <Link href={`/tcm/1`} className={`px-3 py-2 border-r hover:bg-primary-100 ${currentPage === 1 ? "" : ""}`}>1</Link>
        </li>
      }
      {isNotNext && <li className="border-r px-3 py-2">...</li>}
      {
        pages.map((page, i) => {
          return (
            <li key={`page_number_${page}`} className="h-full">
              <Link href={`/tcm/${page}`} className={`px-3 py-2 border-r hover:bg-primary-100 ${currentPage === page ? "" : ""}`}>{page}</Link>
            </li>
          )
        })
      }
      {isNotLast && <li className="border-r px-3 py-2">...</li>}
      {!includesLast && 
      <li className="h-full">
        <Link href={`/tcm/${totalPages}`} className={`px-3 py-2 hover:bg-primary-100 ${currentPage === totalPages ? "" : ""}`}>{totalPages}</Link>
      </li>
      }
    </ul>
  )
}