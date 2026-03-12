"use client";

import { ActionIcon, Group, rem, TextInput } from "@mantine/core";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useCreateTodo } from "@/features/todos/hooks/use-todos";

export function TodoForm() {
  const [title, setTitle] = useState("");
  const createTodo = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    createTodo.mutate(title, {
      onSuccess: () => setTitle(""),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group gap="md">
        <TextInput
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          size="lg"
          radius="xl"
          style={{ flex: 1 }}
          className="glass"
          styles={{
            input: {
              backgroundColor: "rgba(var(--mantine-color-black-rgb), 0.05)",
              borderColor: "rgba(var(--mantine-color-black-rgb), 0.1)",
              color: "var(--mantine-color-white)",
              paddingLeft: rem(24),
            },
          }}
        />
        <ActionIcon
          type="submit"
          loading={createTodo.isPending}
          size={rem(54)}
          radius="xl"
          className="premium-gradient"
          style={{ border: 0 }}
        >
          <Plus size={28} color="var(--mantine-color-black-9)" />
        </ActionIcon>
      </Group>
    </form>
  );
}
