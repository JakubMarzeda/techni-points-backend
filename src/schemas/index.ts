import * as z from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "This isn't a very good password, is it?" }),
  passwordConfirm: z.string().min(6, { message: "This isn't a very good password, is it?" }),
  name: z.string()
  .min(2, { message: "Input your real name" })
  .regex(/^([a-zA-Z]{3,16})(?: [a-zA-Z]{3,16}){1,2}$/, { message: "Input your full name" }),
});