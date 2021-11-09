import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Storage } from 'aws-amplify'
import { listPosts } from '../graphql/queries'
// import Date from '../components/Date';
export default function Home() {
  const [posts, setPosts] = useState([])
  const [noOfElement, setnoOfElement] = useState(10)

  const slice = posts.slice(0, noOfElement)

  const loadMore = () => {
    setnoOfElement(noOfElement + 5)
  }

  useEffect(() => {
    fetchPosts()
  }, [])
  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts
    })
    const { items } = postData.data.listPosts
    //  Fetch images from S3 for posts that contain a cover image unneeded
    const postsWithImages = await Promise.all(items.map(async post => {
      if (post.coverImage) {
        post.coverImage = await Storage.get(post.coverImage)
      }
      return post
    }))
    setPosts(postsWithImages)
  }

  return (<>
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-8">Latest Article Page</h1>
      {
        slice.map((post, index) => (
        <Link key={index} href={`/posts/${post.id}`}>
          <div className="my-6 pb-6 border-b border-gray-300	">
            <div className="cursor-pointer mt-2">
              <p className="text-gray-500  font-semibold mt-2">Author: {post.username}</p>
              <p className="text-l font-semibold">Author's  Country: {post.countries}</p>
              <h2 className="text-xl font-semibold  mt-2">Title: {post.title}</h2>
              <p className="text-xl font-semibold  mt-2 mb-2">Category: {post.category}</p>
              <p className="text-1xl mt-2 font-semibold tracking-wide">Selected Blog Category:  {post.select}</p>
              <time dateTime={post.createdAt}>
                Blog gerenated date created at: {new Date(post.createdAt).toDateString()}</time>
                <br/>
                <time dateTime={post.date}>
                User date created at: {new Date(post.date).toDateString()}</time>
            <br/>
            <Link href={`/posts/${post.id}`}><a className="text-sm mr-4 text-blue-500">View Post</a></Link>
            </div>
          </div>
        </Link>)
        )
      }
      <button type="button" 
        onClick={() => loadMore()}
        >
        Load more posts
        </button>
    </div>
    </>
  )
}