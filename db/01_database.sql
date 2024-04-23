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

CREATE TABLE "challenge_content" (
  "id" SERIAL PRIMARY KEY,
  "challengeId" INTEGER NOT NULL REFERENCES "challenges"(id) ON DELETE CASCADE,
  "tools" TEXT,
  "acceptanceCriteria" TEXT,
  "instructions" TEXT,
  "stretchGoals" TEXT
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
  ('Counter', 'Increment and decrement a number on screen. Remember that you can google problems when you get stuck.', 'beginner', '/images/counter/counter_0.png', 'web, unity'),
  ('HTML Form', 'Learn how to create a form and handle the returned data.', 'beginner', 'https://via.placeholder.com/150', 'web'),
  ('Photo Gallery', 'Board of photos that can be interacted with.', 'beginner', 'https://via.placeholder.com/150', 'web'),
  ('Challenge', 'This is the third challenge', 'beginner', 'https://via.placeholder.com/150', 'unity'),
  ('Challenge 4', 'This is the fourth challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 5', 'This is the fifth challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 6', 'This is the sixth challenge', 'easy', 'https://via.placeholder.com/150', 'web'),
  ('Challenge 7', 'This is the seventh challenge', 'medium', 'https://via.placeholder.com/150', 'web'),
  ('Realtime Chat', 'This is the eighth challenge', 'medium', 'https://via.placeholder.com/150', 'web'),
  ('Inventory', 'This is the ninth challenge', 'hard', 'https://via.placeholder.com/150', 'web, unity'),
  ('Canvas', 'This is the tenth challenge', 'hard', 'https://via.placeholder.com/150', 'web');

-- If different tools need different instructions, you can create another row instead of adding it to the tools array
INSERT INTO "challenge_content" ("challengeId", "tools", "acceptanceCriteria", "instructions", "stretchGoals")
VALUES
  (1, '["JS", "TS", "React"]', '["Two buttons exists on the page called Increment and Decrement", "Counter value can be increased and decreased.", "Counter UI is updated to reflect changes."]', '[]', '["Add a reset button.", "Have the count number data be persistant even when reloading the page.", "Every 10th click the counter color should change green, then back to normal after the count changes again."]'),
  (1, '["Unity"]', '["Counter value can be increased and decreased.", "Counter UI is updated to reflect changes."]', '[]', '["Add a reset button.", "Have the count number data be persistant even when reloading the scene.", "Every 10th click the counter color should change green, then go back to normal after the count changes again."]'),
  (2, '["JS", "TS", "React"]', '["Can fill out the form and submit it, the result should be displayed inside the <div> with the class `output`.", "Can’t skip required fields."]', '[]', '["Use the confirm() method to ask if the user is sure they want to submit.", "Use EmailJS to send yourself an email containing the form results."]');
