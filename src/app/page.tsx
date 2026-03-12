import {
  Button,
  Container,
  Group,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { Database, Shield, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: rem(24),
      }}
    >
      <Container size="md">
        <Stack align="center" gap={rem(48)}>
          <Stack align="center" gap={rem(16)}>
            <Title
              order={1}
              style={{
                fontSize: rem(72),
                fontWeight: 900,
                letterSpacing: rem(-2),
                textAlign: "center",
                background:
                  "linear-gradient(180deg, var(--mantine-color-white) 0%, var(--mantine-color-black-2) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Jata Elysia
            </Title>
            <Text
              size="xl"
              c="dimmed"
              fs="italic"
              ta="center"
              style={{ maxWidth: rem(600), lineHeight: 1.6 }}
            >
              Speed meets Simplicity. Experience the future of task management
              with Next.js, Elysia, and Better Auth. Just Another Todo App
              (Jata).
            </Text>
          </Stack>

          <Group gap="md" justify="center">
            <Link href="/sign-in" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                color="black.4"
                size="lg"
                radius="xl"
                style={{
                  paddingLeft: rem(40),
                  paddingRight: rem(40),
                  borderWidth: rem(2),
                }}
              >
                Sign In
              </Button>
            </Link>
            <Link href="/sign-up" style={{ textDecoration: "none" }}>
              <Button
                color="black.0"
                variant="filled"
                c="black.9"
                size="lg"
                radius="xl"
                style={{ paddingLeft: rem(40), paddingRight: rem(40) }}
              >
                Get Started
              </Button>
            </Link>
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl" mt={rem(48)}>
            {[
              {
                title: "Ultra Fast",
                desc: "Powered by Elysia and Bun.",
                icon: <Zap size={20} />,
              },
              {
                title: "Secure",
                desc: "Better Auth for modern protection.",
                icon: <Shield size={20} />,
              },
              {
                title: "Drizzle",
                desc: "Type-safe database operations.",
                icon: <Database size={20} />,
              },
            ].map((feat) => (
              <Paper
                key={feat.title}
                p="xl"
                radius="md"
                withBorder
                style={{
                  backgroundColor: "rgba(var(--mantine-color-black-rgb), 0.03)",
                  borderColor: "rgba(var(--mantine-color-black-rgb), 0.1)",
                  transition: "transform 0.2s ease",
                }}
              >
                <ThemeIcon
                  variant="light"
                  color="white"
                  size="lg"
                  radius="md"
                  mb="md"
                >
                  {feat.icon}
                </ThemeIcon>
                <Text fw={700} size="lg" mb="sm">
                  {feat.title}
                </Text>
                <Text size="sm" c="dimmed">
                  {feat.desc}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </main>
  );
}
