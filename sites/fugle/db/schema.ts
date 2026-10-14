// Intentionally empty by default.
// Add Drizzle tables here when the site actually needs a database.
// See examples/d1/db/schema.ts for an opt-in example.
import { sqliteTable, text, integer, index } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  userId: text("user_id").primaryKey(),
  nickname: text("nickname").notNull().default("Fuglekigger"),
  visible: integer("visible").notNull().default(0),
});

export const sightings = sqliteTable("sightings", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  speciesKey: text("species_key"),
  name: text("name").notNull(),
  scientificName: text("scientific_name").notNull(),
  status: text("status").notNull(),
  facts: text("facts").notNull(),
  reason: text("reason").notNull(),
  createdAt: text("created_at").notNull(),
  imageKey: text("image_key").notNull(),
}, (table) => [index("sightings_user_species").on(table.userId, table.speciesKey)]);

export const scans = sqliteTable("scans", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  createdAt: integer("created_at").notNull(),
}, (table) => [index("scans_time").on(table.createdAt)]);
