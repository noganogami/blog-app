"use client";

import {
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

interface ModalTemplateProps {
  title: string;
  children: React.ReactNode;
}

export const ModalTemplate = ({ ...props }: ModalTemplateProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="button" onClick={onOpen}>
        <Text fontSize={"sm"}>{props.title}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size={"lg"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8} onClick={onClose}>
            {props.children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
