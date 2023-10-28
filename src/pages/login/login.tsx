import { useToggle, upperFirst } from "@mantine/hooks";

import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
} from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";

import { GoogleButton } from "../../components/google-btn/google-btn";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  loginSchema,
  signUpSchema,
} from "../../utils/validation/auth.validation";
import { PasswordStrength } from "../../components/password-requirment-btn/password-requirement-btn";
import LoginComponent from "../../components/login-component/login-component";
import SignupComponent from "../../components/signup-component/signup-component";

export function AuthenticationForm(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);

  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to Mantine, {type} with
      </Text>
      {type == "login" ? (
        <LoginComponent toggle={toggle} />
      ) : (
        <SignupComponent toggle={toggle} />
      )}
    </Paper>
  );
}
