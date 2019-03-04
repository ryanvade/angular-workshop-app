export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails?: VideoDetail[];
}

export interface VideoDetail {
  age: number;
  region: string;
  date: string;
}
