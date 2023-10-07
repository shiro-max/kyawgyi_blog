import AddTopic from '@/components/AddTopic'
import { Navbar } from '@/components/Navbar'
import React from 'react'

export default function addTopic() {
    return (
        <>
            <Navbar title="Add Topic" isAddTopicPage={true} />
            <AddTopic/>
        </>
    )
}

