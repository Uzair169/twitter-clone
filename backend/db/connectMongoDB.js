import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("MongoDB connected")
    } catch (error) {
        console.error(`Error connecting to Mongo DB: ${error.message}`)
        process.exit(1)
    }
}

export default connectMongoDB