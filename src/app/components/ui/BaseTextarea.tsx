import { __InputStylesNames, Textarea, TextareaProps } from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { FC } from "react";

const textareacva = cva(
  "!border-none focus:!bg-white !bg-gray-100 ring-1 ring-gray-200 !rounded-lg",
  {
    variants: {
      intent: {
        primary: "focus:!ring-2 focus:!ring-primary",
      },
      areasize: {
        small: "!text-sm !py-1 !px-2",
        medium: "!text-base !py-2 !px-4",
      },
      disabled: {
        false: null,
        true: "!opacity-50 !border-none",
      },
    },
    defaultVariants: {
      intent: "primary",
      areasize: "medium",
      disabled: false,
    },
  }
);

export type ITextAreaPropsExtend = TextareaProps & {
  classNames?: Partial<Record<__InputStylesNames, string>>;
};

export type IBaseTextAreaCVA = VariantProps<typeof textareacva>;

export type IBaseTextAreaProps = ITextAreaPropsExtend & IBaseTextAreaCVA;

const BaseTextarea: FC<IBaseTextAreaProps> = (props) => {
  const { classNames, intent, areasize, disabled, ...other } = props;
  return (
    <Textarea
      classNames={{
        ...classNames,
        input: clsx(textareacva({ intent, areasize, disabled })),
      }}
      disabled={disabled}
      {...other}
    ></Textarea>
  );
};

export default BaseTextarea;
