import { useReducer } from "react"
import Success from "./sucess"
import { useQueryClient, useMutation } from "react-query"
import { addUser, getUSers } from "@/lib/helper"
import Bug from "./bug"
import Document from "@/pages/_document"

export default function AddUserForm({ formData, setFormData }) {
    const queryClient = useQueryClient()
    const addMutation = useMutation(addUser, {
        onSuccess: () => {
            queryClient.prefetchQuery('users', getUSers)
        }
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        if (Object.keys(formData).length == 0) return console.log("Don't have form Data")
        let { firstname, lastname, email, salary, date, status } = formData
        const model = {
            name: `${firstname} ${lastname}`,
            email,
            salary,
            date,
            status: status ?? "Active"
        }

        addMutation.mutate(model)
    }
    if (addMutation.isLoading) return <div>Loading</div>
    if (addMutation.isError) return <Bug message={addMutation.error.message} />
    if (addMutation.isSuccess) return <Success message={"Added Sucessfully"} />
    return (
        <>
            <Document
                title="Add User Form"
                description="It is a web-based form that allows an authorized user to input data for creating a new user account in the system. The form usually includes fields for the user's personal information, email, Firstname,Lastname, and other relevant data. Once the form is submitted, the system processes the data and creates a new user account with the given information."
                image="https://photos.app.goo.gl/pkC9yWMt4RyaSWw37"
                url="https://emsystemdemo.netlify.app/"
            />
            <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
                </div>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
                </div>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
                </div>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
                </div>
                <div className="input-type">
                    <input type="date" onChange={setFormData} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
                </div>


                <div className="flex gap-10 items-center">
                    <div className="form-check">
                        <input type="radio" onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                            Active
                        </label>
                    </div>
                    <div className="form-check">
                        <input type="radio" onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                            Inactive
                        </label>
                    </div>
                </div>

                <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>

            </form>
        </>
    )
}