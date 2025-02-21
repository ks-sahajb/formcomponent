"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Divider, Text } from "@mantine/core";
import Link from "next/link";
import { useForm } from "react-hook-form";
import z from "zod";
import FormField from "../forms/formfields/FormField";
import FormGroup from "../forms/formgroup/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseCheckbox from "../ui/BaseCheckbox";
import BaseInput from "../ui/BaseInput";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FC } from "react";

const signupFormSchema = z
  .object({
    name: z.string().min(1, { message: "Name is necessary" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Enter valid email" }),
    password: z
      .string()
      .min(8, { message: "Atleast 8 characters" })
      .max(20, { message: "Max 20 characters" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Must include uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Must include lowercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Must include number",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Must include special symbol",
      }),
    confirmpassword: z
      .string()
      .min(1, { message: "Confirm password required" }),
    checkbox: z.boolean().refine((check) => check === true, {
      message: "Checkbox Must Be Checked",
    }),
  })
  .refine((data) => data.password === data.confirmpassword, {
    message: "Password miss matched",
    path: ["confirmpassword"],
  });

export type ISignUpForm = z.infer<typeof signupFormSchema>;

const SignupForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<ISignUpForm>({
    resolver: zodResolver(signupFormSchema),
  });

  const handleFormSubmit = (data: ISignUpForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormGroup className="">
        <Text className="!font-bold !text-3xl text-center">
          Register With Us
        </Text>

        <FormField
          label={{ labelTitle: "Full Name", required: true, htmlFor: "name" }}
          errors={errors.name?.message}
        >
          <BaseInput
            {...register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="ex: John Smith"
          />
        </FormField>

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

        <FormField
          label={{
            labelTitle: "Confirm Password",
            required: true,
            htmlFor: "confirmpassword",
          }}
          errors={errors.confirmpassword?.message}
        >
          <BaseInput
            {...register("confirmpassword")}
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            placeholder="Confirm Password"
          />
        </FormField>

        <BaseCheckbox
          {...register("checkbox")}
          name="checkbox"
          classNames={{
            input: `${errors.checkbox ? "!ring-2 !ring-danger" : ""}`,
          }}
          label={
            <>
              I agree with{" "}
              <Link href="#" className="text-primary">
                term and conditions
              </Link>
            </>
          }
        />

        <BaseButton
          type="submit"
          className="flex self-center"
          loading={isLoading}
        >
          Sign Up
        </BaseButton>

        <Divider label="Or continue with" />

        <div className="flex self-center gap-20">
          <BaseButton leftSection={<FaGoogle />}>Google</BaseButton>
          <BaseButton leftSection={<FaGithub />}>GitHub</BaseButton>
        </div>

        <Text className="flex justify-center gap-2">
          Already Have An Account?
          <Link href="#" className="text-primary">
            Login
          </Link>
        </Text>
      </FormGroup>
    </form>
  );
};

export default SignupForm;
