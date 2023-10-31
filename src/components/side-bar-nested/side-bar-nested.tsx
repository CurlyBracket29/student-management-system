import { Box, Button, Code, Group, ScrollArea } from "@mantine/core";

import { SideBarLinksGroup } from "./side-bar-links-group/side-bar-links-group";
import classes from "./side-bar-nested.module.css";
import { IconLogout } from "@tabler/icons-react";
import { useState } from "react";

export function SidebarNested({ items, activeTab }: any) {
  const [initialOpenIndex, setInitialOpenIndex] = useState(0);
  const links = items.map((item: any, index: number) => (
    <SideBarLinksGroup
      {...item}
      setOpenIndex={() => setInitialOpenIndex(index)}
      activeTab={activeTab}
      key={item.label}
      initiallyOpened={initialOpenIndex === index}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          {/* <Logo style={{ width: rem(120) }} /> */}
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <Box
          className={`${classes.signout} w-full flex items-center justify-center p-2`}
        >
          <Button color="gray" variant="filled" className="flex gap-2 ">
            <Box className="mr-2">Sign Out</Box> <IconLogout />
          </Button>
        </Box>
      </div>
    </nav>
  );
}
