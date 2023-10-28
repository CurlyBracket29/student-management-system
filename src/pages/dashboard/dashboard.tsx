import { Box } from "@mantine/core";
import { SideBar } from "../../components/side-bar/side-bar";
import { Outlet } from "react-router-dom";
import { SidebarNested } from "../../components/side-bar-nested/side-bar-nested";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <Box className="h-full flex ">
      <SidebarNested />
      <Box className="flex-1 bg-rose-200">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Dashboard;
