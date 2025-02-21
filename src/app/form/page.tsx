"use client";

import Link from "next/link";
import FormField from "../components/forms/formfields/FormField";
import FormGroup from "../components/forms/formgroup/FormGroup";
import BaseCheckbox from "../components/ui/BaseCheckbox";
import BaseInput from "../components/ui/BaseInput";
import BaseTextarea from "../components/ui/BaseTextarea";
import SignupForm from "../components/auth/SignupForm";
import Login from "../components/auth/Login";
import UserForm from "../components/auth/UserForm";

export default function page() {
  return (
    <>
      <UserForm />
      <SignupForm />
      <Login />
    </>
  );
}
