import mongoose, { mongo } from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;
        connection.once("connected", () =>{
            console.log("MongoDB Connected");
            
        })
        connection.on("error", ()=>{
            console.log("Mongodb connection error, please make sure db is up and running");
            process.exit();
        })
    } catch (error:any) {
        console.log("Error connecting to database", error.message);
    }
}