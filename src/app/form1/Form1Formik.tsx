"use client";

import { ChangeEvent, FC, FormEvent, useState } from "react";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

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
const Form1FormikPage: FC = () => {
  const [values, setValues] = useState<RegisterFormType>({
    fullName: "",
    username: "",
    age: 0,
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [error, setError] = useState<RegisterFormErrorType>({
    fullName: "",
    username: "",
    age: "",
    mobileNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value, // Ensure age is a number
    }));
  };

  const validateForm = (): boolean => {
    const errors: RegisterFormErrorType = {
      fullName: "",
      username: "",
      age: "",
      mobileNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    };

    let isValid = true;

    if (!values.fullName) {
      errors.fullName = "Full Name is required.";
      isValid = false;
    }
    if (!values.username) {
      errors.username = "Username is required.";
      isValid = false;
    }
    if (!values.age || isNaN(Number(values.age)) || values.age <= 0) {
      errors.age = "Valid Age is required.";
      isValid = false;
    }
    if (!values.mobileNumber) {
      errors.mobileNumber = "Mobile Number is required.";
      isValid = false;
    }
    if (!values.email || !values.email.includes("@")) {
      errors.email = "Valid Email is required.";
      isValid = false;
    }
    if (!values.password) {
      errors.password = "Password is required.";
      isValid = false;
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
      isValid = false;
    }

    setError(errors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form Submitted Successfully!");
      console.log("Form Values:", values);
      setError({
        fullName: "",
        username: "",
        age: "",
        mobileNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
      });
    }
  };

  return (
    <Container>
      <Container py="10">
        <Heading>Example Form 1</Heading>
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
                  required
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
                  required
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

                <Field
                  label="Age"
                  required
                  invalid={!!error.age}
                  errorText={error.age}
                >
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
                  required
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
                  required
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
                  required
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
                  required
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
