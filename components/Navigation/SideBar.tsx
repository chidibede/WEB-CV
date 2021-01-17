import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export type LinkType = {
  name: string;
  href: string;
  icon?: any;
  buttonStyle?: string;
  buttonColor?: string;
};

export const SideBarMenu: FunctionComponent<{ links: Array<any> }> = ({
  links,
}) => {
  /* Side Navigation */
  return (
    <Flex
      flexDirection="column"
      height="92vh"
      color="#2e83f2"
      borderRight="2px solid #ebecf0"
      bg="white"
     
    >
      {links.map((link: LinkType) => (
        <Link href={link.href} key={link.name}>
          <Box
            _hover={{ cursor: "pointer", bg: "#edeff0" }}
            fontSize={24}
            textAlign="center"
            pb={8}
            pt={8}
            width="8vw"
            // pr={4}
            // pl={4}
          >
            <Icon as={link.icon} />
            <Text>{link.name}</Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};
