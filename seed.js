import Database from "better-sqlite3";
const db = new Database("database.db");


db.exec(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    message TEXT
  )
`);

db.exec(`
    INSERT INTO messages (username, message)
    VALUES
    ('Chris', 'I enjoyed visiting Santa last year.'),
    ('Amelia', 'I like decorating my cookies.'),
    ('John','I got a toycar from Santa. It was my best Christmas.'),
    `);
