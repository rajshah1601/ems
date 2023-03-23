import Head from 'next/head'
import { Inter } from 'next/font/google'
import Table from '@/components/table'
import Form from '@/components/form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAction, toggleChangeAction } from '@/redux/reducer'
import { useMutation, useQueryClient } from 'react-query'
import { deleteUserById, getUSers } from '@/lib/helper'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const visible = useSelector((state)=>state.app.client.toggleForm)
  const deleteId = useSelector((state)=>state.app.client.deleteId)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()
  const handler = () => {
    dispatch(toggleChangeAction())
  }
  const deleteMutation = useMutation((newId)=>deleteUserById(newId),{
    onSuccess:()=>{
      queryClient.prefetchQuery('users',getUSers)
    }
  })
  const cancelhandler=async()=>{
    if(deleteId){
      console.log("Cancel")
      dispatch(deleteAction(null))
    }
  }
  const deletehandler=async()=>{
    deleteMutation.mutate(deleteId)
    dispatch(deleteAction(null))
  }
  return (
    <>
      <section>
        <Head>
          <title>CRUD Application</title>
        </Head>

        <main className='py-5'>
          <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Employee Management</h1>
          <div className='container mx-auto flex justify-between py-5 border-b'>
            <div className='left flex gap-3'>
              <button onClick={handler} className='flex bg-indigo-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-gray-800'>
                Add Employee
              </button>
            </div>
            {deleteId ?  DeleteComponent({deletehandler,cancelhandler}):""}
          </div>

            {visible ? <Form></Form> : <></>}
  
          <div className='container mx-auto'>
            <Table />
          </div>
        </main>
      </section>
    </>
  )
}


function DeleteComponent({deletehandler,cancelhandler}){
  return(
    <div className='flex gap-5'>
      <button>Are you Sure</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounder-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>Yes</button>
      <button onClick={cancelhandler} className='flex bg-green-500 text-white px-4 py-2 border rounder-md hover:bg-green-500 hover:border-green-500 hover:text-gray-50'>No</button>
    </div>
  )
}