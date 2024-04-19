CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "email" TEXT,
  "accessLevel" INTEGER NOT NULL DEFAULT 1
);

CREATE TABLE "challenges" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "desc" TEXT,
  "difficulty" TEXT,
  "image" TEXT,
  "platform" TEXT
);


-------------------------
-- INSERT DEFAULT DATA --
-------------------------

INSERT INTO "users" ("username", "password", "email", "accessLevel")
VALUES
  ('dev', '$2a$10$3rvmJEyHfGUQhLpuhKBmneeK76Zvw2d7wO0KYob8YKAF.DirAKcga', 'fireknights318@gmail.com', 2),
  ('test', '$2a$10$3rvmJEyHfGUQhLpuhKBmneeK76Zvw2d7wO0KYob8YKAF.DirAKcga', null, 1)
;

INSERT INTO "challenges" ("title", "desc", "difficulty", "image", "platform")
VALUES
  ('Challenge 1', 'This is the first challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 2', 'This is the second challenge', 'medium', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 3', 'This is the third challenge', 'hard', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 4', 'This is the fourth challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 5', 'This is the fifth challenge', 'medium', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 6', 'This is the sixth challenge', 'hard', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 7', 'This is the seventh challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 8', 'This is the eighth challenge', 'medium', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 9', 'This is the ninth challenge', 'hard', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 10', 'This is the tenth challenge', 'easy', 'https://via.placeholder.com/150', 'web');
