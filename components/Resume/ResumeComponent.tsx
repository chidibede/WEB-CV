import {
  Box,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { FaBriefcase, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { SkillsComponent } from "./Skills";
import {
  UserBioComponent,
} from "./UserBio";

const ResumeComponent: FunctionComponent<{}> = ({}) => {
  const userBio = [
    { name: "profession", type: "text", placeholder: "Profession", icon: FaBriefcase },
    { name: "location", type: "text", placeholder: "Location", icon: FaHome },
    { name: "email", type: "email", placeholder: "Email", icon: FaEnvelope },
    { name: "phone_number", type: "text", placeholder: "Phone Number" , icon: FaPhone},
  ];
  return (
    <Flex>
      <Box w="25%" m={4} bg="white">
        <Flex flexDirection="column">
          {/* USER IMAGE */}
          <Image
            src="https://bit.ly/sage-adebayo"
            alt="Segun Adebayo"
            pl={6}
            pt={6}
            pr={6}
            w="100vw"
            h="30vh"
          />

          {/* USER NAME  */}
          <Text
            fontSize={36}
            fontWeight="bold"
            fontFamily="serif"
            ml={6}
            mb={4}
          >
            Segun Adebayo
          </Text>

          {/* USER BIO */}
          {userBio.map((bio) => (
            <UserBioComponent
              key={bio.name}
              name={bio.name}
              type={bio.type}
              placeholder={bio.placeholder}
              icon={bio.icon}
            />
          ))}

          <SkillsComponent />
        </Flex>
      </Box>
      <Box w="75%" m={4} bg="white"></Box>
    </Flex>
  );
};

export default ResumeComponent;
