import { RouteHandler } from "@hono/zod-openapi";
import { ListRoute } from "@/routes/tasks/tasks.routes";
import { AppRouteHandler } from "@/lib/types";
import db from "@/db";

export const list: AppRouteHandler<ListRoute> = (c) => {
  let tasks = db.query.tasksTable.findMany();
  return c.json([
    {
      name: "Learn Hono",
      done: false,
    },
  ]);
};
