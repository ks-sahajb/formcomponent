import { Radio, RadioProps, RadioStylesNames } from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { FC } from "react";

const radiocva = cva("!border", {
  variants: {
    intent: {
      primary: "focus:!ring-2 focus:!ring-primary",
      secondary: "!border-secondary",
    },
    disabled: {
      false: null,
      true: "!opacity-50",
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export type IBaseRadioPropsExtend = RadioProps & {
  classNames?: Partial<Record<RadioStylesNames, string>>;
};

export type IBaseRadioCVA = VariantProps<typeof radiocva>;

export type IBaseRadioProps = IBaseRadioPropsExtend & IBaseRadioCVA;

const BaseRadio: FC<IBaseRadioProps> = (props) => {
  const { classNames, intent, disabled, ...other } = props;

  return (
    <Radio
      classNames={{
        ...classNames,
        label: clsx("!text-black !text-base", classNames?.label),
        radio: clsx(radiocva({ intent, disabled }), classNames?.radio),
      }}
      disabled={disabled}
      {...other}
    />
  );
};
export default BaseRadio;

// labelintent: {
//   primary: "!text-primary",
//   secondary:""
// },
