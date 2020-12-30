import React from "react";
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
import { Flex } from "@chakra-ui/react";

const authSideNavs: Array<LinkType> = [
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

const authTopNavs: Array<LinkType> = [
  {
    name: "Profile",
    href: "/user",
  },
  {
    name: "Log Out",
    href: "/logout",
  },
];

const guestSideNavs: Array<LinkType> = [
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

const guestTopNavs: Array<LinkType> = [
  {
    name: "Sign In",
    href: "/login",
    buttonStyle: "transparent",
  },
  {
    name: "Create an account",
    href: "/register",
    buttonStyle: "white",
    buttonColor: "#2e83f2",
  },
];

const NavigationComponent: FunctionComponent<{}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  return (
    <>
      {/* Top navigation */}
      {isAuthenticated ? (
        <TopBarMenu links={authTopNavs} />
      ) : (
        <TopBarMenu links={guestTopNavs} />
      )}
      <Flex>
        {/* Side Navigation */}
        {isAuthenticated ? (
          <SideBarMenu links={authSideNavs} />
        ) : (
          <SideBarMenu links={guestSideNavs} />
        )}
        {children}
      </Flex>
    </>
  );
};

export default NavigationComponent;
