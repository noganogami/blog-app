import { PostCard } from "@/components/PostCard";
import { getAllPostData } from "@/lib/posts";
import { Box, Flex } from "@chakra-ui/react";

export default function Home() {
  const posts = getAllPostData();

  return (
    <Box flexDirection={"column"} h={"100%"} w={"100%"} maxW={800} py={20}>
      <Box h={100} w={"100%"} bg={"gray"}>
        filter
      </Box>
      <Flex flexDirection={"column"} p={10} gap={5} borderWidth={1}>
        {posts.map(post => {
          return <PostCard post={post} key={post.id} />;
        })}
      </Flex>
    </Box>
  );
}
