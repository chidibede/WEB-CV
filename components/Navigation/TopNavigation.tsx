import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { LinkType } from "./SideBar";

export const TopBarMenu: FunctionComponent<{ links?: Array<LinkType> }> = ({
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

        {links.map((link: LinkType) => (
        <Link href={link.href} key={link.name}>
          <Button
            bg={link.buttonStyle}
            color={link.buttonColor || "white"}
            _hover={{ bg: "blue.400" }}
            fontSize={20}
          >
            {link.name}
          </Button>
        </Link>
      ))}

    
      </HStack>
    </Box>
  );
};
