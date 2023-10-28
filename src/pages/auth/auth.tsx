import { useToggle } from "@mantine/hooks";

import { Paper, PaperProps, Text } from "@mantine/core";

import LoginComponent from "../../components/login-component/login-component";
import SignupComponent from "../../components/signup-component/signup-component";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Portal, {type} with
      </Text>
      {type == "login" ? (
        <LoginComponent toggle={toggle} />
      ) : (
        <SignupComponent toggle={toggle} />
      )}
    </Paper>
  );
}
