export interface ChildrenProps {
  children: React.ReactNode
}

export interface HamburgerProps {
  handleToggle: () => void;
}

export default interface BookInfoProps {
  id: number;
  coverImage: string;
  title: string;
  author: string;
  pages: number;
}

// BookDataProps interface represents the structure of book data
// id, title, author, pages, publisher, isbn, description, published_at, genre, cover_img
export interface BookDataProps {
  id?: number | null;
  title?: string;
  author?: string;
  pages?: number;
  Ppublisher?: string;
  isbn?: string;
  description?: string;
  publishedAt?: string;
  genre?: string;
  coverImage?: string;
}
