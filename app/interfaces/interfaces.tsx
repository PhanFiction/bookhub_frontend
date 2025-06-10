export interface ChildrenProps {
  children: React.ReactNode
}

export interface HamburgerProps {
  handleToggle: () => void;
}

// BookDataProps interface represents the structure of book data
// id, title, author, pages, publisher, isbn, description, published_at, genre, cover_img
export interface BookDataProps {
  ID?: number | null;
  Title?: string;
  Author?: string;
  Pages?: number;
  Publisher?: string;
  ISBN?: string;
  Description?: string;
  PublishedAt?: string;
  Genre?: string;
  CoverImage?: string;
}
