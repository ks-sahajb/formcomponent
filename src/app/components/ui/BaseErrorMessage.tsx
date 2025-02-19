import { Text, TextProps } from "@mantine/core";
import React, { FC } from "react";

export type IBaseErrorMessageProps = TextProps & {
  error?: Error;
};

const BaseErrorMessage: FC<IBaseErrorMessageProps> = (props) => {
  const { error, className, ...other } = props;

  return (
    <Text className={`!text-danger ${className}`} {...other}>
      {error?.message}
    </Text>
  );
};

export default BaseErrorMessage;
