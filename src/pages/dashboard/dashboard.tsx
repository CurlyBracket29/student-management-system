import { Box } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { SidebarNested } from "../../components/side-bar-nested/side-bar-nested";
import { SupaBaseContext } from "../../providers/supabase/supabase.provider";
import {
  IconGauge,
  IconNotes,
  IconCalendarStats,
  IconArtboardFilled,
  IconFileAnalytics,
  IconPresentationAnalytics,
  IconLock,
  IconAdjustments,
  IconGitBranch,
  IconUsers,
  IconSchool,
} from "@tabler/icons-react";

type Props = {};
const sideBarIcons = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Students",
    icon: IconSchool,
    initiallyOpened: true,
    links: [
      { label: "Enroll new", link: "#" },
      { label: "Edit/View Student", link: "#" },
    ],
  },
  {
    label: "Events",
    icon: IconCalendarStats,
    links: [
      { label: "Create Event", link: "#" },
      { label: "Manage Event", link: "#" },
    ],
  },
  {
    label: "Batch",
    icon: IconArtboardFilled,
    links: [
      { label: "Create Batch", link: "#" },
      { label: "Manage Batch", link: "#" },
    ],
  },
  {
    label: "Branch",
    icon: IconGitBranch,
    links: [
      { label: "Create Branch", link: "/dashboard/branch/create" },
      { label: "Manage Branch", link: "/dashboard/branch/manage" },
    ],
  },
  {
    label: "Staff",
    icon: IconUsers,
    links: [
      { label: "Recruit new", link: "#" },
      { label: "Edit/View Staff", link: "#" },
    ],
  },

  {
    label: "Analytics",
    icon: IconPresentationAnalytics,
    links: [
      { label: "Progress Report", link: "#" },
      { label: "Attendence Report", link: "#" },
      { label: "Payment Report", link: "#" },
    ],
  },
  {
    label: "Security",
    icon: IconLock,
    links: [
      { label: "Access Mangement", link: "#" },
      { label: "Change password", link: "#" },
      { label: "Recovery codes", link: "#" },
    ],
  },
  { label: "Settings", icon: IconAdjustments },
];
const Dashboard = (props: Props) => {
  const { supabase } = useContext(SupaBaseContext);
  const [userInfo, setUserInfo] = useState<any>();
  const location = useLocation();
  const getUserInfo = async () => {
    const {
      data: { user },
    }: any = await supabase.auth.getUser();
    let { data, error }: any = await supabase
      .from("users_info")
      .select("organization_referance");
    console.log(data, error);
    setUserInfo(data[0]);
  };
  useEffect(() => {
    getUserInfo();
  }, []);
  return (
    <Box className="h-full flex ">
      <SidebarNested items={sideBarIcons} activeTab={location.pathname} />
      <Box className="flex-1 ">
        <Outlet context={{ userInfo }} />
      </Box>
    </Box>
  );
};

export default Dashboard;
