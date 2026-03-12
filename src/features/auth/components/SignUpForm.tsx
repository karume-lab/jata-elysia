"use client";

import {
  Alert,
  Button,
  Paper,
  PasswordInput,
  rem,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      callbackURL: "/todos",
    });

    if (error) {
      setError(error.message || "Something went wrong");
    } else {
      router.push("/todos");
    }
    setLoading(false);
  };

  return (
    <Paper
      className="glass"
      p={rem(40)}
      style={{ width: "100%", maxWidth: rem(420) }}
    >
      <form onSubmit={handleSignUp}>
        <Stack gap="xl">
          <Stack gap={rem(8)} align="center">
            <Title
              order={2}
              style={{ fontSize: rem(32), fontWeight: 900, tracking: -1 }}
            >
              Join Jata
            </Title>
            <Text size="sm" c="dimmed">
              Create your account to get started
            </Text>
          </Stack>

          {error && (
            <Alert
              icon={<AlertCircle size={16} />}
              color="red"
              variant="light"
              radius="md"
            >
              {error}
            </Alert>
          )}

          <Stack gap="md">
            <TextInput
              label="Full Name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              size="md"
              radius="md"
              styles={{
                input: {
                  backgroundColor: "rgba(var(--mantine-color-black-rgb), 0.05)",
                  borderColor: "rgba(var(--mantine-color-black-rgb), 0.1)",
                },
              }}
            />
            <TextInput
              label="Email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              size="md"
              radius="md"
              styles={{
                input: {
                  backgroundColor: "rgba(var(--mantine-color-black-rgb), 0.05)",
                  borderColor: "rgba(var(--mantine-color-black-rgb), 0.1)",
                },
              }}
            />
            <PasswordInput
              label="Password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              size="md"
              radius="md"
              styles={{
                input: {
                  backgroundColor: "rgba(var(--mantine-color-black-rgb), 0.05)",
                  borderColor: "rgba(var(--mantine-color-black-rgb), 0.1)",
                },
              }}
            />
          </Stack>

          <Button
            type="submit"
            loading={loading}
            fullWidth
            size="lg"
            radius="xl"
            color="black.0"
            variant="filled"
            c="black.9"
            style={{ fontWeight: 800 }}
            className="premium-gradient"
          >
            Create Account
          </Button>
        </Stack>
      </form>
    </Paper>
  );
}
