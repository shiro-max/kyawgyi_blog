import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtm from "./RemoveBtm";
import EditBtm from "./EditBtm";

const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics',{cache:'no-store'});
        if(!res.ok){
            throw new Error('Failed to fetch topics');
        }
        return await res.json();
    } catch (error) {
        console.log("Error loading topics",error)
    }
}

export default async function TopicList() {
    const topics = await getTopics();
    return (
        <>
            {topics.map((t)=>(
            <div key={t._id} className="flex gap-4 p-4 border rounded-lg bg-slate-100 m-4 shadow-md justify-between">
                <div className="flex flex-col overflow-hidden gap-1 ml-2">
                    <h2 className=" text-slate-800 text-xl font-semibold">{t.title}</h2>
                    <div className="overflow-hidden">
                    <p className="text-slate-600 truncate">{t.description}</p>
                    </div>
                    <p className="text-slate-400">Author : <span className=" font-bold font-mono text-slate-600">{t.author}</span></p>
                </div>
                <div>
                    <EditBtm id={t._id}/>
                    <RemoveBtm id={t._id}/>
                </div>
            </div>
            ))}
        </>
    )
}
