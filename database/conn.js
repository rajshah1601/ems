import mongoose from "mongoose"

const MONGO_URI = "mongodb://127.0.0.1:27017/nextCrud"

const connectMongo = async () => {
    try {
        const { connection } = await mongoose.connect(MONGO_URI)
        if(connection.readyState == 1){
            console.log("Database Connected")
        }
    } catch (errors) {
        return Promise.reject(errors)
    }
}
export default connectMongo