import React from "react";
import BaseLabel from "../ui/BaseLabel";
import BaseTextarea from "../ui/BaseTextarea";
import BaseErrorMessage from "../ui/BaseErrorMessage";

export type ITextAreaFormFieldProps = {
  label: { title: string; description?: string };
  textarea: { placeholder: string; onChange: () => void };
  error?: Error;
};

export default function TextAreaFormField(props: ITextAreaFormFieldProps) {
  const {
    label: { title, description },
    textarea: { placeholder, onChange },
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
      <BaseTextarea placeholder={placeholder} onChange={onChange} />
      <BaseErrorMessage error={error} className="!px-1" />
    </>
  );
}
