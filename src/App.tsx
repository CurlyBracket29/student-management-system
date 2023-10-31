import { MantineProvider } from "@mantine/core";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { AuthenticationForm } from "./pages/auth/auth";
import "@mantine/core/styles.css";
import SupaBaseProvider from "./providers/supabase/supabase.provider";
import Dashboard from "./pages/dashboard/dashboard";
import { UserDataProvider } from "./providers/user-data/user-data.provider";
import HomeOutlet from "./outlets/home.outlet";
import CreateBranchOutlet from "./outlets/create-branch.outlet";
import ManageBranchOutlet from "./outlets/manage-branch.outlet";
import ModalProvider from "./providers/modal/modal.provider";

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        { path: "/auth", element: <AuthenticationForm />, children: [] },
        {
          path: "/dashboard",
          element: <Dashboard />,
          children: [
            { path: "", element: <HomeOutlet /> },
            { path: "branch/create", element: <CreateBranchOutlet /> },
            { path: "branch/manage", element: <ManageBranchOutlet /> },
          ],
        },
      ]),
    []
  );
  return (
    <SupaBaseProvider>
      <MantineProvider defaultColorScheme="dark">
        <ModalProvider>
          <UserDataProvider>
            <RouterProvider router={router} />
          </UserDataProvider>
        </ModalProvider>
      </MantineProvider>
    </SupaBaseProvider>
  );
}

export default App;
