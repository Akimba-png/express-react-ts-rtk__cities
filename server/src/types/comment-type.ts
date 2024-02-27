export type Comment = {
  id: number;
  user: User;
  rating: number;
  comment: string;
  date: string;
};

export type User = {
  id: number;
  is_pro: boolean;
  name: string;
  avatar_url: string;
};
