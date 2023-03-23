import { getUSer, getUSers, updateUserById } from "@/lib/helper"
import Document from "@/pages/_document"
import { useReducer } from "react"
import { useQuery, useMutation, useQueryClient } from "react-query"
import Success from "./sucess"

export default function UpdateUserForm({ formId, formData, setFormData }) {
    const queryClient = useQueryClient()
    const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUSer(formId))
    const UpdateMutation = useMutation((newData) => updateUserById(formId, newData), {
        onSuccess: async (data) => {
            queryClient.prefetchQuery('users', getUSers)
        }
    })
    if (isLoading) return <div>Loading</div>
    if (isError) return <div>Error</div>
    const { name, salary, date, email, status } = data
    const [firstname, lastname] = name ? name.split(' ') : formData
    const handleSubmit = async (e) => {
        e.preventDefault()
        let userName = `${formData.firstname ?? firstname}${formData.lastname ?? lastname}`
        let updated = Object.assign({}, data, formData, { name: userName })
        await UpdateMutation.mutate(updated)
    }

    return (
        <>
            <Document
                title="Update User Form"
                description="The Update User Form in the Employment Management system allows the user to modify the details of an existing employee. The form displays the current information of the employee and provides input fields for the user to update their details such as their name, email address, job title, and department. The user can also modify the employee's status, such as making them active or inactive."
                image="https://photos.app.goo.gl/Eqaum3NsFYBXphAeA"
                url="https://emsystemdemo.netlify.app/"
            />
            <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="firstname" defaultValue={firstname} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
                </div>
                <div className="input-type">
                    <input type="text" onChange={setFormData} name="lastname" defaultValue={lastname} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
                </div>
                <div className="input-type">
                    <input type="text" defaultValue={email} onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
                </div>
                <div className="input-type">
                    <input type="text" defaultValue={salary} onChange={setFormData} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
                </div>
                <div className="input-type">
                    <input type="date" defaultValue={date} onChange={setFormData} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
                </div>


                <div className="flex gap-10 items-center">
                    <div className="form-check">
                        <input type="radio" defaultChecked={status == "Active"} onChange={setFormData} value="Active" id="radioDefault1" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault1" className="inline-block tet-gray-800">
                            Active
                        </label>
                    </div>
                    <div className="form-check">
                        <input defaultChecked={status !== "Active"} type="radio" onChange={setFormData} value="Inactive" id="radioDefault2" name="status" className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300  bg-white checked:bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
                        <label htmlFor="radioDefault2" className="inline-block tet-gray-800">
                            Inactive
                        </label>
                    </div>
                </div>

                <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-yellow-500 hover:text-yellow-500">Update</button>

            </form>
        </>
    )
}