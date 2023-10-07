'use client';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { HiOutlineTrash } from 'react-icons/hi'


export default function RemoveBtm({ id }) {
    const { status } = useSession();
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure!Do you want to delete this topic?");
        if(confirmed){
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method:"DELETE"
            });
            if(res.ok){
                router.refresh();
            }
        }
    };
    return (
        <>
        {status === "authenticated" ? (
            <button onClick={removeTopic} className='text-red-400 my-2'>
            <HiOutlineTrash size={20} />
            </button>
        ):(
            <></>
        )
        }
        </>
        
    )
}
