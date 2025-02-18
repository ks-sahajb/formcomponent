import { Text, TextProps } from "@mantine/core";
import React from "react";

export type IBaseErrorMessageProps = TextProps & {
  error?: Error;
};

export default function BaseErrorMessage(props: IBaseErrorMessageProps) {
  const { error, size = "xs" } = props;
  return (
    <Text className="!text-red-500" size={size}>
      {error?.message}
    </Text>
  );
}
