"use client";

import FormField from "../components/forms/formfields/FormField";
import BaseInput from "../components/ui/BaseInput";

export default function page() {
  return (
    <div>
      <FormField label={{ title: "Hello Everyone", description: "Hello Guys" }}>
        <BaseInput
          placeholder="It is working"
          classNames={{ input: "rounded-xl" }}
        />
      </FormField>
    </div>
  );
}
