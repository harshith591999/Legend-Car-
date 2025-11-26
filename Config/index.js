import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../Config/schema";

const connectionString = import.meta.env.VITE_DATABASE_URL;

if (!connectionString) {
  throw new Error("Missing VITE_DATABASE_URL in .env");
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });
