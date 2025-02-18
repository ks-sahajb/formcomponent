import { Select, SelectProps } from "@mantine/core";
import React from "react";

export type IBaseSelectProps = SelectProps;

export default function BaseSelect(props: IBaseSelectProps) {
  const { className, ...other } = props;
  return <Select className={`${className}`} {...other} />;
}
