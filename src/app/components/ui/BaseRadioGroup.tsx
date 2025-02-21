import { Group, RadioGroup, RadioGroupProps } from "@mantine/core";
import React, { FC, ReactNode } from "react";
import BaseRadio from "./BaseRadio";

export type IBaseRadioGroupProps = RadioGroupProps & {
  radioData: {
    label: string;
    labelClasses?: string;
  }[];
};

const BaseRadioGroup: FC<IBaseRadioGroupProps> = (props) => {
  const { radioData, ...other } = props;
  return (
    <>
      <RadioGroup {...other}>
        <Group>
          {radioData?.map((radio, index) => (
            <BaseRadio
              label={radio.label}
              value={radio.label}
              classNames={{ label: radio.labelClasses }}
              key={index}
            />
          ))}
        </Group>
      </RadioGroup>
    </>
  );
};

export default BaseRadioGroup;
