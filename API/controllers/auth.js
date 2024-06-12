import { db } from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export const register = async (req, res) => {

  try {
    // Check existing user
    const q = "SELECT * FROM users WHERE email = $1 OR username = $2";
    const { rows } = await db.query(q, [req.body.email, req.body.name]);
    if (rows.length) {
      return res.status(409).json("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";

    await db.query(insertQuery, [req.body.username, req.body.email, hash]);

    return res.status(200).json("User has been created");

  } catch (error) {
    return res.status(500).json(error.message);
  }


};

export const login = async (req, res) => {
  const q = "SELECT * FROM users WHERE username = $1";

  try {
    const { rows } = await db.query(q, [req.body.username]);
    if (rows.length === 0) {
      throw new Error("User not Found!");
    }

    const checkPassword = await bcrypt.compare(req.body.password, rows[0].password);
    if (!checkPassword) {
      throw new Error("Wrong password or username!");
    }

    const token = jwt.sign({ id: rows[0].id }, "jwtkey");
    const { password, ...others } = rows[0];
    res.cookie("access_token", token, {
      httpOnly: true,
    }).status(200).json(others);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("access_token", {
      secure: true,
      sameSite: "none"
    }).status(200).json("User has been logged out");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
