import { z, ZodError } from "zod";

const EnvSchema = z
  .object({
    BUN_ENV: z.string().default("development"),
    PORT: z.coerce.number().default(3000),
    LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
    DATABASE_URL: z.string(),
    DATABASE_AUTH_TOKEN: z.string().optional(),
  })
  .check((ctx) => {
    if (ctx.value.BUN_ENV === "production" && !ctx.value.DATABASE_AUTH_TOKEN) {
      ctx.issues.push({
        code: "invalid_type",
        input: ctx.value,
        expected: "string",
        received: "undefined",
        path: ["DATABASE_AUTH_TOKEN"],
        message: "Must be set when BUN_ENV is production",
      });
    }
  });

export type Env = z.infer<typeof EnvSchema>;

let env: Env;
try {
  env = EnvSchema.parse(process.env);
} catch (e) {
  const error = e as ZodError;
  console.error("❎ Invalid env");
  console.error(z.treeifyError(error));
  process.exit(1);
}

export default env;
