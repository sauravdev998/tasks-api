import { z, ZodError } from "zod";

const EnvSchema = z.object({
  BUN_ENV: z.string().default("development"),
  PORT: z.coerce.number().default(3000),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]),
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
