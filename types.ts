export type Section = 'home' | 'about' | 'articles' | 'participate' | 'contact';

export interface Article {
  id: number;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string[];
}
