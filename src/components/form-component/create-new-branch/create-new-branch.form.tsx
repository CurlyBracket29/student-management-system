import {
  Avatar,
  Box,
  Button,
  Grid,
  Group,
  PasswordInput,
  Select,
  Stack,
  TextInput,
  Textarea,
} from "@mantine/core";
import React, { forwardRef, useEffect, useState } from "react";
import useSupabase from "../../../hooks/use-supabase";
import { useDebouncedValue } from "@mantine/hooks";
import { CitySelectComponent } from "../../city-select/city-select.component";

type Props = {};

const CreateNewBranchForm = ({ submitBranch }: any) => {
  const { supabase } = useSupabase();
  const [value, setValue] = useState("na");
  const [debounced] = useDebouncedValue(value, 250);
  const [cityList, setCityList] = useState<any>([]);
  const [branchName, setBranchName] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCity, setSelectedCity] = useState<any>({});

  const getCityList = async (city: string) => {
    try {
      let { data, error } = await supabase
        .from("city_state_county_map")
        .select("country_name,name,state_name")
        .textSearch("name", `'${city}'`);
      setCityList(data);
    } catch (error) {}
  };

  useEffect(() => {
    if (debounced) {
      getCityList(debounced);
    } else {
      setSelectedCity({});
    }
  }, [debounced]);

  console.log(selectedCity);
  const handleSubmit = () => {
    submitBranch({
      name: branchName,
      city: selectedCity.name,
      state: selectedCity.state_name,
      country: selectedCity.country_name,
      address: address,
    });
  };
  return (
    <Box className="p-2 flex flex-col gap-4">
      <Box className="grid grid-cols-[repeat(2,_minmax(0,_1fr))] gap-4">
        <TextInput
          required
          label="Branch Name"
          placeholder="Orion Acadamey"
          radius="md"
          onChange={(item) => setBranchName(item.target.value)}
        />
        <Textarea
          required
          radius={"md"}
          label="Address"
          placeholder="Input placeholder"
          className="row-span-2 h-full"
          autosize
          minRows={4}
          onChange={(e) => setAddress(e.target.value)}
        />
        <CitySelectComponent
          search={value}
          setSearch={setValue}
          data={cityList}
          selectedValue={selectedCity}
          setSelectedValue={setSelectedCity}
        />

        <TextInput
          readOnly
          label="State"
          placeholder=""
          radius="md"
          value={selectedCity.state_name || ""}
        />
        <TextInput
          readOnly
          label="Country"
          placeholder=""
          radius="md"
          value={selectedCity.country_name || ""}
        />
      </Box>
      <Box className="flex justify-end">
        <Button
          radius={"md"}
          onClick={handleSubmit}
          variant="default"
          color="gray"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateNewBranchForm;
