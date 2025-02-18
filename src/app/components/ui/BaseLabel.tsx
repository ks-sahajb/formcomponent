import { InputDescription, InputLabel, InputLabelProps } from "@mantine/core";
import React from "react";

export type IBaseLabelProps = InputLabelProps & {
  labelTitle: string;
  labelDesc?: string;
};

export default function BaseLabel(props: IBaseLabelProps) {
  const { className, labelTitle, labelDesc, ...other } = props;
  return (
    <>
      <InputLabel className={`text-blue-600 ${className}`} {...other}>
        {labelTitle}
      </InputLabel>
      <InputDescription>{labelDesc}</InputDescription>
    </>
  );
}
