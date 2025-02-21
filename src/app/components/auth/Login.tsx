import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Text } from "@mantine/core";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { z } from "zod";
import FormField from "../forms/formfields/FormField";
import FormGroup from "../forms/formgroup/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";

const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Enter valid email" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export type ILoginForm = z.infer<typeof loginFormSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleFormSubmit = (data: ILoginForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormGroup className="">
        <Text className="!font-bold !text-3xl text-center">Login</Text>

        <FormField
          label={{ labelTitle: "Your Email", required: true, htmlFor: "email" }}
          errors={errors.email?.message}
        >
          <BaseInput
            {...register("email")}
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
          />
        </FormField>

        <FormField
          label={{
            labelTitle: "Your Password",
            required: true,
            htmlFor: "password",
          }}
          errors={errors.password?.message}
        >
          <BaseInput
            {...register("password")}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </FormField>
        <Link href="#" className="flex self-end text-primary">
          Forgot Password ?
        </Link>

        <BaseButton type="submit" className="flex self-center">
          Sign Up
        </BaseButton>

        <Divider label="OR" />

        <div className="flex self-center gap-20">
          <BaseButton leftSection={<FaGoogle />}>Google</BaseButton>
          <BaseButton leftSection={<FaGithub />}>GitHub</BaseButton>
        </div>

        <Text className="flex justify-center gap-2">
          Don't Have An Account?
          <Link href="#" className="text-primary">
            Register
          </Link>
        </Text>
      </FormGroup>
    </form>
  );
};

export default Login;
