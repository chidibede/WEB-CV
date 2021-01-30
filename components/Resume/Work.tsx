import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Spacer,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { FC, FunctionComponent, useState } from "react";
import {
  FaBriefcase,
  FaPencilAlt,
  FaPlusCircle,
  FaTrash,
} from "react-icons/fa";

export type WorkType = {
  employer: "";
  jobTitle: "";
  address: "";
  startDate: "";
  endDate?: "";
  jobDescription: "";
};

const CurrentWorkExperience: FC<{
  currentWork: WorkType;
  onToggle: () => void;
  isOpen: boolean;
  handleSubmit: (params) => void;
  onClose: () => void;
}> = ({ currentWork, onToggle, isOpen, handleSubmit, onClose, children }) => {
  return (
    <>
      {/* current work  */}
      <HStack mt={4} color="blue.500" mb={2} fontSize={24}>
        <Box mr={8}>
          <FaBriefcase />
        </Box>
        <Box ml={8} color="gray.500" mr={12}>
          Current Employment
        </Box>

        {/* Display add button if current work exists else display edit and delete icon button */}
        {!currentWork.jobTitle && (
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
            <Icon as={FaPlusCircle} color="blue.400" fontSize={24} mb={1} />
          </Box>
        )}
      </HStack>

      {/* Display the current work that has been added */}
      {currentWork.jobTitle && (
        <HStack>
          <Flex color="blue.400" fontSize={20} fontFamily="sans-serif">
            {currentWork.jobTitle}/{currentWork.address}
          </Flex>
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
            <Icon as={FaPencilAlt} color="blue.400" fontSize={24} mb={1} />
          </Box>
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
            <Icon as={FaTrash} color="blue.400" fontSize={24} mb={1} />
          </Box>
        </HStack>
      )}

      {/* Collapsable form for adding and editing currentWork */}
      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={currentWork}
          onSubmit={(values, { resetForm }) => {
            handleSubmit({ values });
            onClose();
          }}
        >
          {() => (
            <Form>
              <HStack>
                <Field name="employer">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Current Employer"
                        id="employer"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="jobTitle">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Job Title"
                        id="jobTitle"
                      />
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <HStack>
                <Field name="address">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Address"
                        id="address"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="startDate">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="date"
                        placeholder="Start Date"
                        id="startDate"
                      />
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <Field name="jobDescription">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pl={6} pr={6} mt={2}>
                    <Textarea
                      {...field}
                      height={24}
                      bg="#f0f1f2"
                      id="jobDescription"
                      placeholder="Job Functions"
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                _hover={{ bg: "blue.300" }}
                type="submit"
                ml={6}
                bg="blue.500"
                color="white"
                size="sm"
                mt={2}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Collapse>
    </>
  );
};

const FormerWorkExperience: FC<{
  formerWorkExperiences: Array<WorkType>;
  onToggle: () => void;
  isOpen: boolean;
  handleSubmit: (params) => void;
  onClose: () => void;
}> = ({ formerWorkExperiences, onToggle, isOpen, handleSubmit, onClose }) => {
  return (
    <>
      {/* former work  */}
      <HStack mt={4} color="blue.500" mb={2} fontSize={24}>
        <Box mr={8}>
          <FaBriefcase />
        </Box>
        <Box ml={8} color="gray.500" mr={12}>
          Former Employments
        </Box>

        <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
          <Icon as={FaPlusCircle} color="blue.400" fontSize={24} mb={1} />
        </Box>
      </HStack>

      {formerWorkExperiences.map((formerWork, index) => {
        return (
          formerWorkExperiences.length > 0 && (
            <HStack key={index}>
              <Flex color="blue.400" fontSize={20} fontFamily="sans-serif">
                {formerWork.jobTitle}/{formerWork.address}
              </Flex>
              <Spacer />
              <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
                <Icon as={FaPencilAlt} color="blue.400" fontSize={24} mb={1} />
              </Box>
              <Box onClick={onToggle} _hover={{ cursor: "pointer" }} ml={8}>
                <Icon as={FaTrash} color="blue.400" fontSize={24} mb={1} />
              </Box>
            </HStack>
          )
        );
      })}

      {/* Collapsable form for adding and editing pastWork */}
      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={{
            employer: "",
            jobTitle: "",
            address: "",
            startDate: "",
            jobDescription: "",
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit({ values });
            onClose();
          }}
        >
          {() => (
            <Form>
              <HStack>
                <Field name="employer">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Former Employer"
                        id="employer"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="jobTitle">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Job Title"
                        id="jobTitle"
                      />
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <HStack>
                <Field name="address">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="text"
                        placeholder="Address"
                        id="address"
                      />
                    </FormControl>
                  )}
                </Field>
                <Field name="startDate">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pl={6} pr={6} mt={2}>
                      <Input
                        {...field}
                        bg="#f0f1f2"
                        type="date"
                        placeholder="Start Date"
                        id="startDate"
                      />
                    </FormControl>
                  )}
                </Field>
              </HStack>
              <Field name="jobDescription">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pl={6} pr={6} mt={2}>
                    <Textarea
                      {...field}
                      height={24}
                      bg="#f0f1f2"
                      id="jobDescription"
                      placeholder="Job Functions"
                    />
                  </FormControl>
                )}
              </Field>

              <Button
                _hover={{ bg: "blue.300" }}
                type="submit"
                ml={6}
                bg="blue.500"
                color="white"
                size="sm"
                mt={2}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Collapse>
    </>
  );
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
    setFormerWorkExperiences(() => [...formerWorkExperiences, values]);
    console.log(formerWorkExperiences);
  };
  return (
    <Box
      p={6}
      backgroundColor="white"
      width="64vw"
      ml={4}
      mt={2}
      mb={4}
      maxH="45%"
      overflowY="auto"
    >
      <HStack color="blue.500" fontSize={32}>
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
        formerWorkExperiences={formerWorkExperiences}
        handleSubmit={handleFormerWorkSubmission}
        isOpen={isOpenFormer}
        onClose={onCloseFormer}
        onToggle={onToggleFormer}
      />
    </Box>
  );
};

export default WorkExperience;
