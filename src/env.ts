import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    THIRDWEB_AUTH_PRIVATE_KEY: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_ENV: z.enum(["development", "staging", "production"]),
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: z.string().url(),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    THIRDWEB_AUTH_PRIVATE_KEY: process.env.THIRDWEB_AUTH_PRIVATE_KEY,
    NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN,
  },
});
