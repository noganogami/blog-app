import { PostType, Tag } from "@/types";
import { readFileSync, readdirSync } from "fs";
import matter from "gray-matter";
import { join } from "path";

const BASE_DIR = join(process.cwd(), "/src/posts");

export const getPostData = (id: string): PostType => {
  const filePath = join(BASE_DIR, `${id}.md`);
  const file = readFileSync(filePath);
  const { data, content } = matter(file);
  return {
    id: id,
    title: data.title,
    date: data.date,
    tags: new Set(data.tags),
    content,
  };
};

export const getPosts = (tag?: string): PostType[] => {
  const files = readdirSync(BASE_DIR);
  const posts = files
    .map(filename => {
      return getPostData(filename.replace(/\.md$/, ""));
    })
    .filter(postData => {
      return tag === undefined || postData.tags.has(tag);
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

export const getAllTags = () => {
  const posts = getPosts();
  const tags: Tag[] = [];

  for (const post of posts) {
    for (const postTag of post.tags) {
      const idx = tags.findIndex(tags => tags.name === postTag);
      if (idx !== -1) {
        tags[idx] = { name: postTag, refCount: tags[idx].refCount + 1 };
      } else {
        tags.push({ name: postTag, refCount: 1 });
      }
    }
  }
  return tags;
};
