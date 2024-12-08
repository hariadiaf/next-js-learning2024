"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import {
  Box,
  Container,
  Fieldset,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { FC } from "react";

const Form1Page: FC = () => {
  return (
    <Container>
      <Container py="10">
        <Heading>Example Form</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <Fieldset.Root size="lg">
            <Stack>
              <Fieldset.Legend>Register Form</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your contact details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Stack direction={{ base: "column", md: "column" }} gap="3">
                <Field label="Username">
                  <Input />
                </Field>
                <Field label="Email">
                  <Input />
                </Field>
                <Field label="Password">
                  <PasswordInput />
                </Field>
                <Field label="Confirm Pass">
                  <PasswordInput />
                </Field>
                <Button type="submit" colorScheme="teal">
                  Register Account
                </Button>
              </Stack>
            </Fieldset.Content>
          </Fieldset.Root>
        </Box>
      </Container>
    </Container>
  );
};

export default Form1Page;
