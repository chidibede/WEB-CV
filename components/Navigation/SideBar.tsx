import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { FunctionComponent } from "react";

export type LinkType = {
  name: string;
  href: string;
  icon: any;
};

export const SideBarMenu: FunctionComponent<{ links: Array<any> }> = ({
  links,
}) => {
  /* Side Navigation */
  return (
    <Flex
      flexDirection="column"
      height="92vh"
      width="8vw"
      color="#2e83f2"
      borderRight="2px solid #ebecf0"
    >
      {links.map((link: LinkType) => (
        <Link href={link.href}>
          <Box
            _hover={{ cursor: "pointer", bg: "#edeff0" }}
            fontSize={26}
            textAlign="center"
            pb={8}
            pt={8}
          >
            <Icon as={link.icon} />
            <Text>{link.name}</Text>
          </Box>
        </Link>
      ))}
    </Flex>
  );
};
