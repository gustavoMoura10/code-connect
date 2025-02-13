import { Authors } from "./Authors";

export interface Posts {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: Authors;
  likes: number
}
