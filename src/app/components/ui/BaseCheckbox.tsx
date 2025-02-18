import { Checkbox, CheckboxProps } from "@mantine/core";
import React from "react";

export type IBaseCheckBoxProps = CheckboxProps;

export default function BaseCheckbox(props: IBaseCheckBoxProps) {
  const { ...other } = props;
  return <Checkbox {...other}></Checkbox>;
}
