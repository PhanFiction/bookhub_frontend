export interface BookInfoProps {
  img: string,
  title: string,
  author: string,
  pages: number
}

export interface ChildrenProps {
  children: React.ReactNode
}

export interface HamburgerProps {
  handleToggle: () => void;
}