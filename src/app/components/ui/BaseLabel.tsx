import { InputDescription, InputLabel, InputLabelProps } from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const labelcva = cva("border", {
  variants: {
    intent: {
      primary: ["!font-medium", "!text-gray-900", "!border-primary"],
    },
    labelsize: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
    disabled: {
      false: null,
      true: ["opacity-50", "!border-none"],
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      disabled: false,
      className:
        "!transition delay-150 duration-300 hover:!bg-indigo-100 focus:!border-2 ",
    },
    { intent: "primary", labelsize: "medium", className: "uppercase" },
  ],
});

export type IBaseLabelProps = InputLabelProps &
  VariantProps<typeof labelcva> & {
    labelTitle: string;
    labelDesc?: string;
  };

export default function BaseLabel(props: IBaseLabelProps) {
  const {
    labelTitle,
    intent = "primary",
    disabled,
    labelsize,
    labelDesc,
    ...other
  } = props;
  return (
    <>
      <InputLabel
        classNames={{ label: labelcva({ intent, labelsize, disabled }) }}
        {...other}
      >
        {labelTitle}
      </InputLabel>
      <InputDescription>{labelDesc}</InputDescription>
    </>
  );
}
