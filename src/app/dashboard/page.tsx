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
import { LayoutDashboard, ListTodo, Mail, User } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import SignOutButton from "@/features/auth/components/SignOutButton";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: rem(80),
        paddingBottom: rem(80),
      }}
    >
      <Container size="md">
        <Stack gap={rem(64)}>
          <header>
            <Group justify="space-between" align="flex-end">
              <Stack gap={rem(8)}>
                <Group gap="sm">
                  <ThemeIcon
                    variant="light"
                    color="black"
                    size="xl"
                    radius="md"
                  >
                    <LayoutDashboard size={24} />
                  </ThemeIcon>
                  <Title
                    order={1}
                    style={{ fontSize: rem(48), fontWeight: 900, tracking: -1 }}
                  >
                    Dashboard
                  </Title>
                </Group>
                <Text c="dimmed" size="lg">
                  Manage your profile and account settings.
                </Text>
              </Stack>
              <SignOutButton />
            </Group>
          </header>

          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(32)}>
            <Paper className="glass" p={rem(32)}>
              <Stack gap="xl">
                <Group gap="md">
                  <ThemeIcon
                    variant="light"
                    color="black"
                    size="lg"
                    radius="md"
                  >
                    <User size={20} />
                  </ThemeIcon>
                  <Title order={3} style={{ fontWeight: 800 }}>
                    User Info
                  </Title>
                </Group>

                <Stack gap="md">
                  <Stack gap={4}>
                    <Text
                      size="xs"
                      c="dimmed"
                      tt="uppercase"
                      fw={700}
                      lts={rem(1)}
                    >
                      Name
                    </Text>
                    <Text size="lg" fw={600}>
                      {session.user.name}
                    </Text>
                  </Stack>

                  <Stack gap={4}>
                    <Text
                      size="xs"
                      c="dimmed"
                      tt="uppercase"
                      fw={700}
                      lts={rem(1)}
                    >
                      Email
                    </Text>
                    <Group gap="xs">
                      <Mail size={16} className="opacity-40" />
                      <Text size="lg" fw={600}>
                        {session.user.email}
                      </Text>
                    </Group>
                  </Stack>
                </Stack>
              </Stack>
            </Paper>

            <Paper
              className="glass"
              p={rem(32)}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Stack gap="xl" align="center" style={{ width: "100%" }}>
                <ThemeIcon variant="light" color="black" size="xl" radius="xl">
                  <ListTodo size={32} />
                </ThemeIcon>
                <Stack gap={rem(8)}>
                  <Title order={3} style={{ fontWeight: 800 }}>
                    Quick Actions
                  </Title>
                  <Text c="dimmed" size="sm">
                    Ready to organize your day?
                  </Text>
                </Stack>
                <Link
                  href="/todos"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Button
                    component="div"
                    size="lg"
                    radius="xl"
                    fullWidth
                    color="black.0"
                    variant="filled"
                    c="black.9"
                    className="premium-gradient"
                    style={{ fontWeight: 800 }}
                  >
                    Go to Todos
                  </Button>
                </Link>
              </Stack>
            </Paper>
          </SimpleGrid>
        </Stack>
      </Container>
    </main>
  );
}
