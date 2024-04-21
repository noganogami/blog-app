import { PostType } from "@/types";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const BASE_DIR = join(process.cwd(), "/src/posts");

export const getPostData = (id: string): PostType => {
  const filePath = join(BASE_DIR, `${id}.md`);
  const file = readFileSync(filePath);
  const { data, content } = matter(file);
  return {
    id,
    ...(data as { title: string; date: string }),
    content,
  };
};

export const getAllPostData = (): PostType[] => {
  const files = readdirSync(BASE_DIR);
  const posts = files.map(filename => {
    return getPostData(filename.replace(/\.md$/, ""));
  });
  return posts;
};

export const getPostIds = () => {
  const files = readdirSync(BASE_DIR);
  const ids = files.map(filename => {
    return { id: filename.replace(/\.md$/, "") };
  });

  return ids;
};
