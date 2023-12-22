import Database from "better-sqlite3";
const db = new Database("database.db");

import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (request, response) {
    response.json("You are looking at my root route.");
  });
  
  app.get("/messages", function (request, response) {
    let messages = [];
    if(request.query.id){
        messages = db
        .prepare('SELECT * FROM jokes WHERE id=${request.query.id}')
        .all();
    }else {
        messages = db.prepare("SELECT * FROM messages").all();

    }
       response.json(messages);
  });
  
  app.post("/messages", function (request, response) {
    console.log(request.body);
    const username = request.body.username;
    const message = request.body.message;
  
    const newmessage = db
      .prepare(`INSERT INTO messages (username, message) VALUES (?, ?)`)
      .run(username, message);
  
    response.json(newmessage);
  });
  
  app.listen(8080, function () {
    console.log("IT'S WORKING!");
  });