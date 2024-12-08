"use client";

import { FC, FormEvent } from "react";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

import {
  NumberInputField,
  NumberInputRoot,
} from "@/components/ui/number-input";

const Form1Page: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert("Hello World!");
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
                <Field label="Full Name" required>
                  <Input
                    placeholder="Full Name"
                    type="text"
                    colorPalette="teal"
                  />
                </Field>

                <Field label="Username" required>
                  <Input
                    placeholder="Username"
                    type="text"
                    colorPalette="teal"
                  />
                </Field>

                <Field label="Age" required>
                  <NumberInputRoot defaultValue="10" width="full" min={0}>
                    <NumberInputField placeholder="Age" colorPalette="teal" />
                  </NumberInputRoot>
                </Field>

                <Field label="Mobile Number" required>
                  <Input
                    placeholder="Mobile Number"
                    type="text"
                    colorPalette="teal"
                  />
                </Field>

                <Field label="Email" required>
                  <Input type="email" placeholder="Email" colorPalette="teal" />
                </Field>

                <Field label="Password" required>
                  <PasswordInput placeholder="Password" colorPalette="teal" />
                </Field>

                <Field label="Confirm Password" required>
                  <PasswordInput
                    placeholder="Confirm Password"
                    colorPalette="teal"
                  />
                </Field>

                <Field label="Address">
                  <Input placeholder="Address" colorPalette="teal" />
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

export default Form1Page;
