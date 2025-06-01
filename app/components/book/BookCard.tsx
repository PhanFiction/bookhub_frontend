import { ChildrenProps } from "@/app/interfaces/interfaces"

export default function BookCard({ children }: ChildrenProps) {
  return (
    <div className="relative flex w-56 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      { children }
    </div>
  )
}
