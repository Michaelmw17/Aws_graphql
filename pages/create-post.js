import { withAuthenticator } from '@aws-amplify/ui-react'
import { useState, useRef } from 'react'
import { API, Storage } from 'aws-amplify'
import { v4 as uuid } from 'uuid'
import { useRouter } from 'next/router'
import SimpleMDE from "react-simplemde-editor"
import "easymde/dist/easymde.min.css"
import { createPost } from '../graphql/mutations'
import MySelect from '../components/Autocomplete'
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const initialState = { title: '', content: '', category: '', countries: '', select: '', date: '', createdAt: new Date().toISOString()}

function CreatePost() {
  const [startDate, setStartDate] = useState(new Date());

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const [post, setPost, state] = useState(initialState)
  const hiddenFileInput = useRef(null);
  const { title, content, category, countries, select, date,  createdAt } = post

  const router = useRouter()
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }))
  }
  
  console.log('setPost', post.countries ? countries.label : "")
  async function createNewPost() {
    if ( !title || !content || !category || !countries || !select || !date ||  !createdAt ) return
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
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="false"
      noValidate>
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-36">Create New Article</h1>
      <p className="mt-6">Enter Title: </p>
      <input
        aria-invalid={errors.title ? "true" : "false"}
        {...register('title', { required: true })}
        onChange={onChange}
        name="title"
        placeholder="Title"
        value={post.title}
        className="border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
        
      />
      {errors.title && (
        <span role="alert" className="mb-4 mt-4 alert">
          This field is required
        </span>
      )}
      <p>Enter Category: </p>
      <input
        aria-invalid={errors.category ? "true" : "false"}
        {...register('category', { required: true })}
        onChange={onChange}
        name="category"
        placeholder="Author Category"
        value={post.category}
        className="mb-4 mt-4 border-b pb-2 text-lg my-4 focus:outline-none w-full font-light text-gray-500 placeholder-gray-500 y-2"
      />
      {errors.category && (
        <span role="alert" className=" alert">
          This field is required
        </span>
      )}
      <p  className="mb-2 mt-2" >Select Created Date: </p>
      <DatePicker
        aria-invalid={errors.date ? "true" : "false"}
        {...register('date', { required: true })}
        selected={post.date}
        onChange={(date) => setPost({...post, date})}
        name="date"
        placeholder="Created date" autoComplete="true"
        className="visible focus:outline-black outline-black"
        
      />
      {errors.date && (
        <span role="alert" className="mb-12 mt-12 alert">
          This field is required
        </span>
      )}
      <div className="mb-2 mt-2">
      <p>Select Author&apos;s Country:</p>
      <MySelect
        aria-invalid={errors.countries ? "true" : "false"}
          {...register('countries', { required: true })}
          options={options}
          name="countries"
          onChange={onChange => setPost({ ...post, countries: onChange.value })}
          value= {post.countries}
          className="m-6"
          placeholder="Countries Select..."
        />
        </div>
        <div className="ml-6 alert">
      {errors.countries && (
        <span role="alert" className="mb-12 mt-12 alert">
          This field is required
        </span>
      )}
      </div>
      <div className="mb-2 mt-2">
      <p>Select Blog&apos;s Category</p>
      <MySelect
        aria-invalid={errors.select ? "true" : "false"}
          {...register('select', { required: true })}
          options={selectCategoryOptions}
          name="select"
          onChange={onChange => setPost({ ...post, select: onChange.label})}
          value= {post.select}
          className="m-6"
          placeholder="select Select..."
        />
        </div>
        <div className="ml-6 alert">
      {errors.select && (
        <span role="alert" className="mb-12 mt-12 alert">
          This field is required
        </span>
      )}
      </div>
      <div className="mb-2 mt-2">
      </div>
        <p className="mt-8" >Enter Blog Content: </p>
      <SimpleMDE 
          aria-invalid={errors.content ? "true" : "false"}
            {...register('content', { required: true })}
          value={post.content} 
          onChange={value => setPost({ ...post, content: value })} 
          />
      {errors.content && (
        <span role="alert"  className="mb-4 mt-4 alert">
          This field is required
            <br/>
            <p className="alert font-semibold"> 
          Please check all fields are filled in  & wait 3 seconds before refreshing the page
          </p> 
          </span>
      )}
      <input
        onChange={onChange}
        name="createdAt"
        placeholder="Time created"
        value={post.createdAt}
        className="invisible"
        
      />
      <br/>
      
      <button
        type="submit"
        className="mb-4 mt-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={createNewPost}
      >Save Article</button>
    </div>
    </form>
  )
}
const selectCategoryOptions  = [
  {
    label: "Sport"
  },
  {
    label: "News"
  },
  {
    label: "Weather"
  },
  {
    label: "Other"
  }
];
const options = [
  { label: 'Africa', value: 'Africa' },
  { label: 'USA', value: 'USA' },
  { label: 'Asia', value: 'Asia' },
  { label: 'Europe', value: 'Europe' },
  { label: 'Oceania', value: 'Oceania' },
]

export default withAuthenticator(CreatePost)