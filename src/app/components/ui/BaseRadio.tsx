import { Radio, RadioProps } from "@mantine/core";
import React from "react";

export type IBaseRadioProps = RadioProps;

export default function BaseRadio(props: IBaseRadioProps) {
  const { ...other } = props;
  return <Radio {...other} />;
}
