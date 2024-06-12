import pg from "pg";

 export const db = new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"blog",
    password:"your_password",
    port:5432,
  });
  
  db.connect();
