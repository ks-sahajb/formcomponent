import React from "react";
import BaseLabel from "../ui/BaseLabel";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseSelect from "../ui/BaseSelect";

export type ISelectFormFieldProps = {
  label: { title: string; description?: string };
  select: { placeholder: string; onChange: () => void; data: string[] };
  error?: Error;
};

export default function SelectFormField(props: ISelectFormFieldProps) {
  const {
    label: { title, description },
    select: { placeholder, onChange, data },
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
      <BaseSelect
        data={data}
        placeholder={placeholder}
        onChange={onChange}
        searchable
      />
      <BaseErrorMessage error={error} className="!px-1" />
    </>
  );
}
