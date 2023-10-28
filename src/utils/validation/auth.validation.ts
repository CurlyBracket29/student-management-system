import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const signUpSchema = loginSchema.shape({
  username: yup.string().optional(),
  acceptTNC: yup.boolean().optional(),
});
