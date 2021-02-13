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
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import {
  FaBriefcase,
  FaPencilAlt,
  FaPlusCircle,
  FaTrash,
} from "react-icons/fa";
import { WorkType } from "../Work";

export const FormerWorkExperience: FC<{
  formerWorkExperiences: Array<WorkType>;
  formerWorkExperience: WorkType;
  onToggle: () => void;
  isOpen: boolean;
  handleSubmit: (params) => void;
  handleJobUpdate: (params) => void;
  onClose: () => void;
}> = ({
  formerWorkExperiences,
  formerWorkExperience,
  onToggle,
  isOpen,
  handleSubmit,
  handleJobUpdate,
  onClose,
}) => {
  const [onOpenForm, setOnOpenForm] = React.useState(false);
  return (
    <>
      {/* former work  */}
      <HStack pl={8} mt={8} color="blue.500" mb={2} fontSize={18}>
        <Box mr={8}>
          <FaBriefcase />
        </Box>
        <Box ml={8} color="gray.500" mr={12}>
          Former Employments
        </Box>

        <Spacer />

        <Box onClick={onToggle} _hover={{ cursor: "pointer" }} pr={8}>
          <Icon as={FaPlusCircle} color="blue.400" fontSize={24} mb={1} />
        </Box>
      </HStack>

      {formerWorkExperiences.map((formerWork, index) => {
        return (
          formerWorkExperiences.length > 0 && (
            <React.Fragment key={index}>
              <HStack>
                <Flex
                  color="blue.400"
                  fontSize={18}
                  pl={8}
                  fontFamily="sans-serif"
                >
                  {formerWork.jobTitle}/{formerWork.address}
                </Flex>
                <Spacer />
                <Flex>
                  <Box
                    onClick={() => {
                      setOnOpenForm(
                        formerWork === formerWorkExperiences[index]
                      );

                      if (onOpenForm === true) {
                        setOnOpenForm(
                          !(formerWork === formerWorkExperiences[index])
                        );
                      }
                      console.log(onOpenForm);
                    }}
                    _hover={{ cursor: "pointer" }}
                    ml={4}
                  >
                    <Icon
                      as={FaPencilAlt}
                      color="blue.400"
                      fontSize={18}
                      mb={1}
                    />
                  </Box>
                  <Box onClick={() => {}} _hover={{ cursor: "pointer" }} ml={4}>
                    <Icon as={FaTrash} color="blue.400" fontSize={18} mb={1} />
                  </Box>
                </Flex>
              </HStack>
              {onOpenForm && formerWork === formerWorkExperiences[index] && (
                <Box>
                  <Formik
                    initialValues={formerWork}
                    onSubmit={(values, { resetForm }) => {
                      handleJobUpdate({ values });
                      onClose();
                    }}
                  >
                    {() => (
                      <Form>
                        <HStack>
                          <Field name="employer">
                            {({ field, form }: { field: any; form: any }) => (
                              <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                              <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                              <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                          <HStack>
                            <Field name="startDate">
                              {({ field, form }: { field: any; form: any }) => (
                                <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                            <Field name="endDate">
                              {({ field, form }: { field: any; form: any }) => (
                                <FormControl pb={2} pl={6} pr={6} mt={2}>
                                  <Input
                                    {...field}
                                    bg="#f0f1f2"
                                    type="date"
                                    placeholder="End Date"
                                    id="endDate"
                                  />
                                </FormControl>
                              )}
                            </Field>
                          </HStack>
                        </HStack>
                        <Field name="jobDescription">
                          {({ field, form }: { field: any; form: any }) => (
                            <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                </Box>
              )}
            </React.Fragment>
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
            endDate: "",
            jobDescription: "",
          }}
          onSubmit={(values, { resetForm }) => {
            handleSubmit({ values });
            resetForm();
            onClose();
          }}
        >
          {() => (
            <Form>
              <HStack>
                <Field name="employer">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                    <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                    <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                <HStack>
                  <Field name="startDate">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl pb={2} pl={6} pr={6} mt={2}>
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
                  <Field name="endDate">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl pb={2} pl={6} pr={6} mt={2}>
                        <Input
                          {...field}
                          bg="#f0f1f2"
                          type="date"
                          placeholder="End Date"
                          id="endDate"
                        />
                      </FormControl>
                    )}
                  </Field>
                </HStack>
              </HStack>
              <Field name="jobDescription">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pb={2} pl={6} pr={6} mt={2}>
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
