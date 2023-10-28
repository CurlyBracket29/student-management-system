import { MantineProvider } from "@mantine/core";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useMemo } from "react";
import { AuthenticationForm } from "./pages/login/login";
import "@mantine/core/styles.css";

function App() {
  const router = useMemo(
    () =>
      createBrowserRouter([
        { path: "/auth", element: <AuthenticationForm />, children: [] },
      ]),
    []
  );
  return (
    <MantineProvider defaultColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
