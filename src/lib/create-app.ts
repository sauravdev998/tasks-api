import { OpenAPIHono } from "@hono/zod-openapi";
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares";
import { PinoLogger as logger } from "@/middlewares/pino-logger";
import { AppBindings } from "./types";
import { defaultHook } from "stoker/openapi";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook });
}

export default function createApp() {
  const app = createRouter();
  app.use(logger());
  app.use(serveEmojiFavicon("📝"));
  app.onError(onError);
  app.notFound(notFound);
  return app;
}
