// pages/my-posts.js
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Auth } from 'aws-amplify'
import { postsByUsername } from '../graphql/queries'
import { deletePost as deletePostMutation } from '../graphql/mutations'
import MySelect from '../components/Autocomplete'
const initialState = { title: '', content: '', category: '', countries: '', selectCategory: '', createdAt: new Date().toISOString() }


export default function MyPosts() {
    const [posts, setPosts] = useState([])
    const [post, setPost, state] = useState(initialState)
    const { title, content, category, countries, selectCategory, createdAt } = post
    const [noOfElement, setnoOfElement] = useState(5)

    const slice = posts.slice(0, noOfElement)
    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }
    useEffect(() => {
    fetchPosts()
    }, [])
    async function fetchPosts() {
    const { username } = await Auth.currentAuthenticatedUser()
    const postData = await API.graphql({
        query: postsByUsername,
        variables: { username }
    })
    setPosts(postData.data.postsByUsername.items);
    console.log('console', postData.data.postsByUsername.items);
    
    }
    async function deletePost(id) {
    await API.graphql({
        query: deletePostMutation,
        variables: { input: { id } },
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    fetchPosts()
    }
    

    return (
    <div>
        <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">My Article Page</h1>
        {
        slice.map((post, index) => (
            <div key={index} className="border-b border-gray-300	mt-8 pb-4">
           <h2 className="text-xl font-semibold  mt-2">Title: {post.title}</h2>
              <p className="text-xl font-semibold  mt-2">Category: {post.category}</p>
              <p className="text-gray-500  font-semibold mt-2">Author: {post.username}</p>
              <p className="text-l font-semibold">Author's  Country: {post.countries}</p>
              <time className="font-semibold" dateTime={post.createdAt}>
                    Date created at: {new Date(post.createdAt).toDateString()}</time>
         
                    <br/>
            <Link href={`/edit-post/${post.id}`}><a className="text-sm mr-4 text-blue-500">Edit Post</a></Link>
            <Link href={`/posts/${post.id}`}><a className="text-sm mr-4 text-blue-500">View Post</a></Link>
            <button
                className="text-sm mr-4 text-red-500"
                onClick={() => deletePost(post.id)}
            >Delete Post</button>
            </div>
        ))
        }
        <button type="button" 
        onClick={() => loadMore()}
        >
        Load more posts
        </button>
    </div>
    )
}