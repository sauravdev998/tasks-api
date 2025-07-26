import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const tasksTable = sqliteTable("tasks", {
  id: integer().primaryKey({ autoIncrement: true }),
  done: integer({ mode: "boolean" }).notNull().default(false),
  name: text().notNull(),
  createdAt: integer({ mode: "timestamp" })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  updatedAt: integer({ mode: "timestamp" }).$onUpdate(
    () => sql`CURRENT_TIMESTAMP`,
  ),
});
