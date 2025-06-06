import Image from "next/image"
import { BookInfoProps } from "@/app/interfaces/interfaces"

export default function BookInfo({ img, title, author, pages }: BookInfoProps) {
  return (
    <>
      <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <Image
          src={img}
          alt="img"
          width="100"
          height="100"
          className="h-full w-full object-cover" />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between flex-col">
          <p className="block font-sans text-lg font-bold leading-relaxed text-blue-gray-900 antialiased">
            { title }
          </p>
          <p className="font-medium">
            { author }
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          { pages } pages
        </p>
      </div>
      <div className="p-6 pt-0 flex">
        <button
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Read
        </button>
        <button
          className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Remove
        </button>
      </div>
    </>
  )
}
