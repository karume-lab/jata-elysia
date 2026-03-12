import { drizzle } from "drizzle-orm/postgres-js";
import { client } from "@/db/client";
import * as schema from "@/db/schema";

export const db = drizzle(client, { schema });
