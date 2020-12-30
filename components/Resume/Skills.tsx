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
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import {
  FaBookReader,
  FaPencilAlt,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";

export const SkillsComponent: FunctionComponent<{}> = ({}) => {
  const [skills, setSkills] = React.useState<
    Array<{ skillName: string; rating: number }>
  >([{ skillName: "", rating: 0 }]);
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
      {skills &&
        skills.map((skill) => (
          <VStack key={skill.skillName}>
            <Text fontSize={26}>{skill.skillName}</Text>
            <Progress hasStripe value={skill.rating} />
          </VStack>
        ))}
      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={{ skillName: "", rating: 0 }}
          onSubmit={(values) => {
            console.log(values);
            setSkills([...skills, {...values}]);
            console.log(skills);
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
                    <Input
                      {...field}
                      bg="#f0f1f2"
                      type="number"
                      placeholder="Rating"
                      id="rating"
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
