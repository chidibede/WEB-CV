import {
  Box,
  Button,
  Collapse,
  FormControl,
  HStack,
  Icon,
  Input,
  Spacer,
  Text,
  useDisclosure,
  Progress,
  Flex,
  Select,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { FunctionComponent, useState } from "react";
import { FaBookReader, FaPencilAlt, FaPlusCircle } from "react-icons/fa";

type SkillType = { skillName: string; rating: number };

export const SkillsComponent: FunctionComponent<{}> = ({}) => {
  const [skills, setSkills] = useState<SkillType[]>([
    { skillName: "", rating: 0 },
  ]);
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <HStack ml={6} mr={6} mb={2} mt={10} fontFamily="serif">
        <Icon as={FaBookReader} color="blue.400" fontSize={20} mr={8} />
        <Text fontSize={26}>Skills</Text>
        <Spacer />
        <Box onClick={onToggle} _hover={{ cursor: "pointer" }}>
          <Icon as={FaPlusCircle} color="blue.400" fontSize={24} mb={1} />
        </Box>
      </HStack>

      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={{ skillName: "", rating: 0 }}
          onSubmit={(values, { resetForm }) => {
            setSkills([...skills, { ...values }]);
            resetForm();
            onClose();
          }}
        >
          {() => (
            <Form>
              <Field name="skillName">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pl={6} pr={6} mt={2}>
                    <Input
                      {...field}
                      bg="#f0f1f2"
                      type="text"
                      placeholder="Skill Name"
                      id="skillName"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="rating">
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pl={6} pr={6} mt={2}>
                    <Select
                      {...field}
                      bg="#f0f1f2"
                      placeholder="Select Ratings"
                    >
                      <option value="10">10%</option>
                      <option value="20">20%</option>
                      <option value="30">30%</option>
                      <option value="40">40%</option>
                      <option value="50">50%</option>
                      <option value="60">60%</option>
                      <option value="70">70%</option>
                      <option value="80">80%</option>
                      <option value="90">90%</option>
                      <option value="100">100%</option>
                    </Select>
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
      {skills &&
        skills.map((skill, index, skills) => (
          <Flex flexDirection="column" key={skill.skillName} ml={6} mb={4}>
            {skill.skillName && (
              <>
                <Accordion allowToggle>
                  <AccordionItem>
                    <HStack>
                      <Text fontSize={18}>{skill.skillName}</Text>
                      <Spacer />
                      <AccordionButton w="10%" mr={6} p={2}>
                        <Icon
                          as={FaPencilAlt}
                          color="blue.400"
                          fontSize={20}
                          mb={1}
                        />
                      </AccordionButton>
                    </HStack>
                    <Progress
                      hasStripe
                      isAnimated
                      borderRadius={12}
                      h={4}
                      value={skill.rating}
                      mr={6}
                      mt={4}
                    />

                    <AccordionPanel pb={4}>
                      <Formik
                        initialValues={{
                          skillName: skill.skillName,
                          rating: skill.rating,
                        }}
                        onSubmit={(values) => {
                          const newSkills = skills.slice();
                          newSkills[index].skillName = values.skillName;
                          newSkills[index].rating = values.rating;
                          setSkills([...newSkills]);
                        }}
                      >
                        {() => (
                          <Form>
                            <Field name="skillName">
                              {({ field, form }: { field: any; form: any }) => (
                                <FormControl pl={6} pr={6} mt={2}>
                                  <Input
                                    {...field}
                                    bg="#f0f1f2"
                                    type="text"
                                    placeholder="Skill Name"
                                    id="skillName"
                                  />
                                </FormControl>
                              )}
                            </Field>
                            <Field name="rating">
                              {({ field, form }: { field: any; form: any }) => (
                                <FormControl pl={6} pr={6} mt={2}>
                                  <Select
                                    {...field}
                                    bg="#f0f1f2"
                                    placeholder="Select Ratings"
                                  >
                                    <option value="10">10%</option>
                                    <option value="20">20%</option>
                                    <option value="30">30%</option>
                                    <option value="40">40%</option>
                                    <option value="50">50%</option>
                                    <option value="60">60%</option>
                                    <option value="70">70%</option>
                                    <option value="80">80%</option>
                                    <option value="90">90%</option>
                                    <option value="100">100%</option>
                                  </Select>
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
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </>
            )}
          </Flex>
        ))}
    </>
  );
};
