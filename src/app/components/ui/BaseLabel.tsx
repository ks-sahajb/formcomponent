import {
  InputDescription,
  InputLabel,
  InputLabelProps,
  InputLabelStylesNames,
} from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { FC } from "react";

const labelcva = cva("!font-semibold", {
  variants: {
    intent: {
      primary: "!text-black",
      secondary: "!text-secondary",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    intent: "primary",
  },
});

export type ILabelPropsExtend = InputLabelProps & {
  classNames?: Partial<Record<InputLabelStylesNames, string>>;
  labelTitle: string;
  labelDesc?: string;
};

export type IBaseLabelCVA = VariantProps<typeof labelcva>;

export type IBaseLabelProps = ILabelPropsExtend & IBaseLabelCVA;

const BaseLabel: FC<IBaseLabelProps> = (props) => {
  const { labelTitle, intent, classNames, labelDesc, ...other } = props;

  return (
    <>
      <InputLabel
        classNames={{
          ...classNames,
          label: clsx(labelcva({ intent }), classNames?.label),
          required: clsx(labelcva({ intent }), classNames?.required),
        }}
        {...other}
      >
        {labelTitle}
      </InputLabel>
      <InputDescription>{labelDesc}</InputDescription>
    </>
  );
};

export default BaseLabel;
