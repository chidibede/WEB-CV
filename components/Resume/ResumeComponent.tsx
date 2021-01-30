import { Flex, Image, Text } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { FaBriefcase, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";
import { LanguagesComponent } from "./Languages";
import { SkillsComponent } from "./Skills";
import { UserBioComponent } from "./UserBio";
import WorkExperience from "./Work";

const ResumeComponent: FunctionComponent<{}> = ({}) => {
  const userBio = [
    {
      name: "profession",
      type: "text",
      placeholder: "Profession",
      icon: FaBriefcase,
    },
    { name: "location", type: "text", placeholder: "Location", icon: FaHome },
    { name: "email", type: "email", placeholder: "Email", icon: FaEnvelope },
    {
      name: "phone_number",
      type: "text",
      placeholder: "Phone Number",
      icon: FaPhone,
    },
  ];
  return (
    <Flex>
      {/* <Box w="25%" m={4} bg="white"> */}
      <Flex
        flexDirection="column"
        width="24vw"
        backgroundColor="white"
        mr={4}
        ml={4}
        mt={2}
        mb={4}
        pl={4}
        pt={4}
        pr={4}
      >
        {/* USER IMAGE */}
        <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" h="30vh" />
        {/* USER NAME  */}
        <Text fontSize={36} fontWeight="bold" fontFamily="serif" ml={6} mb={4}>
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
        <LanguagesComponent />
      </Flex>
      {/* </Box> */}
      <Flex>
        <WorkExperience />
      </Flex>
    </Flex>
  );
};

export default ResumeComponent;
