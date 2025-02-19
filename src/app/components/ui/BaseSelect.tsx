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
          "!border-none !ring-1 focus:!ring-2 focus:!ring-primary",
          classNames?.input
        ),
        dropdown: clsx("!text-black", classNames?.dropdown),
        option: clsx("hover:!bg-primary-light", classNames?.option),
        section: clsx("!bg-primary-light", classNames?.section),
      }}
      {...other}
    />
  );
};

export default BaseSelect;
