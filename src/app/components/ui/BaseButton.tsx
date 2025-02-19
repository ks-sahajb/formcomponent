import { Button, ButtonProps, ButtonStylesNames } from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { FC } from "react";

const buttoncva = cva("!cursor-pointer !text-white", {
  variants: {
    intent: {
      primary: "!bg-primary hover:!bg-primary-hover",
      secondary: "!bg-gray-600 hover:!bg-gray-700 !text-blue-100 ",
      warning: "!bg-yellow-500 hover:!bg-yellow-600 !text-orange-100 ",
      danger: "!bg-red-500 hover:!bg-red-600 !text-orange-100 ",
      success: "!bg-green-600 hover:!bg-green-700 !text-teal-100 ",
    },
    size: {
      small: "!text-sm !py-1 !px-2",
      medium: "!text-base !py-2 !px-4",
    },
    disabled: {
      false: null,
      true: "!opacity-50 !cursor-not-allowed",
    },
  },

  defaultVariants: {
    intent: "primary",
    size: "medium",
    disabled: false,
  },
});

export type IButtonPropsExtent = ButtonProps & {
  classNames?: Partial<Record<ButtonStylesNames, string>> | undefined;
};

export type IBaseButtonCVA = VariantProps<typeof buttoncva>;

export type IBaseButtonProps = IButtonPropsExtent & IBaseButtonCVA;

const BaseButton: FC<IBaseButtonProps> = (props) => {
  const { children, classNames, intent, disabled, ...other } = props;
  return (
    <Button
      classNames={{
        ...classNames,
        root: clsx(buttoncva({ intent, disabled }), classNames?.root),
      }}
      disabled={disabled}
      {...other}
    >
      {children}
    </Button>
  );
};

export default BaseButton;
