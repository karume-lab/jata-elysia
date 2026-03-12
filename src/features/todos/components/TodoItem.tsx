"use client";

import { ActionIcon, Checkbox, Group, Paper, Text } from "@mantine/core";
import { Trash2 } from "lucide-react";
import {
  type Todo,
  useDeleteTodo,
  useToggleTodo,
} from "@/features/todos/hooks/use-todos";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const toggleTodo = useToggleTodo();
  const deleteTodo = useDeleteTodo();

  return (
    <Paper
      className="glass"
      p="md"
      mb="sm"
      style={{
        transition: "all 0.2s ease",
        opacity: todo.completed ? 0.6 : 1,
      }}
    >
      <Group justify="space-between" wrap="nowrap">
        <Group gap="md" style={{ flex: 1 }}>
          <Checkbox
            checked={todo.completed}
            onChange={() =>
              toggleTodo.mutate({ id: todo.id, completed: !todo.completed })
            }
            size="md"
            radius="xl"
            color="black"
            styles={{
              input: {
                backgroundColor: "transparent",
                borderColor: "rgba(var(--mantine-color-black-rgb), 0.2)",
              },
            }}
          />
          <Text
            size="lg"
            fw={500}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed
                ? "var(--mantine-color-black-5)"
                : "var(--mantine-color-white)",
              transition: "all 0.2s ease",
            }}
          >
            {todo.title}
          </Text>
        </Group>
        <ActionIcon
          variant="subtle"
          color="red"
          onClick={() => deleteTodo.mutate(todo.id)}
          styles={{
            root: {
              opacity: 0,
              "&:hover": {
                opacity: 1,
                backgroundColor: "rgba(255, 0, 0, 0.05)",
              },
            },
          }}
          className="delete-btn"
          style={{ transition: "opacity 0.2s ease" }}
        >
          <Trash2 size={18} />
        </ActionIcon>
      </Group>
      <style jsx global>{`
				.glass:hover .delete-btn {
					opacity: 0.6 !important;
				}
				.delete-btn:hover {
					opacity: 1 !important;
				}
			`}</style>
    </Paper>
  );
}
