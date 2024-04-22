import { FilterPosts } from "@/components/FilterPosts";
import { PostCard } from "@/components/PostCard";
import { SortPosts } from "@/components/SortPosts";
import { getPosts, getTopics } from "@/lib/posts";
import { Box, Flex } from "@chakra-ui/react";

interface Params {
  searchParams: {
    order: string;
  };
}

export default function Home({ searchParams }: Params) {
  const posts = getPosts();

  return (
    <Box flexDirection={"column"} h={"100%"} w={"100%"} maxW={800} py={20}>
      <Box mb={2}>
        <SortPosts />
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
