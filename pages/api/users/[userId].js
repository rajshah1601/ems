import connectMongo from "@/database/conn";
import { deleteUser, getUserById, updateUser } from "@/database/controller";

export default async function handler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "Error in Connection" }))
    const { method } = req
    switch (method) {
        case "GET":
            getUserById(req, res)
            break;
        case "PUT":
            updateUser(req, res)
            break;
        case "DELETE":
            deleteUser(req, res)
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}