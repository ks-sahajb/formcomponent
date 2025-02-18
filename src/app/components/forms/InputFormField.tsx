import React from "react";
import BaseLabel from "../ui/BaseLabel";
import BaseInput from "../ui/BaseInput";
import BaseErrorMessage from "../ui/BaseErrorMessage";

export type IInputFormFieldProps = {
  label: { title: string; description?: string };
  input: { placeholder: string; onChange: () => void };
  error?: Error;
};

export default function InputFormField(props: IInputFormFieldProps) {
  const {
    label: { title, description },
    input: { placeholder, onChange },
    error,
  } = props;
  return (
    <>
      <BaseLabel
        labelTitle={title}
        labelDesc={description}
        classNames={{ label: "text-primary", required: "!text-danger" }}
        required
      />
      <BaseInput
        placeholder={placeholder}
        onChange={onChange}
      />
      <BaseErrorMessage error={error} className="!px-1" />
    </>
  );
}
