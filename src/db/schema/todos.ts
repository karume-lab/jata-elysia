import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";
import { user } from "@/db/schema/auth";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  completed: boolean("completed").default(false).notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});
