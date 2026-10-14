CREATE TABLE `profiles` (
	`user_id` text PRIMARY KEY NOT NULL,
	`nickname` text DEFAULT 'Fuglekigger' NOT NULL,
	`visible` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `scans` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `scans_time` ON `scans` (`created_at`);--> statement-breakpoint
CREATE TABLE `sightings` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`species_key` text,
	`name` text NOT NULL,
	`scientific_name` text NOT NULL,
	`status` text NOT NULL,
	`facts` text NOT NULL,
	`reason` text NOT NULL,
	`created_at` text NOT NULL,
	`image_key` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `sightings_user_species` ON `sightings` (`user_id`,`species_key`);