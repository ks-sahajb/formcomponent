"use client";

import React from "react";
import InputFormField from "../components/forms/InputFormField";
import TextAreaFormField from "../components/forms/TextAreaFormField";
import SelectFormField from "../components/forms/SelectFormField";
import BaseRadioGroup from "../components/ui/BaseRadioGroup";
import BaseRadio from "../components/ui/BaseRadio";
import RadioFormField from "../components/forms/RadioFormField";

export default function page() {
  return (
    <div>
      <InputFormField
        label={{
          title: "Enter Input",
        }}
        input={{
          placeholder: "It Is An Input Field",
          onChange() {},
        }}
        error={new Error("Input")}
      />
      <TextAreaFormField
        label={{
          title: "Enter TextArea",
        }}
        textarea={{
          placeholder: "It Is An Text Area Field",
          onChange() {},
        }}
        error={new Error("TextArea")}
      />
      <SelectFormField
        label={{
          title: "Enter Your Name",
        }}
        select={{
          placeholder: "It Is An Select Field",
          onChange() {},
          data: ["hello", "new", "select"],
        }}
        error={new Error("Select")}
      />
      <RadioFormField
        label={{
          title: "Enter Your Name",
        }}
        radio={{
          radioData: [
            { label: "Male" },
            { label: "Female" },
            { label: "Other" },
          ],
          onChange(value) {
            console.log(value);
          },
        }}
        error={new Error("Radio")}
      />
    </div>
  );
}
