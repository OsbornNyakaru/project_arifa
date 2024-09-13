import mongoose from "mongoose";

let isConnected = false; //track the connection status 

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            serverSelectionTimeoutMS: 30000, // 30 seconds timeout
        })

        isConnected = true;

        console.log('MongoDB connected')

    } catch (error) {
        console.log(error);
    }
}

{/* import mongoose from 'mongoose';

const connectToDB = async () => {
    if (mongoose.connection.readyState === 0) { // 0 means disconnected
        try {
            await mongoose.connect(process.env.MONGODB_URI, {
                serverSelectionTimeoutMS: 30000, // 30 seconds timeout
            });
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Error connecting to MongoDB:", error.message);
            throw error; // Throw the error to handle it upstream
        }
    }
};

export default connectToDB;
 */}