CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" TEXT UNIQUE NOT NULL,
  "password" TEXT NOT NULL,
  "email" TEXT,
  "accessLevel" INTEGER NOT NULL DEFAULT 1
);


-------------------------
-- INSERT DEFAULT DATA --
-------------------------

INSERT INTO "users" ("username", "password", "email", "accessLevel")
VALUES
  ('dev', '$2a$10$3rvmJEyHfGUQhLpuhKBmneeK76Zvw2d7wO0KYob8YKAF.DirAKcga', 'fireknights318@gmail.com', 2),
  ('test', '$2a$10$3rvmJEyHfGUQhLpuhKBmneeK76Zvw2d7wO0KYob8YKAF.DirAKcga', null, 1)
;
