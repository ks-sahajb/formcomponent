import { Button, ButtonProps } from "@mantine/core";
import React from "react";

export type IBaseButtonProps = ButtonProps;

export default function BaseButton(props: IBaseButtonProps) {
  const { children, ...other } = props;
  return <Button {...other}>{children}</Button>;
}
