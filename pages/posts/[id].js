import { API, Storage } from 'aws-amplify'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import { listPosts, getPost } from '../../graphql/queries'

export default function Post({ post }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div>
        <h1 className="text-5xl mt-4 font-semibold tracking-wide mt-36 text-center">Title: {post.title}</h1>
        <h4 className="text-3xl mt-4 font-semibold tracking-wide text-center">Category: {post.category}</h4>
        <p className="text-1xl mt-4 font-semibold tracking-wide text-center">Selected Category Name: {post.select }</p>
        <div className="m-8 text-center">
            Content: <ReactMarkdown className='prose text-center' children={post.content} />
        </div>
        <time dateTime={post.createdAt} className="invisible">
                Blog gerenated date created at: {new Date(post.createdAt).toDateString()}</time>
                <br/>
        <time dateTime={post.date} className="text-center">
        User date created at: {new Date(post.date).toDateString()}</time>
        <p className="text-1xl mt-4 font-semibold tracking-wide">Author's Country: {post.countries }</p>
        <p className="text-sm font-semibold my-4">Author:  {post.username}</p>
        </div>
    )
    }

    export async function getStaticPaths() {
    const postData = await API.graphql({
        query: listPosts
    })
    const paths = postData.data.listPosts.items.map(post => ({ params: { id: post.id }}))
    return {
        paths,
        fallback: true
    }
    }

    export async function getStaticProps ({ params }) {
    const { id } = params
    const postData = await API.graphql({
        query: getPost, variables: { id }
    })
    return {
        props: {
            post: postData.data.getPost
        },
        revalidate: 60
    }
}