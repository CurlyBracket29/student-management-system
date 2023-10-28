import { MantineProvider } from "@mantine/core";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { AuthenticationForm } from "./pages/auth/auth";
import "@mantine/core/styles.css";
import SupaBaseProvider from "./providers/supabase/supabase.provider";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        { path: "/auth", element: <AuthenticationForm />, children: [] },
        { path: "/dashboard", element: <Dashboard /> },
      ]),
    []
  );
  return (
    <MantineProvider defaultColorScheme="dark">
      <SupaBaseProvider>
        <RouterProvider router={router} />
      </SupaBaseProvider>
    </MantineProvider>
  );
}

export default App;
