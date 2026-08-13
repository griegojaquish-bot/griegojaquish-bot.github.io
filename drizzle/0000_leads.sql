CREATE TABLE IF NOT EXISTS `leads` (
  `id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
  `name` text NOT NULL,
  `phone` text NOT NULL,
  `project_type` text NOT NULL,
  `requirement` text NOT NULL,
  `created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
