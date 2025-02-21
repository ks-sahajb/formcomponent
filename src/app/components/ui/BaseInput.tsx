import {
  Input,
  InputProps,
  InputStylesNames,
  PasswordInput,
  PasswordInputProps,
  PasswordInputStylesNames,
} from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

const inputcva = cva(
  "!border-none focus:!bg-white !bg-gray-100 !ring-1 !ring-gray-200 !rounded-lg",
  {
    variants: {
      intent: {
        primary: "focus:!ring-2 focus:!ring-primary",
      },
      inputsize: {
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
      inputsize: "medium",
      disabled: false,
    },
  }
);

export type IInputPropsExtend = InputHTMLAttributes<HTMLInputElement> &
  InputProps &
  PasswordInputProps & {
    classNames?:
      | Partial<Record<InputStylesNames, string>>
      | Partial<Record<PasswordInputStylesNames, string>>;
  };

export type IBaseInputCVA = VariantProps<typeof inputcva>;

export type IBaseInputProps = IInputPropsExtend & IBaseInputCVA;

const BaseInput: FC<IBaseInputProps> = (props) => {
  const { intent, inputsize, disabled, classNames, type, ...other } = props;

  if (type === "password")
    return (
      <PasswordInput
        type={type}
        classNames={{
          visibilityToggle: clsx("hover:!bg-primary-light"),
          ...classNames,
          input: clsx(
            "focus-within:!ring-2 focus-within:!bg-white focus-within:!ring-primary",
            inputcva({ intent, inputsize, disabled }),
            classNames?.input
          ),
        }}
        disabled={disabled}
        {...other}
      />
    );

  return (
    <Input
      type={type}
      classNames={{
        ...classNames,
        input: clsx(
          inputcva({ intent, inputsize, disabled }),
          classNames?.input
        ),
      }}
      disabled={disabled}
      {...other}
    />
  );
};

export default BaseInput;
