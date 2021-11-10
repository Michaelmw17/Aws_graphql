// pages/my-posts.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { postsByUsername } from '../graphql/queries'
import { deletePost as deletePostMutation } from '../graphql/mutations'
import MySelect from '../components/Autocomplete'
import MeetTheTeam from '../components/CardFlip/Services'


export default function MyPosts() {
    return (
    <div>
        <h1 className="text-3xl font-semibold tracking-wide mt-36 mb-2">My Article Page</h1>
        <div className="flex flex-wrap justify-center">
        <MeetTheTeam/>
    </div>
    </div>
    )
}