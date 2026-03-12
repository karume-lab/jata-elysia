import { Elysia } from "elysia";
import { appRouter } from "@/api/routers";

export const app = new Elysia({ prefix: "/api" }).use(appRouter);

export type App = typeof app;
