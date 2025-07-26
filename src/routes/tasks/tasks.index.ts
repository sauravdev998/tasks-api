import { createRouter } from "@/lib/create-app";
import * as handler from "@/routes/tasks/tasks.handler";
import * as routes from "@/routes/tasks/tasks.routes";

const router = createRouter().openapi(routes.list, handler.list);

export default router;
