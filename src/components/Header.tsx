
import Link from "next/link";
import Image from 'next/image';
import { ModalPopup } from "./ui/Modal";
import { SearchParams } from "@/types";

import kainessIcon from '../../public/img/kainess.svg'

export const Header = ({searchParams}: {searchParams: SearchParams}) => {
  const showModal = searchParams?.modal
  return (
    <>
      {showModal ? <ModalPopup /> : undefined}
      <div className="sticky top-0 z-10 h-fit bg-primary-400">
        <div className="w-full h-fit flex justify-center items-center bg-primary-400 text-tttt-200">
          <Link className="pl-4 py-4 md:pt-8 md:pb-4 text-3xl flex items-center" href='/'>
            <Image priority src={kainessIcon} alt='kainess logo' />
            <h2 className="font-extrabold drop-shadow-header text-center">
              Kai Care & Wellness
            </h2>
          </Link>
        </div>
        <header className=" flex w-full h-fit py-4 justify-between px-4 bg-primary-400 text-tttt-200 items-center">
          <h4 className="font-semibold text-2xl drop-shadow-sub-header md:indent-12 text-center">Living and leading with Kai-ness</h4>
          <div className="flex pr-2 items-center">
            <nav className="">
              <ul className="md:flex text-lg font-semibold pt-2 pr-2">
                <li className="px-2 drop-shadow-sub-header">
                  <Link href='/'>Home</Link>
                </li>
                <li className="px-2 drop-shadow-sub-header">
                  <Link href='/about'>About</Link>
                </li>
                <li className="px-2 drop-shadow-sub-header">
                  <Link href='/kai'>Kai</Link>
                </li>
                {/* TODO <li className="px-2">
                  <Link href='/blogs'>Blogs</Link>
                </li> */}
                <li className="px-2 drop-shadow-sub-header">
                  <Link href='/podcasts'>Podcasts</Link>
                </li>
                {/* TODO <li className="px-2">
                  <Link href='/recipies'>Recipies</Link>
                </li> */}
                <li className="px-2 drop-shadow-sub-header">
                  <Link href='/tcm/1'>tcm</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  )
}