import {
  Group,
  Divider,
  Stack,
  TextInput,
  PasswordInput,
  Box,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { upperFirst } from "@mantine/hooks";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { GoogleButton } from "../google-btn/google-btn";
import { PasswordStrength } from "../password-requirment-btn/password-requirement-btn";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../utils/validation/auth.validation";

type Props = {
  toggle: () => void;
};

function LoginComponent({ toggle }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandeler = (data: any) => {
    console.log(data, "login");
  };
  return (
    <>
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form
        onSubmit={handleSubmit(onSubmitHandeler, (data: any) => {
          // this is error handler
          console.log(data);
        })}
      >
        <Stack>
          <TextInput
            required
            label="Email"
            placeholder="hello@mantine.dev"
            radius="md"
            {...register("email")}
            error={errors.email && errors.email.message}
          />

          <PasswordInput
            required
            label="Password"
            placeholder="Your password"
            radius="md"
            {...register("password")}
            error={errors.password && errors.password.message}
          />
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={toggle}
            size="xs"
          >
            Don't have an account? Register
          </Anchor>
          <Button type="submit" radius="xl">
            Login
          </Button>
        </Group>
      </form>
    </>
  );
}

export default LoginComponent;
