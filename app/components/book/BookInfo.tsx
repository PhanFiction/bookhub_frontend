import Image from "next/image";
import Link from "next/link";
import BookInfoProps from "../../interfaces/interfaces";

export default function BookInfo({ coverImage, title, author, pages, id }: BookInfoProps) {
  return (
    <>
      <div className="relative mx-4 mt-4 h-48 overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt="img"
          width="100"
          height="100"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Middle section grows to fill vertical space */}
      <div className="flex flex-col flex-grow p-6">
        <div className="my-auto flex flex-col gap-1">
          <p className="text-lg font-bold">{title}</p>
          <p className="font-medium">{author}</p>
        </div>
        <p className="text-sm text-gray-700 opacity-75">{pages} pages</p>
      </div>

      {/* Buttons stay at the bottom */}
      <div className="mt-auto flex gap-2 p-6 pt-0">
        <Link href={`/book/${id}`}>
          <button className="w-full rounded-lg bg-blue-gray-900/10 py-3 px-6 text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:cursor-pointer">
            View
          </button>
        </Link>
        <button className="w-full rounded-lg bg-blue-gray-900/10 py-3 px-6 text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 hover:cursor-pointer">
          Save
        </button>
      </div>
    </>
  )
}
