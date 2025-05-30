import { BookInfoProps } from "@/app/interfaces/interfaces";
interface ChildrenProps {
  children: React.ElementType<BookInfoProps>
}

export default function BookCard({ children }: ChildrenProps) {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      { children }
    </div>
  )
}
