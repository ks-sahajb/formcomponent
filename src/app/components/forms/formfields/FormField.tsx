import { ReactNode } from "react";
import BaseErrorMessage from "../../ui/BaseErrorMessage";
import BaseLabel from "../../ui/BaseLabel";

export type IFormFieldProps = {
  label: { title: string; description?: string };
  children: ReactNode;
  error?: Error;
};

export default function FormField(props: IFormFieldProps) {
  const {
    label: { title, description },
    error,
    children,
  } = props;

  return (
    <>
      <BaseLabel
        labelTitle={title}
        labelDesc={description}
        classNames={{ label: "text-primary", required: "!text-danger" }}
        required
      />

      {children}

      <BaseErrorMessage error={error} className="!px-1" />
    </>
  );
}
