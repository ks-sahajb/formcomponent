"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FileButton, Text } from "@mantine/core";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormField from "../forms/formfields/FormField";
import FormGroup from "../forms/formgroup/FormGroup";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";
import { CiUser } from "react-icons/ci";

const userFormSchema = z.object({
  name: z.string().min(1, { message: "Name required" }),
  mobile: z
    .string()
    .length(13, "Enter Exactly 13 Character(s)")
    .startsWith("+91", "Enter Indian Number")
    .optional(),
  dob: z.date().optional(),
});

export type IUserForm = z.infer<typeof userFormSchema>;

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserForm>({
    resolver: zodResolver(userFormSchema),
  });

  const handleFormSubmit = (data: IUserForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <FormGroup>
        <Text className="!font-bold !text-3xl text-center">Update Profile</Text>

        <div className="flex self-center border-1 p-2 rounded-full">
          <CiUser size={90} />
        </div>

        <div className="flex self-center">
          <FileButton
            onChange={(e) => console.log(e?.type)}
            accept="image/png,image/jpeg"
          >
            {(props) => <BaseButton {...props}>Upload Image</BaseButton>}
          </FileButton>
        </div>

        <FormField
          label={{
            labelTitle: "Your Name",
            required: true,
            htmlFor: "name",
          }}
          errors={errors.name?.message}
        >
          <BaseInput {...register("name")} type="text" name="name" id="name" />
        </FormField>

        <FormField
          label={{
            labelTitle: "Your Mobile",
            required: true,
            htmlFor: "mobile",
          }}
          errors={errors.mobile?.message}
        >
          <BaseInput
            {...register("mobile")}
            type="text"
            name="mobile"
            id="mobile"
            classNames={{ visibilityToggle: "!invisible" }}
            placeholder="Enter Mobile"
          />
        </FormField>

        <FormField
          label={{
            labelTitle: "Date Of Birth",
            required: true,
            htmlFor: "dob",
          }}
          errors={errors.dob?.message}
        >
          <BaseInput
            {...register("dob", { valueAsDate: true })}
            type="date"
            name="dob"
            id="dob"
            classNames={{ visibilityToggle: "!invisible" }}
          />
        </FormField>

        <Link href="#" className="flex self-end text-primary">
          Update Password
        </Link>

        <BaseButton type="submit" className="flex self-center">
          Update Profile
        </BaseButton>
      </FormGroup>
    </form>
  );
};

export default UserForm;
