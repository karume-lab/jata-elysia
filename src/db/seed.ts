import { db } from "@/db/index";
import todosData from "@/db/mock-data/todos.json" with { type: "json" };
import usersData from "@/db/mock-data/users.json";
import {
  account as accountTable,
  session as sessionTable,
  todos as todosTable,
  user as userTable,
} from "@/db/schema";

type SeedTodo = {
  title: string;
  completed: boolean;
  userId: string;
};

import { hashPassword } from "better-auth/crypto";

async function seed() {
  console.log("Starting Jata Elysia advanced seeding...");

  try {
    console.log("Cleaning existing data...");
    await db.delete(todosTable);
    await db.delete(sessionTable);
    await db.delete(accountTable);
    await db.delete(userTable);

    console.log(`Seeding ${usersData.length} users and their accounts...`);
    for (const userData of usersData) {
      const { password, ...user } = userData;

      await db.insert(userTable).values({
        ...user,
        emailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      const hashedPassword = await hashPassword(password);
      await db.insert(accountTable).values({
        id: `${user.id}_account`,
        userId: user.id,
        accountId: user.id,
        providerId: "credential",
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    console.log(`Seeding ${todosData.length} todos...`);
    await db.insert(todosTable).values(todosData as SeedTodo[]);

    console.log("Seeding completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
}

seed();
