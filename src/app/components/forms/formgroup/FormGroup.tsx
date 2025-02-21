import { FC, FormHTMLAttributes, HTMLAttributes } from "react";

export type IFormGroupProps = HTMLAttributes<HTMLDivElement>;

const FormGroup: FC<IFormGroupProps> = (props) => {
  const { children, className, ...other } = props;
  return (
    <div
      className={`${className} w-[95vw] rounded-2xl bg-gray-50 border-1 border-gray-300 flex flex-col gap-5 justify-self-center p-10 sm:w-[56vw] lg:w-[40vw]`}
      {...other}
    >
      {children}
    </div>
  );
};

export default FormGroup;
