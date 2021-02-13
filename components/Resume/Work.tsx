import { Box, HStack, useDisclosure } from "@chakra-ui/react";
import React, { FunctionComponent, useState } from "react";
import { FaBriefcase } from "react-icons/fa";
import { CurrentWorkExperience } from "./WorkExperience/CurrentWork";
import { FormerWorkExperience } from "./WorkExperience/FormerWork";

export type WorkType = {
  employer: "";
  jobTitle: "";
  address: "";
  startDate: "";
  endDate?: "";
  jobDescription: "";
};

const WorkExperience: FunctionComponent<{}> = ({}) => {
  const {
    isOpen: isOpenCurrent,
    onClose: onCloseCurrent,
    onToggle: onToggleCurrent,
  } = useDisclosure();
  const {
    isOpen: isOpenFormer,
    onClose: onCloseFormer,
    onToggle: onToggleFormer,
  } = useDisclosure();

  const [currentWork, setCurrentWork] = useState<WorkType>({
    employer: "",
    jobTitle: "",
    address: "",
    startDate: "",
    jobDescription: "",
  });
  const [formerWork, setFormerWork] = useState<WorkType>({
    employer: "",
    jobTitle: "",
    address: "",
    startDate: "",
    jobDescription: "",
  });

  const [formerWorkExperiences, setFormerWorkExperiences] = useState<
    Array<WorkType>
  >([]);

  const handleCurrentWorkSubmission = ({ values }) => {
    setCurrentWork({
      employer: values.employer,
      jobTitle: values.jobTitle,
      address: values.address,
      startDate: values.startDate,
      jobDescription: values.jobDescription,
    });
  };

  const handleFormerWorkSubmission = ({ values }) => {
    console.log(values);
    setFormerWork({
      employer: values.employer,
      jobTitle: values.jobTitle,
      address: values.address,
      startDate: values.startDate,
      endDate: values.endDate,
      jobDescription: values.jobDescription,
    });
    setFormerWorkExperiences(() => [...formerWorkExperiences, values]);
    console.log(formerWorkExperiences);
  };

  const handleUpdateSubmission = ({ values }: { values: WorkType }) => {
    const index = formerWorkExperiences.indexOf(formerWork);
    console.log(index);
    const workExperiencesCopy = formerWorkExperiences.slice();
    workExperiencesCopy[index] = { ...values };
    setFormerWorkExperiences([...workExperiencesCopy]);
    // setFormerWork({ ...workExperiencesCopy[index] });
  };

  return (
    <Box
      p={4}
      pl={8}
      backgroundColor="white"
      width="64vw"
      ml={2}
      mt={2}
      mb={4}
      overflowY="auto"
    >
      <HStack pl={6} color="blue.500" fontSize={30}>
        <Box mr={8}>
          <FaBriefcase />
        </Box>
        <Box ml={8} color="gray.500">
          Work Experience
        </Box>
      </HStack>
      <CurrentWorkExperience
        currentWork={currentWork}
        handleSubmit={handleCurrentWorkSubmission}
        isOpen={isOpenCurrent}
        onClose={onCloseCurrent}
        onToggle={onToggleCurrent}
      />
      <FormerWorkExperience
        formerWorkExperience={formerWork}
        formerWorkExperiences={formerWorkExperiences}
        handleSubmit={handleFormerWorkSubmission}
        handleJobUpdate={handleUpdateSubmission}
        isOpen={isOpenFormer}
        onClose={onCloseFormer}
        onToggle={onToggleFormer}
      />
    </Box>
  );
};

export default WorkExperience;
