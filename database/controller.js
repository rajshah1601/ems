// 

import Users from "@/model/user"

export async function getUser(req, res) {
    try {
        const users = await Users.find({})
        if (!users) return res.json(404).json({ error: "Data not found" })
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ error: "Error while fetching data" })
    }
}

export async function getUserById(req, res) {
    try {
        const { userId } = req.query
        if (userId) {
            const user = await Users.findById(userId)
            res.status(200).json(user)
        }
        res.status(404).json({ error: "User Not available" })
    } catch (error) {
        res.status(404).json({ error: "Error while fetching single data" })
    }
}

export async function addUser(req, res) {
    try {
        const formData = req.body
        if (!formData) return res.status(404).json({ error: "Formdata not provided" })
        if(formData){
            Users.create(formData)
            return res.status(200).json(data)
        }
        
    } catch (error) {
        res.status(404).json({ error: "Error while Adding data" })
    }
}

export async function updateUser(req, res) {
    try {
        const { userId } = req.query
        const formData = req.body
        if (userId && formData) {
            await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(formData)
        }
        res.status(404).json({ error: "User is not available" })
    } catch (error) {
        res.status(404).json({ error: "Error while Updating data" })
    }
}

export async function deleteUser(req, res) {
    try {
        const { userId } = req.query
        if (userId) {
            const user = await Users.findByIdAndDelete(userId)
            res.status(200).json({ deleted: userId })
        }
        res.status(404).json({ error: "User is not available" })
    } catch (error) {
        res.status(404).json({ error: "Error while Deleting data" })
    }
} 