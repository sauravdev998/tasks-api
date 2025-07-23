import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { PinoLogger as logger } from "@/middlewares/pino-logger";
import { AppBindings } from "./types";

export default function createApp() {
  const app = new OpenAPIHono<AppBindings>({ strict: false });
  app.use(logger());
  app.use(serveEmojiFavicon("📝"));
  app.onError(onError);
  app.notFound(notFound);
  return app;
}
