import { PostType } from "@/types";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";

interface PostCardProps {
  post: PostType;
}
export const PostCard = ({ ...props }: PostCardProps) => {
  return (
    <Box
      py={5}
      borderBottomWidth={1}
      borderColor={"black"}
      as={"a"}
      href={`/posts/${props.post.id}`}
    >
      <Heading fontSize={"2xl"} noOfLines={2}>
        {props.post.title}
      </Heading>
      <Text mb={2} color={"gray"}>
        {props.post.date}
      </Text>
      <Box noOfLines={3} color={"blackAlpha.700"} h={"100%"}>
        <ReactMarkdown>{props.post.content}</ReactMarkdown>
      </Box>
    </Box>
  );
};
