import { getPostId } from "@/lib/posts";
import { Box } from "@chakra-ui/react";

export function generateStaticParams() {
  return getPostId();
}

interface PostParams {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostParams) {
  return <Box>{params.id}</Box>;
}
