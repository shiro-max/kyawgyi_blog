'use client';
import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'
import { HiPencilAlt } from 'react-icons/hi'

export default function EditBtm({id}) {
    const {status} = useSession();
    return (
        <>
        {status === 'authenticated'?(
            <Link href={`/editTopic/${id}`}>
            <HiPencilAlt size={20} />
            </Link>
        ):(
            <></>
        )

        }
        </>
    )
}
