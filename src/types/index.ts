export type PostType = {
  id: string;
  title: string;
  date: string;
  tags: Set<string>;
  content: string;
};

export type Topic = {
  tag: string;
  refCount: number;
};
