import env from "@/env";
import { pinoLogger } from "hono-pino";
import pino from "pino";
import { PinoPretty } from "pino-pretty";

export function PinoLogger() {
  return pinoLogger({
    pino: pino(
      {
        level: env.LOG_LEVEL || "info",
      },
      env.BUN_ENV === "production" ? undefined : PinoPretty(),
    ),
    http: {
      reqId: () => crypto.randomUUID(),
    },
  });
}
