import { ModalTemplate } from "@/components/ModalTemplete";
import { PostCard } from "@/components/PostCard";
import { SelectedTag } from "@/components/SelectedTag";
import { SortPosts } from "@/components/SortPosts";
import { Tags } from "@/components/Tags";
import { getPosts, getAllTags } from "@/lib/posts";
import { Box, Flex } from "@chakra-ui/react";
import { Metadata } from "next";

interface Params {
  searchParams: {
    order: string | undefined;
    tag: string | undefined;
  };
}

export const metadata: Metadata = {
  title: "記事一覧",
};

export default function Home({ searchParams }: Params) {
  const posts = getPosts(searchParams.tag);
  const tags = getAllTags();

  return (
    <Box flexDirection={"column"} h={"100%"} w={"100%"} maxW={800} py={20}>
      <Box mb={2} display={"flex"} gap={2}>
        <SortPosts />
        <ModalTemplate title="タグ一覧">
          <Tags
            tags={tags.map(tag => tag.name)}
            refCounts={tags.map(tag => tag.refCount)}
          />
        </ModalTemplate>
        <SelectedTag />
      </Box>
      <Flex flexDirection={"column"} p={10} gap={5} borderWidth={1}>
        {posts
          .sort((a, b) => {
            return searchParams.order === "ascending"
              ? Date.parse(b.date) + Date.parse(a.date)
              : Date.parse(b.date) - Date.parse(a.date);
          })
          .map(post => {
            return <PostCard post={post} key={post.id} />;
          })}
      </Flex>
    </Box>
  );
}
