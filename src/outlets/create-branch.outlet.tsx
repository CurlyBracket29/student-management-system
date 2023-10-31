import { Box, Grid, GridCol, Stack, TextInput } from "@mantine/core";
import React from "react";

type Props = {};

const CreateBranchOutlet = (props: Props) => {
  return (
    <Box className="h-full flex-1 flex flex-col  ">
      <form className="h-full">
        <Box className="flex items-center justify-center h-full">
          <Grid className="p-4 w-3/5" gutter="md">
            <GridCol span={6} className="">
              <TextInput
                required
                label="Name"
                placeholder="hello@mantine.dev"
                radius="md"
              />
            </GridCol>
            <GridCol span={6} className="">
              <TextInput
                required
                label="Address"
                placeholder="hello@mantine.dev"
                radius="md"
              />
            </GridCol>
            <GridCol span={6} className="">
              <TextInput
                required
                label="City"
                placeholder="hello@mantine.dev"
                radius="md"
              />
            </GridCol>
            <GridCol span={6} className="">
              <TextInput
                required
                label="State"
                placeholder="hello@mantine.dev"
                radius="md"
              />
            </GridCol>
            <GridCol span={6} className="">
              <TextInput
                required
                label="Country"
                placeholder="hello@mantine.dev"
                radius="md"
              />
            </GridCol>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default CreateBranchOutlet;
