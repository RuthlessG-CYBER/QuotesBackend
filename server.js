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
    // add quotes here
    "https://i.pinimg.com/736x/5c/b6/1a/5cb61ab6e4d1e77f27f70a2a5f3151f5.jpg",
    "https://www.pinterest.com/pin/4081455907178030/",
    "https://www.pinterest.com/pin/15129348744284809/"
]

app.get("/hi", (req, res) => {
    res.status(200).send("Welcome to the Quotes Server!");
})

app.get("/quotes", (req, res) => {
    // for pick one str randomly
    res.status(200).send(hi[Math.floor(Math.random() * hi.length)]);
})

app.use(userRouter);

connect();

app.listen(PORT, () => {
    console.log(`Server is running on port localhost:${PORT}`);
})