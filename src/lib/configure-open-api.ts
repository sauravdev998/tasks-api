import { apiReference, Scalar } from "@scalar/hono-api-reference";
import { AppOpenApi } from "./types";
import { url } from "zod";

export default function configureOpenApi(app: AppOpenApi) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Task Api",
    },
  });
  app.get(
    "/reference",
    Scalar({
      url: "/doc",
    }),
  );
}
