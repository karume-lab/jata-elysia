import { Elysia } from "elysia";
import { todosRouter } from "@/api/routers/todos";

export const appRouter = new Elysia().use(todosRouter);
