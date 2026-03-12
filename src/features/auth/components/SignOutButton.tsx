"use client";

import { Button } from "@mantine/core";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <Button
      variant="subtle"
      color="red"
      leftSection={<LogOut size={16} />}
      onClick={handleSignOut}
      styles={{
        root: {
          opacity: 0.6,
          backgroundColor: "transparent",
          "&:hover": {
            opacity: 1,
            backgroundColor: "rgba(var(--mantine-color-red-rgb), 0.05)",
          },
        },
      }}
    >
      Sign Out
    </Button>
  );
}
