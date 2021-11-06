import { withAuthenticator } from '@aws-amplify/ui-react'
import { useState, useRef } from 'react' // new
import { API, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createPost } from '../graphql/mutations'
import CountrySelect from '../components/Autocomplete'
const initialState = { title: '', content: '', category: '', createdAt: new Date().toISOString() }

function CreatePost() {
  const [post, setPost] = useState(initialState)
  const hiddenFileInput = useRef(null);
  const { title, content, category, createdAt } = post
  const router = useRouter()
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }))
  }
  async function createNewPost() {
    if (!title || !content || !category || !createdAt) return
    const id = uuid() 
    post.id = id
    await API.graphql({
      query: createPost,
      variables: { input: post },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    router.push(`/posts/${id}`)
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Create new post</h1>
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
      {/* <CountrySelect
        onChange={value => setPost({ ...post, country: value })}
        name="country"
        placeholder="Author Country"
        value={post.country}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />  */}
      <input
        onChange={onChange}
        name="createdAt"
        placeholder="Time created"
        value={post.createdAt}
        className="invisible"
      />
      <SimpleMDE value={post.content} onChange={value => setPost({ ...post, content: value })} />
      <button
        type="button"
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >Save Article</button>
    </div>
  )
}

export default withAuthenticator(CreatePost)