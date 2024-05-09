"use client";

import { Box, Tag, TagLabel, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

interface TagsProps {
  tags: string[];
  refCounts?: number[];
}

export const Tags = ({ ...props }: TagsProps) => {
  const router = useRouter();

  const params = useSearchParams();
  const newParams = new URLSearchParams(params);

  const onClick = (tag: string) => {
    newParams.set("tag", tag);
    router.replace(`/?${newParams.toString()}`);
  };

  return (
    <Wrap>
      {props.tags.map((tag, idx) => (
        <WrapItem key={idx} as={"button"} onClick={() => onClick(tag)}>
          <Tag>
            <TagLabel>{tag}</TagLabel>
            {props.refCounts !== undefined ? (
              <Box
                display="inline-block"
                ml={2}
                borderRadius="full"
                bgColor="white"
                width="20px"
                height="20px"
                textAlign="center"
                lineHeight="20px"
              >
                <Text fontSize="sm">{props.refCounts[idx]}</Text>
              </Box>
            ) : (
              <></>
            )}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  );
};
