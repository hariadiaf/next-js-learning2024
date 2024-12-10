"use client";

import { FC } from "react";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Formik, Form } from "formik";

type RegisterFormType = {
  fullName: string;
  username: string;
  age: number | string;
  mobileNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  address?: string;
};

const InitialFormValues: RegisterFormType = {
  fullName: "",
  username: "",
  age: "",
  mobileNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
};

const validate = (values: RegisterFormType) => {
  const errors: Partial<RegisterFormType> = {};
  if (!values.fullName) {
    errors.fullName = "Full Name is required.";
  }
  if (!values.username) {
    errors.username = "Username is required.";
  }
  if (!values.age || isNaN(Number(values.age)) || Number(values.age) <= 0) {
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

const Form1Formik2Page: FC = () => {
  console.log("hai");
  return (
    <Container>
      <Container py="10">
        <Heading>Example Form 1</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <Formik
            initialValues={InitialFormValues}
            validate={validate}
            onSubmit={(values) => {
              console.log("onSubmit: ", values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              getFieldProps,
            }) => (
              <Form>
                <Stack gap="4">
                  <Heading size="md">Create Account</Heading>
                  <Box as="p" fontSize="sm" color="gray.500">
                    Please provide your details below.
                  </Box>

                  <Stack direction="column" gap="4">
                    <Field
                      label="Full Name"
                      invalid={!!errors.fullName && touched.fullName}
                      errorText={errors.fullName}
                    >
                      <Input
                        placeholder="Full Name"
                        {...getFieldProps("fullName")}
                        // name="fullName"
                        // value={values.fullName}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        colorPalette="teal"
                        type="text"
                      />
                    </Field>

                    <Field
                      label="Username"
                      invalid={!!errors.username && touched.username}
                      errorText={errors.username}
                    >
                      <Input
                        placeholder="Username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                        type="text"
                      />
                    </Field>

                    <Field
                      label="Age"
                      invalid={!!errors.age && touched.age}
                      errorText={errors.age}
                    >
                      <Input
                        placeholder="Age"
                        name="age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                        type="number"
                        min={0}
                      />
                    </Field>

                    <Field
                      label="Mobile Number"
                      invalid={!!errors.mobileNumber && touched.mobileNumber}
                      errorText={errors.mobileNumber}
                    >
                      <Input
                        placeholder="Mobile Number"
                        name="mobileNumber"
                        value={values.mobileNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                        type="text"
                      />
                    </Field>

                    <Field
                      label="Email"
                      invalid={!!errors.email && touched.email}
                      errorText={errors.email}
                    >
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                      />
                    </Field>

                    <Field
                      label="Password"
                      invalid={!!errors.password && touched.password}
                      errorText={errors.password}
                    >
                      <PasswordInput
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                      />
                    </Field>

                    <Field
                      label="Confirm Password"
                      invalid={
                        !!errors.confirmPassword && touched.confirmPassword
                      }
                      errorText={errors.confirmPassword}
                    >
                      <PasswordInput
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                      />
                    </Field>

                    <Field
                      label="Address"
                      invalid={!!errors.address && touched.address}
                      errorText={errors.address}
                    >
                      <Input
                        placeholder="Address"
                        name="address"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        colorPalette="teal"
                        type="text"
                      />
                    </Field>
                  </Stack>

                  <Button type="submit" colorPalette="teal">
                    Register Account
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Container>
  );
};

export default Form1Formik2Page;
