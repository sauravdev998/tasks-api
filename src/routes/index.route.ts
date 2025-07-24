import { createRouter } from "@/lib/create-app";
import { createRoute, z } from "@hono/zod-openapi";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCode from "stoker/http-status-codes";

const router = createRouter().openapi(
  createRoute({
    tags: ["index"],
    method: "get",
    path: "/",
    responses: {
      [HttpStatusCode.OK]: jsonContent(
        z.object({
          message: z.string().default("task api"),
        }),
        "Task Api Index",
      ),
    },
  }),
  (c) => {
    return c.json({ message: "Task Api" }, HttpStatusCode.OK);
  },
);

export default router;
