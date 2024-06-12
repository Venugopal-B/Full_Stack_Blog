import express from "express";
const app = express();
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
// import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import multer from "multer";


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json());
app.use(cors(
    {
        origin: "http://localhost:3000",

    }
));
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Client/public/upload')
    },
    filename: function (req, file, cb) {
    
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({ storage })

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file=req.file;
    res.status(200).json(file.filename)
})

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)


app.listen(8800, () => {
    console.log("Connected!");
})