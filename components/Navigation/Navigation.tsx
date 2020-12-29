import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import {
  FaSignInAlt,
  FaUserPlus,
  FaPencilAlt,
  FaFileAlt,
  FaPowerOff,
  FaUser,
} from "react-icons/fa";
import { LinkType, SideBarMenu } from "./SideBar";
import { TopBarMenu } from "./TopNavigation";

const authLinks: Array<LinkType> = [
  {
    name: "Profile",
    href: "/user",
    icon: FaUser,
  },
  {
    name: "Create and Edit CV",
    href: "/resume/edit",
    icon: FaPencilAlt,
  },
  {
    name: "View CV",
    href: "/resume/view",
    icon: FaFileAlt,
  },
  {
    name: "Log Out",
    href: "/logout",
    icon: FaPowerOff,
  },
];

const guestLinks: Array<LinkType> = [
  {
    name: "Login",
    href: "/login",
    icon: FaSignInAlt,
  },
  {
    name: "Register",
    href: "/register",
    icon: FaUserPlus,
  },
];

const NavigationComponent: FunctionComponent<{}> = ({}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const router = useRouter();
  return (
    <>
      {/* Top navigation */}
      {isAuthenticated ? <TopBarMenu /> : <TopBarMenu />}

      {/* Side Navigation */}
      {isAuthenticated ? (
        <SideBarMenu links={authLinks} />
      ) : (
        <SideBarMenu links={guestLinks} />
      )}
    </>
  );
};

export default NavigationComponent;
