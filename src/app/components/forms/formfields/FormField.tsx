import { ReactNode } from "react";
import BaseErrorMessage from "../../ui/BaseErrorMessage";
import BaseLabel, { IBaseLabelProps } from "../../ui/BaseLabel";

export type IFormFieldProps = {
  label: IBaseLabelProps;
  children: ReactNode;
  errors?: string;
};

export default function FormField(props: IFormFieldProps) {
  const { label, errors, children } = props;

  return (
    <div>
      <BaseLabel
        classNames={{ label: "text-primary", required: "!text-danger" }}
        {...label}
      />

      {children}

      <BaseErrorMessage errors={errors} className="!px-1" />
    </div>
  );
}
