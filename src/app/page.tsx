import BaseButton from "./components/ui/BaseButton";
import BaseCheckbox from "./components/ui/BaseCheckbox";
import BaseErrorMessage from "./components/ui/BaseErrorMessage";
import BaseInput from "./components/ui/BaseInput";
import BaseLabel from "./components/ui/BaseLabel";
import BaseRadio from "./components/ui/BaseRadio";
import BaseSelect from "./components/ui/BaseSelect";
import BaseTextarea from "./components/ui/BaseTextarea";

export default function Home() {
  return (
    <>
      <BaseLabel labelTitle="Full Name Required" labelDesc="It is worked" />
      <BaseInput placeholder="hello" />
      <BaseTextarea placeholder="hello"></BaseTextarea>
      <BaseSelect data={["hello"]} placeholder="placeholder" searchable />
      <BaseCheckbox label="Hello Everyone" />
      <BaseRadio label="It is working" />
      <BaseButton className="!bg-red-500">Click Me</BaseButton>
      <BaseErrorMessage error={new Error("Hello")} />
    </>
  );
}
