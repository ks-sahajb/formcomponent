import { Input, InputProps } from "@mantine/core";
import React, { InputHTMLAttributes } from "react";

export type IBaseInputProps = InputProps &
  InputHTMLAttributes<HTMLInputElement>;

export default function BaseInput(props: IBaseInputProps) {
  const { className, radius="sm", ...other } = props;

  return (
    <Input
      radius={radius}
      {...other}
    />
  );
}
