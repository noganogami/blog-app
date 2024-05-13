export type PostType = {
  id: string;
  title: string;
  date: string;
  tags: Set<string>;
  content: string;
};

export type Tag = {
  name: string;
  refCount: number;
};
