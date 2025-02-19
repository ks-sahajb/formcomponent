import { Checkbox, CheckboxProps, CheckboxStylesNames } from "@mantine/core";
import clsx from "clsx";
import React, { FC } from "react";

export type IBaseCheckBoxProps = CheckboxProps & {
  classNames?: Partial<Record<CheckboxStylesNames, string>>;
};

const BaseCheckbox: FC<IBaseCheckBoxProps> = (props) => {
  const { classNames, ...other } = props;

  return (
    <Checkbox
      classNames={{
        ...classNames,
        label: clsx("!text-black !text-base", classNames?.label),
        input: clsx("focus:!ring-2 focus:!ring-primary", classNames?.input),
      }}
      {...other}
    ></Checkbox>
  );
};

export default BaseCheckbox;
