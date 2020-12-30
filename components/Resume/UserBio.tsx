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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { FunctionComponent } from "react";
import { FaPencilAlt } from "react-icons/fa";

export const UserBioComponent: FunctionComponent<{
  name: string;
  type: string;
  placeholder: string;
  icon: any;
}> = ({ name, type, placeholder, icon }) => {
  const [bio, setBio] = React.useState("");
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <>
      <HStack ml={6} mr={6} mt={2} mb={2} fontFamily="serif">
        <Icon as={icon} color="blue.400" fontSize={20} mr={8} />
        <Text fontSize={26}>{bio ? bio : `${placeholder}`}</Text>
        <Spacer />
        <Box onClick={onToggle} _hover={{ cursor: "pointer" }}>
          <Icon as={FaPencilAlt} color="blue.400" fontSize={20} mb={1} />
        </Box>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Formik
          initialValues={{ [name]: bio }}
          onSubmit={(values) => {
            console.log(values);
            setBio(values[name]);
            onClose();
          }}
        >
          {() => (
            <Form>
              <Field name={name}>
                {({ field, form }: { field: any; form: any }) => (
                  <FormControl pl={6} pr={6} mt={2}>
                    <Input
                      {...field}
                      bg="#f0f1f2"
                      type={type}
                      placeholder={placeholder}
                      id="email"
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
