import {
  Box,
  Button,
  Collapse,
  Flex,
  FormControl,
  HStack,
  Icon,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import React, { FC } from "react";
import {
  FaBriefcase,
  FaPlusCircle,
  FaPencilAlt,
  FaTrash,
} from "react-icons/fa";
import { WorkType } from "../Work";

export const CurrentWorkExperience: FC<{
  currentWork: WorkType;
  onToggle: () => void;
  isOpen: boolean;
  handleSubmit: (params) => void;
  onClose: () => void;
}> = ({ currentWork, onToggle, isOpen, handleSubmit, onClose, children }) => {
  return (
    <>
      {/* current work  */}
      <HStack pl={8} mt={4} color="blue.500" mb={2} fontSize={18}>
        <Box mr={8}>
          <FaBriefcase />
        </Box>
        <Box ml={8} color="gray.500" mr={12}>
          Current Employment
        </Box>
        <Spacer />

        {/* Display add button if current work exists else display edit and delete icon button */}
        {!currentWork.jobTitle && (
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} pr={8}>
            <Icon as={FaPlusCircle} color="blue.400" fontSize={24} mb={1} />
          </Box>
        )}
      </HStack>

      {/* Display the current work that has been added */}
      {currentWork.jobTitle && (
        <HStack>
          <Flex color="blue.400" fontSize={18} pl={8} fontFamily="sans-serif">
            {currentWork.jobTitle}/{currentWork.address}
          </Flex>
          <Spacer />
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} pr={4} ml={8}>
            <Icon as={FaPencilAlt} color="blue.400" fontSize={18} mb={1} />
          </Box>
          <Box onClick={onToggle} _hover={{ cursor: "pointer" }} pr={4} ml={8}>
            <Icon as={FaTrash} color="blue.400" fontSize={18} mb={1} />
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
