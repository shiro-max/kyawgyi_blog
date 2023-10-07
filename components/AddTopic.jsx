'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
    const router = useRouter();
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [author,setAuthor] = useState("");
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!title || !description || !author){
            alert("Please fill all the fields");
            return;
        }
        try {
            const res = await fetch('http://localhost:3000/api/topics',{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },body:JSON.stringify({
                title,
                description,
                author
            })
            });
            if(res.ok){
                router.push("/");
                router.refresh();
            }else{
                throw new Error("Failed to add topic");
            }
            
        } catch (error) {
            console.log("Error adding topic",error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded-lg bg-slate-100 m-4 shadow-md">
            <input 
            className="px-3 py-2 border rounded-md" type="text" placeholder="Topic title"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            />
            <textarea 
            className="px-3 py-2 border rounded-md" cols="30" rows="10" placeholder="Topic description"
            value={description}
            onChange={(e)=>{setDescription(e.target.value)}}
            ></textarea>
            <input 
            className="px-3 py-2 border rounded-md" type="text" placeholder="Author name"
            value={author}
            onChange={(e)=>{setAuthor(e.target.value)}}
            />
            <button type="submit" className="px-3 py-2 border-none rounded-md w-fit bg-blue-200 shadow-md">Add topic</button>
        </form>
    )
}
