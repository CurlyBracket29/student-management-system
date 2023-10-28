import { Code, Group, ScrollArea } from "@mantine/core";
import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from "@tabler/icons-react";
// import { UserButton } from "../UserButton/UserButton";

import { SideBarLinksGroup } from "./side-bar-links-group/side-bar-links-group";
import classes from "./side-bar-nested.module.css";

const mockdata = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Students",
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: "Enroll new", link: "/" },
      { label: "Edit/View Student", link: "/" },
    ],
  },
  {
    label: "Events",
    icon: IconCalendarStats,
    links: [
      { label: "Create Event", link: "/" },
      { label: "Manage Event", link: "/" },
    ],
  },
  {
    label: "Staff",
    icon: IconFileAnalytics,
    links: [
      { label: "Recruit new", link: "/" },
      { label: "Edit/View Staff", link: "/" },
    ],
  },

  {
    label: "Analytics",
    icon: IconPresentationAnalytics,
    links: [
      { label: "Progress Report", link: "/" },
      { label: "Attendence Report", link: "/" },
      { label: "Payment Report", link: "/" },
    ],
  },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Access Mangement", link: "/" },
      { label: "Change password", link: "/" },
      { label: "Recovery codes", link: "/" },
    ],
  },
  { label: "Settings", icon: IconAdjustments },
];

export function SidebarNested() {
  const links = mockdata.map((item) => (
    <SideBarLinksGroup {...item} key={item.label} />
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

      <div className={classes.footer}>{/* <UserButton /> */}</div>
    </nav>
  );
}
