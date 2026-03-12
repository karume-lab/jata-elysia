// /sign-in route

import { Center } from "@mantine/core";
import SignInForm from "@/features/auth/components/SignInForm";

export default function SignInPage() {
  return (
    <Center my={"xl"}>
      <SignInForm />
    </Center>
  );
}
