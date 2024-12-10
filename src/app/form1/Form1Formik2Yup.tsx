"use client";

import { FC } from "react";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Formik, Form } from "formik";
import * as Yup from "yup";

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

const validationSchema: Yup.ObjectSchema<RegisterFormType> = Yup.object().shape(
  {
    fullName: Yup.string().required("Full Name is required."),
    username: Yup.string().required("Username is required."),
    age: Yup.number()
      .typeError("Valid Age is required.")
      .min(18, "Age must be greater than 17.")
      .integer("Age must be a whole number.")
      .required("Age is required."),
    mobileNumber: Yup.string().required("Mobile Number is required."),
    email: Yup.string()
      .email("Email not valid.")
      .required("Email is required."),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Must be 8 characters or more")
      .matches(/[a-z]+/, "Must contain lowercase character")
      .matches(/[A-Z]+/, "Must UPPERCASE character")
      .matches(/[@$!%*#?&]+/, "Must contain special character")
      .matches(/\d+/, "Must contain number"), //source: https://stackoverflow.com/questions/67052123/creating-a-strong-password-with-yup-and-formik-with-individual-error-messages
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Your passwords do not match."), //source: https://stackoverflow.com/questions/61862252/yup-schema-validation-password-and-confirmpassword-doesnt-work
    address: Yup.string(), // Optional field
  }
);

const Form1Formik2YupPage: FC = () => {
  console.log("hai");
  return (
    <Container>
      <Container py="10">
        <Heading>Example Form 1 with Formik component and Yup</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <Formik
            initialValues={InitialFormValues}
            validationSchema={validationSchema}
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

export default Form1Formik2YupPage;
