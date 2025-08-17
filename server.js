import express from "express";
import { userRouter } from "./routes/userRoute.js";
import { connect } from "./config/db.js";
import "dotenv/config"
import cors from "cors"


const app = express();
app.use(cors());

app.use(express.json());

const PORT = 4040;

const hi = [
    // add more quotes here
    "Hi, how are you buddy!",
    "Hi, how are you doing?",
    "Hi, how are you?",
    "Hi, how are you doing today?"
]

const images = [
    "https://i.pinimg.com/736x/5c/b6/1a/5cb61ab6e4d1e77f27f70a2a5f3151f5.jpg",
    "https://i.pinimg.com/736x/fe/34/c7/fe34c707fb9a8fbd594ba9d2e7bbb43f.jpg",
    "https://i.pinimg.com/736x/b1/5e/09/b15e0959849145016ef8a47615a97fcd.jpg"
]

app.get("/hi", (req, res) => {
    res.status(200).send("Welcome to the Quotes Server!");
})

app.get("/quotes", (req, res) => {
    // for pick one str randomly
    res.status(200).send(hi[Math.floor(Math.random() * hi.length)]);
})

app.get("/images", (req, res) => {
    // for pick one str randomly
    res.status(200).send(images[Math.floor(Math.random() * images.length)]);
})

app.use(userRouter);

connect();

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
})