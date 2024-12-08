"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
import { Box, Container, Heading, Input, Stack } from "@chakra-ui/react";
import { FC } from "react";

const Form2Page: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior
    alert("Hello World!");
  };

  return (
    <Container>
      <Container py="10">
        <Heading>Example Form 2</Heading>
        <Box padding="4" border="1px solid lightgray" borderRadius="4px" mt="8">
          <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
            <Stack gap="4">
              <Heading size="md">Contact Details</Heading>
              <Box as="p" fontSize="sm" color="gray.500">
                Please provide your contact details below.
              </Box>

              <Field label="Name" colorPalette="cyan">
                <Input name="name" />
              </Field>
              <Field label="Email address">
                <Input name="email" type="email" colorPalette="cyan" />
              </Field>
              <Field label="Country">
                <NativeSelectRoot>
                  <NativeSelectField
                    colorPalette="cyan"
                    name="country"
                    items={[
                      "United Kingdom (UK)",
                      "Canada (CA)",
                      "United States (US)",
                    ]}
                  />
                </NativeSelectRoot>
              </Field>

              {/* Submit Button */}
              <Button type="submit" colorPalette="cyan" alignSelf="flex-start">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Container>
    </Container>
  );
};

export default Form2Page;
