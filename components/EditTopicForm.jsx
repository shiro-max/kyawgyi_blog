'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function EditTopicForm({ id,title,description }) {
    const router = useRouter();
    const [newTitle,setNewTitle] = useState(title);
    const [newDescription,setNewDescription] = useState(description);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    newTitle,
                    newDescription
                })
            });
            if(res.ok){
                router.refresh();
                router.push("/");
            }else{
                throw new Error("Failed to editing topic");
            }
        } catch (error) {
            console.log("Error occoured while updating topic",error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg bg-slate-100 m-4 shadow-md">
            <input 
            className="px-3 py-2 border rounded-md" type="text" placeholder="Topic title"
            value={newTitle}
            onChange={(e)=>{setNewTitle(e.target.value)}}
            />
            <textarea 
            className="px-3 py-2 border rounded-md" cols="30" rows="10" placeholder="Topic description"
            value={newDescription}
            onChange={(e)=>{setNewDescription(e.target.value)}}
            ></textarea>
            <button type='submit' className="px-3 py-2 border-none rounded-md w-fit bg-blue-200 shadow-md">Update Topic</button>
        </form>
    )
}
