import { Textarea, TextareaProps } from "@mantine/core";
import React from "react";

export type IBaseTextAreaProps = TextareaProps;

export default function BaseTextarea(props: IBaseTextAreaProps) {
  const { className, ...other } = props;
  return <Textarea className={`${className}`} {...other}></Textarea>;
}
