export type CommentServer = {
  id: number;
  user: {
    id: number;
    is_pro?: boolean;
    name: string;
    avatar_url?: string;
  };
  rating: number;
  comment: string;
  date: string;
};

export type Comment = {
  id: number;
  user: {
    id: number;
    isPro: boolean;
    name: string;
    avatarUrl: string;
  };
  rating: number;
  comment: string;
  date: string;
};
