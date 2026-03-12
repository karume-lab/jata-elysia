"use client";

import { Center, Loader, Paper, rem, Stack, Text } from "@mantine/core";
import { TodoForm } from "@/features/todos/components/TodoForm";
import { TodoItem } from "@/features/todos/components/TodoItem";
import { useTodos } from "@/features/todos/hooks/use-todos";

export function TodoList() {
  const { data: todos, isLoading } = useTodos();

  return (
    <Stack gap={rem(48)} style={{ width: "100%" }}>
      <TodoForm />

      <Stack gap="sm">
        {isLoading ? (
          <Center py={rem(80)}>
            <Loader color="gray" type="dots" />
          </Center>
        ) : todos?.length === 0 ? (
          <Paper className="glass" p={rem(64)} style={{ textAlign: "center" }}>
            <Stack gap="xs">
              <Text fw={700} size="lg">
                All caught up!
              </Text>
              <Text size="sm" c="dimmed">
                Add your first todo above to get started.
              </Text>
            </Stack>
          </Paper>
        ) : (
          todos?.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </Stack>
    </Stack>
  );
}
