import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log("Database Connected");
    }).catch((err) => {
        console.log(err);
    })
}