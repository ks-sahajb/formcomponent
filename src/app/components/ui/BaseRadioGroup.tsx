import { Group, RadioGroup, RadioGroupProps } from "@mantine/core";
import React, { ReactNode } from "react";
import BaseRadio from "./BaseRadio";

export type IBaseRadioGroupProps = RadioGroupProps & {
  radioData: {
    label: string;
    className?: string;
  }[];
};

export default function BaseRadioGroup(props: IBaseRadioGroupProps) {
  const { radioData, ...other } = props;
  return (
    <>
      <RadioGroup {...other}>
        <Group>
          {radioData?.map((radio, index) => (
            <BaseRadio
              label={radio.label}
              value={radio.label}
              className={radio.className}
              key={index}
            />
          ))}
        </Group>
      </RadioGroup>
    </>
  );
}
