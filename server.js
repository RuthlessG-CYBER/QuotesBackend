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
    "hi my name is soumya",
    "hi my name is pakham",
    "hi my name is mayur",
    "hi my name is sasank"
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