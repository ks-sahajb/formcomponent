"use client";

import BaseButton from "../components/ui/BaseButton";
import BaseCheckbox from "../components/ui/BaseCheckbox";
import BaseErrorMessage from "../components/ui/BaseErrorMessage";
import BaseInput from "../components/ui/BaseInput";
import BaseLabel from "../components/ui/BaseLabel";
import BaseRadio from "../components/ui/BaseRadio";
import BaseSelect from "../components/ui/BaseSelect";
import BaseTextarea from "../components/ui/BaseTextarea";

export default function page() {
  return (
    <div>
      <BaseLabel labelTitle="Hello Everyone" required />
      <BaseInput
        placeholder="It is working"
        classNames={{ input: "rounded-xl bg-red-500" }}
      />
      <BaseRadio label="Hello Everyone" />
      <BaseErrorMessage error={new Error("hello")} className="!text-sm" />
      <BaseCheckbox label="Hello Everyone" />
      <BaseSelect data={["hello", "new"]} placeholder="hello" searchable />
      <BaseButton>Hello</BaseButton>
      <BaseTextarea/>
    </div>
  );
}
