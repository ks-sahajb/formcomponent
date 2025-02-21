import { Text, TextProps } from "@mantine/core";
import React, { FC } from "react";

export type IBaseErrorMessageProps = TextProps & {
  errors?: string;
};

const BaseErrorMessage: FC<IBaseErrorMessageProps> = (props) => {
  const { errors, className, ...other } = props;

  return (
    <Text className={`!text-danger !text-sm ${className}`} {...other}>
      {errors}
    </Text>
  );
};

export default BaseErrorMessage;
