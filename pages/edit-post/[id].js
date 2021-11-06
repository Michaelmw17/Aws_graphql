import { useEffect, useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { v4 as uuid } from 'uuid'
import { updatePost } from '../../graphql/mutations'
import { getPost } from '../../graphql/queries'

function EditPost() {
    const [post, setPost] = useState(null)
    const router = useRouter()
    const { id } = router.query
    const fileInput = useRef(null)

    useEffect(() => {
        fetchPost()
        async function fetchPost() {
        if (!id) return
        const postData = await API.graphql({ query: getPost, variables: { id }})
        console.log('postData: ', postData)
        setPost(postData.data.getPost)
        }
    }, [id])
    if (!post) return null
    function onChange(e) {
        setPost(() => ({ ...post, [e.target.name]: e.target.value }))
    }
    const { title, content, category } = post
    async function updateCurrentPost() {
        if (!title || !content || !category ) return
        const postUpdated = {
        id, content, title, category
        }
        await API.graphql({
        query: updatePost,
        variables: { input: postUpdated },
        authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        console.log('Your post successfully updated!')
        router.push('/my-posts')
    }
    return (
        <div>
        <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">Edit post</h1>
        <input
            onChange={onChange}
            name="title"
            placeholder="Title"
            value={post.title}
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        /> 
        <input
            onChange={onChange}
            name="category"
            placeholder="Author Category"
            value={post.category}
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        /> 
        {/* <input
            onChange={onChange}
            name="country"
            placeholder="Author country"
            value={post.country}
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        /> 
        <input
            onChange={onChange}
            name="created"
            placeholder="Time created"
            value={post.created}
            className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        />  */}
        <SimpleMDE value={post.content} onChange={value => setPost({ ...post, content: value })} />
        {/* <input
            type="file"
            ref={fileInput}
            className="absolute w-0 h-0"
            onChange={handleChange}
        /> */}
        <button
            className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
            onClick={updateCurrentPost}>Update Post</button>
        </div>
    )
}

export default EditPost 