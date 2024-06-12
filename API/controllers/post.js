import { db } from "../db.js";
import jwt from "jsonwebtoken";
// Assuming you have a connection pool or client established

export const getPosts = async (req, res) => {
  try {
    const q = req.query.cat;
    const query = q
      ? "SELECT * FROM posts WHERE cat = $1"
      : "SELECT * FROM posts";

    const values = q ? [q] : []; // Create an empty array if no category filter is provided

    const data = await db.query(query, values); // Pass the values array for parameter binding

    return res.status(200).json(data.rows);
  } catch (err) {
    console.error("Error fetching posts:", err);
    let errorDetails = "An unexpected error occurred while fetching posts.";
    if (err.message) {
      errorDetails += ` Details: ${err.message}`;
    }
    return res.status(500).json({ error: errorDetails });
  }
};

export const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const q = "SELECT p.id,username ,title,descp,p.img,u.img AS userImg,cat,date FROM users u JOIN posts p ON u.id=p.uid WHERE p.id=$1";
    const values = [id]; // Create an array with the parameter value

    const data = await db.query(q, values); // Pass the values array for parameter binding

    if (data.rows.length === 0) {
      return res.status(404).json({ error: "Post not found" });
    }
    return res.status(200).json(data.rows[0]);
  } catch (err) {
    console.error("Error fetching post:", err);
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid")

    try {
      const { title, descp, img, cat, date } = req.body;

      const q = "INSERT INTO posts (title, descp, img,cat,date,uid) VALUES ($1, $2, $3,$4,$5,$6)";
      const values = [title, descp, img, cat, date, userInfo.id]; // Create an array with parameter values

      await db.query(q, values); // Pass the values array for parameter binding

      return res.status(201).json({ message: "Post created successfully" });
    } catch (err) {
      console.error("Error adding post:", err);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  })
};

export const deletePost = (req, res) => {

  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid")


    try {
      const id = req.params.id;
      const q = "DELETE FROM posts WHERE id = $1 AND uid = $2";
      const values = [id, userInfo.id]; // Create an array with the parameter value

      await db.query(q, values); // Pass the values array for parameter binding

      return res.status(204).json({ message: "Post deleted successfully" });
    } catch (err) {
      console.error("Error deleting post:", err);
      return res.status(403).json({ error: "You Can delete only your post" });
    }

  })

};

export const updatePost = async (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", async (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid")

    try {
      const { title, descp, img, cat, date } = req.body;
      const id = req.params.id;
      const q = "UPDATE posts SET title=$1,descp=$2,img=$3,cat=$4 WHERE id=$5 AND uid=$6";
      const values = [title, descp, img, cat, id, userInfo.id]; // Create an array with parameter values

      await db.query(q, values); // Pass the values array for parameter binding

      return res.status(201).json({ message: "Post Has been Updated successfully" });
    } catch (err) {
      console.error("Error adding post:", err);
      return res.status(500).json({ error: "An unexpected error occurred" });
    }
  })
};
