import ReactMarkdown from "react-markdown";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import remarkGfm from "remark-gfm";
import { getPostIds, getPostData } from "@/lib/posts";
import {
  Box,
  ComponentDefaultProps,
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return getPostIds();
}

interface PostParams {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostParams) {
  const data = getPostData(params.id);

  const theme = {
    p: (props: ComponentDefaultProps) => {
      const { children } = props;
      return (
        <Text mb={2} fontSize={"lg"}>
          {children}
        </Text>
      );
    },
    ul: (props: ComponentDefaultProps) => {
      const { children } = props;
      return (
        <UnorderedList mb={2} pl={2}>
          {children}
        </UnorderedList>
      );
    },
    ol: (props: ComponentDefaultProps) => {
      const { children } = props;
      return (
        <OrderedList mb={2} pl={1}>
          {children}
        </OrderedList>
      );
    },
    li: (props: ComponentDefaultProps) => {
      const { children } = props;
      return <ListItem fontSize={"lg"}>{children}</ListItem>;
    },
  };

  return (
    <Box maxW={680} w={"100%"} py={20}>
      <Heading>{data.title}</Heading>
      <Text mb={5}>{data.date}</Text>
      <ReactMarkdown
        components={ChakraUIRenderer(theme)}
        remarkPlugins={[remarkGfm]}
      >
        {data.content}
      </ReactMarkdown>
    </Box>
  );
}
