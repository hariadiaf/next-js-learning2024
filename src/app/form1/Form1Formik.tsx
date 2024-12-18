"use client";

import { ChangeEvent, FC } from "react";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useFormik } from "formik";

type RegisterFormType = {
  fullName: string;
  username: string;
  age: number;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  address?: string;
};

type RegisterFormErrorType = {
  fullName: string;
  username: string;
  age: string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  address?: string;
};

const InitialFormValues = {
  fullName: "",
  username: "",
  age: "",
  mobileNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
};
const Form1FormikPage: FC = () => {
  const validate = (values: RegisterFormType) => {
    const errors: Partial<RegisterFormErrorType> = {};
    if (!values.fullName) {
      errors.fullName = "Full Name is required.";
    }
    if (!values.username) {
      errors.username = "Username is required.";
    }
    if (!values.age || isNaN(Number(values.age)) || values.age <= 0) {
      errors.age = "Valid Age is required.";
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required.";
    }
    if (!values.email || !values.email.includes("@")) {
      errors.email = "Valid Email is required.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }

    return errors;
  };

  const formik = useFormik<RegisterFormType>({
    initialValues: InitialFormValues as unknown as RegisterFormType,
    validate,
    onSubmit: (value) => {
      console.log("onSubmit : ", value);
    },
  });

  const { values, errors: error, setFieldValue, handleSubmit } = formik;
  console.log(formik);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const _value = name === "age" ? Number(value) : value;
    setFieldValue(name, _value);
  };

  return (
    <Container>
      <Container py="10">
        <Heading>Example Form 2 with useFormik</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <form onSubmit={handleSubmit}>
            <Stack gap="4">
              <Heading size="md">Create Account</Heading>
              <Box as="p" fontSize="sm" color="gray.500">
                Please provide your details below.
              </Box>

              <Stack direction="column" gap="4">
                <Field
                  label="Full Name"
                  invalid={!!error.fullName}
                  errorText={error.fullName}
                >
                  <Input
                    placeholder="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    colorPalette="teal"
                    type="text"
                  />
                </Field>
                <Field
                  label="Username"
                  invalid={!!error.username}
                  errorText={error.username}
                >
                  <Input
                    placeholder="Username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    colorPalette="teal"
                    type="text"
                  />
                </Field>

                <Field label="Age" invalid={!!error.age} errorText={error.age}>
                  <Input
                    placeholder="Age"
                    name="age"
                    value={values.age}
                    onChange={handleChange}
                    colorPalette="teal"
                    type="number"
                    min={0}
                  />
                </Field>

                <Field
                  label="Mobile Number"
                  invalid={!!error.mobileNumber}
                  errorText={error.mobileNumber}
                >
                  <Input
                    placeholder="Mobile Number"
                    name="mobileNumber"
                    value={values.mobileNumber}
                    onChange={handleChange}
                    colorPalette="teal"
                    type="text"
                  />
                </Field>

                <Field
                  label="Email"
                  invalid={!!error.email}
                  errorText={error.email}
                >
                  <Input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    colorPalette="teal"
                  />
                </Field>

                <Field
                  label="Password"
                  invalid={!!error.password}
                  errorText={error.password}
                >
                  <PasswordInput
                    placeholder="Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    colorPalette="teal"
                  />
                </Field>

                <Field
                  label="Confirm Password"
                  invalid={!!error.confirmPassword}
                  errorText={error.confirmPassword}
                >
                  <PasswordInput
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    colorPalette="teal"
                  />
                </Field>

                <Field
                  label="Address"
                  invalid={!!error.address}
                  errorText={error.address}
                >
                  <Input
                    placeholder="Address"
                    name="address"
                    value={values.address}
                    onChange={handleChange}
                    colorPalette="teal"
                    type="text"
                  />
                </Field>
              </Stack>

              <Button type="submit" colorPalette="teal">
                Register Account
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default Form1FormikPage;
