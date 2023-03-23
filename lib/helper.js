const BASE_URL = "http://localhost:3000"
export async function getUSers() {
    const response = await fetch(`${BASE_URL}/api/users`)
    const result = await response.json()
    return result
}

export async function getUSer(userId) {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`)
    const result = await response.json()
    if (result) return result;
    return {}
}

export async function addUser(formData) {
    try {
        const Options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}

export async function updateUserById(userId, formData) {
    try {
        const Options = {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}

export async function deleteUserById(userId) {
    try {
        const Options = {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" },
        }
        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const result = await response.json()
        return result
    } catch (error) {
        return error
    }
}