import { withAuthenticator } from '@aws-amplify/ui-react'
import { useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createPost } from '../graphql/mutations'
import MySelect from '../components/Autocomplete'

const initialState = { 
  title: '', 
  content: '', 
  category: '', 
  countries: '', 
  createdAt: new Date().toISOString()
  }

function CreatePost() {
  const [post, setPost, state] = useState(initialState)
  const hiddenFileInput = useRef(null);
  const { title, content, category, countries, createdAt } = post

  const router = useRouter()
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }))
  }
  // console.log('setPost', post.countries ? countries.label : "")
  async function createNewPost() {
    if ( !title || !content || !category || !countries || !createdAt ) return
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
      <h1 className="text-3xl font-semibold tracking-wide mt-6">Create New Article</h1>
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
      <input
        onChange={onChange}
        name="createdAt"
        placeholder="Time created"
        value={post.createdAt}
        className="invisible"
        
      />
      <MySelect
          options={options}
          name="countries"
          onChange={onChange => setPost({ ...post, countries: onChange })}
          value= {post.countries}
          className="m-8"
        />
        {/* <div>label: {post.countries ? countries.label : ""}</div> */}
      <SimpleMDE 
          className="mt-8" 
          value={post.content} 
          onChange={value => setPost({ ...post, content: value })} />
      <button
        type="button"
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >Save Article</button>
    </div>
  )
}
const options  = [
  {
    label: "Australia"
  },
  {
    label: "New Zealand"
  },
  {
    label: "USA"
  },
  {
    label: "Italy"
  }
];

export default withAuthenticator(CreatePost)