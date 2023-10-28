import { yupResolver } from "@hookform/resolvers/yup";
import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  Stack,
  TextInput,
} from "@mantine/core";
import { Controller, useForm } from "react-hook-form";
import { signUpSchema } from "../../utils/validation/auth.validation";
import { GoogleButton } from "../google-btn/google-btn";
import { PasswordStrength } from "../password-requirment-btn/password-requirement-btn";
import useSupabase from "../../hooks/use-supabase";

type Props = {
  toggle: () => void;
};
const defaultValues = {
  acceptTNC: false,
  email: "",
  password: "",
  username: "",
};
export default function SignupComponent({ toggle }: Props) {
  const { supabase } = useSupabase();

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues,
  });

  const onSubmitHandeler = async (formData: any) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      console.log(data);
      console.log(error);
    } catch (error) {
      throw error;
    }
  };
  return (
    <>
      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <form
        onSubmit={handleSubmit(
          (data) => onSubmitHandeler(data),
          (data: any) => {
            // this is error handler
            console.log(data);
          }
        )}
      >
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            radius="md"
            {...register("username")}
          />

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

          <Box>
            <PasswordStrength value={watch("password")} />
          </Box>

          <Controller
            name="acceptTNC"
            control={control}
            defaultValue={false}
            render={(field) => (
              <Checkbox {...field} label="I accept terms and conditions" />
            )}
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
            Already have an account? Login
          </Anchor>
          <Button type="submit" radius="xl">
            Sign Up
          </Button>
        </Group>
      </form>
    </>
  );
}
