import { and, eq } from "drizzle-orm";
import { Elysia, t } from "elysia";
import { authMiddleware } from "@/api/middlewares/auth";
import { db } from "@/db";
import { todos } from "@/db/schema";

export const todosRouter = new Elysia({ prefix: "/todos" })
  .use(authMiddleware)
  .get("/", async ({ session }) => {
    const userId = session?.user.id;
    if (!userId) return [];

    return await db.select().from(todos).where(eq(todos.userId, userId));
  })
  .post(
    "/",
    async ({ body, session }) => {
      const userId = session?.user.id;
      if (!userId) throw new Error("Unauthorized");

      const [newTodo] = await db
        .insert(todos)
        .values({ ...body, userId })
        .returning();
      return newTodo;
    },
    {
      body: t.Object({
        title: t.String(),
      }),
    },
  )
  .patch(
    "/:id",
    async ({ params: { id }, body, session }) => {
      const userId = session?.user.id;
      if (!userId) throw new Error("Unauthorized");

      const [updatedTodo] = await db
        .update(todos)
        .set(body)
        .where(and(eq(todos.id, Number(id)), eq(todos.userId, userId)))
        .returning();
      return updatedTodo;
    },
    {
      params: t.Object({
        id: t.String(),
      }),
      body: t.Object({
        completed: t.Boolean(),
      }),
    },
  )
  .delete(
    "/:id",
    async ({ params: { id }, session }) => {
      const userId = session?.user.id;
      if (!userId) throw new Error("Unauthorized");

      await db
        .delete(todos)
        .where(and(eq(todos.id, Number(id)), eq(todos.userId, userId)));
      return { success: true };
    },
    {
      params: t.Object({
        id: t.String(),
      }),
    },
  );
