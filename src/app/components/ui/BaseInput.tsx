import {
  ElementProps,
  Input,
  InputProps,
  InputStylesNames,
} from "@mantine/core";
import { cva, VariantProps } from "class-variance-authority";

const inputcva = cva("border", {
  variants: {
    intent: {
      primary: ["!font-medium", "!text-gray-900", "!border-primary"],
    },
    inputsize: {
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
    { intent: "primary", inputsize: "medium", className: "uppercase" },
  ],
});

export type IBaseInputProps = InputProps &
  ElementProps<"input", keyof InputProps> &
  VariantProps<typeof inputcva> & {
    classNames?: Partial<Record<InputStylesNames, string>>;
  };

const BaseInput = (props: IBaseInputProps) => {
  const {
    intent = "primary",
    inputsize,
    disabled = false,
    classNames,
    ...other
  } = props;

  const { input = "", ...classes } = classNames || {};

  return (
    <Input
      classNames={{
        input: input + " " + inputcva({ intent, inputsize, disabled }),
        ...classes,
      }}
      disabled={disabled ?? false}
      {...other}
    />
  );
};

export default BaseInput;
