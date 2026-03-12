import {
  Button,
  Container,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { ChevronLeft, ListTodo } from "lucide-react";
import Link from "next/link";
import SignOutButton from "@/features/auth/components/SignOutButton";
import { TodoList } from "@/features/todos/components/TodoList";

export default function TodosPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        paddingTop: rem(48),
        paddingBottom: rem(80),
      }}
    >
      <Container size="sm">
        <Stack gap={rem(48)}>
          <header>
            <Group justify="space-between" align="center">
              <Link href="/dashboard" style={{ textDecoration: "none" }}>
                <Button
                  component="div"
                  variant="subtle"
                  color="black"
                  leftSection={<ChevronLeft size={16} />}
                  styles={{
                    root: {
                      color: "var(--mantine-color-black-4)",
                      "&:hover": {
                        backgroundColor:
                          "rgba(var(--mantine-color-black-rgb), 0.05)",
                      },
                    },
                  }}
                >
                  Dashboard
                </Button>
              </Link>
              <SignOutButton />
            </Group>
          </header>

          <Stack align="center" gap="md">
            <ThemeIcon variant="light" color="black" size="xl" radius="md">
              <ListTodo size={28} />
            </ThemeIcon>
            <Stack gap={rem(4)} align="center">
              <Title
                order={1}
                style={{ fontSize: rem(40), fontWeight: 900, tracking: -1 }}
              >
                Your Tasks
              </Title>
              <Text c="dimmed" fs="italic">
                Just Another Todo App (Jata)
              </Text>
            </Stack>
          </Stack>

          <TodoList />
        </Stack>
      </Container>
    </main>
  );
}
