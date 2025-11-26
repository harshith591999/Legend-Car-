import { defineConfig } from "drizzle-kit";

const connectionUrl = process.env.DATABASE_URL || process.env.VITE_DATABASE_URL;

let dbCredentials = undefined;
if (connectionUrl) {
  try {
    const url = new URL(connectionUrl);
    dbCredentials = {
      host: url.hostname,
      port: Number(url.port || 5432),
      user: url.username,
      password: url.password,
      database: url.pathname?.replace(/^\//, ""),
      ssl: connectionUrl.includes("sslmode=require") || undefined,
    };
  } catch (e) {
    // leave dbCredentials undefined if parsing fails
  }
}

export default defineConfig({
  schema: "./Config/schema.js",
  out: "./drizzle", // migrations / generated files
  dialect: "postgresql", // required by drizzle-kit
  url: connectionUrl,
  dbCredentials, // required for drizzle-kit studio
});
