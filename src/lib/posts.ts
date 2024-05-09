import { PostType, Topic } from "@/types";
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

export const getTopics = () => {
  const posts = getPosts();
  const topics: Topic[] = [];

  for (const post of posts) {
    for (const tag of post.tags) {
      const idx = topics.findIndex(topic => topic.tag === tag);
      if (idx !== -1) {
        topics[idx] = { tag: tag, refCount: topics[idx].refCount + 1 };
      } else {
        topics.push({ tag: tag, refCount: 1 });
      }
    }
  }
  return topics;
};
