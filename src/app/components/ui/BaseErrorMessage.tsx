import { Text, TextProps } from "@mantine/core";
import React from "react";

export type IBaseErrorMessageProps = TextProps & {
  error?: Error;
};

export default function BaseErrorMessage(props: IBaseErrorMessageProps) {
  const { error, className, size = "xs", ...other } = props;

  return (
    <Text className={`!text-danger ${className}`} size={size} {...other}>
      {error?.message}
    </Text>
  );
}
