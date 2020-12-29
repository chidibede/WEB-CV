import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export type LinkType = {
  name: string;
  href: string;
  icon: any;
};

export const TopBarMenu: FunctionComponent<{ links?: Array<any> }> = ({
  links,
}) => {
  {
    /* Top Navigation */
  }
  return (
    <Box bg="#2e83f2" width="100%" p={4} borderBottom="5px solid #edeff0">
      <HStack>
        <Link href="/">
          <Text
            _hover={{ cursor: "pointer" }}
            ml={4}
            color="white"
            fontSize={26}
            fontWeight="bold"
          >
            WEB CV
          </Text>
        </Link>
        <Spacer />
        <Link href="/login">
          <Button
            bg="transparent"
            color="white"
            _hover={{ bg: "blue.400" }}
            fontSize={20}
          >
            Sign In
          </Button>
        </Link>

        <Link href="/register">
          <Button bg="white" color="blue.500" fontSize={20}>
            Create an account
          </Button>
        </Link>
      </HStack>
    </Box>
  );
};
