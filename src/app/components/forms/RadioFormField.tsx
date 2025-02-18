import React from "react";
import BaseLabel from "../ui/BaseLabel";
import BaseErrorMessage from "../ui/BaseErrorMessage";
import BaseSelect from "../ui/BaseSelect";
import BaseRadioGroup from "../ui/BaseRadioGroup";

export type IRadioFormFieldProps = {
  label: { title: string; description?: string };
  radio: {
    radioData: {
      label: string;
      className?: string;
    }[];
    onChange: (value: string) => void;
  };
  error?: Error;
};

export default function RadioFormField(props: IRadioFormFieldProps) {
  const {
    label: { title, description },
    radio: { radioData, onChange },
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
      <BaseRadioGroup children="" radioData={radioData} onChange={onChange} />
      <BaseErrorMessage error={error} className="!px-1" />
    </>
  );
}
