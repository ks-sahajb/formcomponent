import { Select, SelectProps, SelectStylesNames } from "@mantine/core";
import clsx from "clsx";
import React, { FC } from "react";

export type IBaseSelectProps = SelectProps & {
  classNames?: Partial<Record<SelectStylesNames, string>>;
};

const BaseSelect: FC<IBaseSelectProps> = (props) => {
  const { classNames, ...other } = props;

  return (
    <Select
      classNames={{
        ...classNames,
        input: clsx(
          "!border-none !bg-gray-100 ring-1 ring-gray-200 focus:ring-2 focus:ring-primary focus:!bg-white",
          classNames?.input
        ),
        dropdown: clsx("text-black", classNames?.dropdown),
        option: clsx("hover:!bg-primary-light", classNames?.option),
        section: clsx("bg-primary-light", classNames?.section),
      }}
      {...other}
    />
  );
};

export default BaseSelect;
