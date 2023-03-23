import { getUSers } from "@/lib/helper"
import { deleteAction, toggleChangeAction, updateAction } from "@/redux/reducer"
import { BiEdit, BiTrashAlt } from "react-icons/bi"
import { useQuery } from "react-query"
import { useDispatch, useSelector } from "react-redux"
export default function Table() {
    //Instead a making new request it will return cached memory
    const { isLoading, isError, data, error } = useQuery('users', getUSers)
    if (isLoading) return <div>Employee is Loading</div>
    if (isError) return <div>Got Error</div>


    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Email</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {data.map((obj, i) => <Tr {...obj} key={i} />)}
            </tbody>

        </table>
    )
}

function Tr({ _id, name, email, salary, date, status }) {
    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()
    const updateHandler = () => {
        dispatch(toggleChangeAction(_id))
        if (visible) {
            dispatch(updateAction(_id))
        }
    }
    const deleteHandler = () => {
        if (!visible) {
            dispatch(deleteAction(_id))
        }
    }
    return (
        <tr className="bg-gray-50 text-center">
            <td className="px-16 py-2 flex flex-row items-center">
                <span className="text-center ml-2 font-semibold">{name || "Unknown"}</span>
            </td>
            <td className="px-16 py-2">
                <span>
                    {email || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span>
                    {salary || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <span>
                    {date || "Unknown"}
                </span>
            </td>
            <td className="px-16 py-2">
                <button className="cursor"><span className={`${status == 'Active' ? 'bg-green-500' : 'bg-rose-500'} text-white px-5 py-1 rounded`}>{status || "Unknown"}</span></button>
            </td>
            <td className="px-16 py-2 flex justify-around gap-5">
                <button onClick={updateHandler} className="cursor"><BiEdit size={25} color={"rgb(34,197,94"}></BiEdit></button>
                <button onClick={deleteHandler} className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94"}></BiTrashAlt></button>
            </td>
        </tr>
    )
}