import {
  Box,
  Popover,
  ScrollArea,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";
import { useRef, useState } from "react";

export function CitySelectComponent({
  data,
  search,
  selectedValue,
  setSelectedValue,
  setSearch,
}: any) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const items = data.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item.id}
      display="block"
      bg={index === hovered ? "var(--mantine-color-blue-light)" : undefined}
      w="100%"
      p={5}
      onClick={() => setSelectedValue(item)}
    >
      <Box className="flex flex-col">
        <Box>{item.name}</Box>
        <Box className="text-sm text-neutral-400">
          {item.state_name} , {item.country_name}
        </Box>
      </Box>
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          radius="md"
          value={selectedValue.name || search}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            if (selectedValue.name) {
              setSelectedValue({});
            }
            setSearch(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex =
                  current + 1 >= data.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll("[data-list-item]")
                  ?.[nextIndex]?.scrollIntoView({ block: "nearest" });
                return nextIndex;
              });
            }

            if (event.key === "ArrowUp") {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll("[data-list-item]")
                  ?.[nextIndex]?.scrollIntoView({ block: "nearest" });
                return nextIndex;
              });
            }
          }}
          label="City"
          required
          placeholder="Select city"
        />
      </Popover.Target>
      <Popover.Dropdown p="xs">
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200}>
          {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
