import React  from "react";
import ReactCardFlipper from "./ReactFlipper.tsx";
import injectSheet from "react-jss";
import {  Grid, withStyles } from "@material-ui/core";
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { API, Storage, Auth } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'
import { postsByUsername } from '../../graphql/queries'
import { deletePost as deletePostMutation } from '../../graphql/mutations'
import MySelect from '../../components/Autocomplete'

const initialState = { title: '', content: '', category: '', createdAt: new Date().toISOString() }


const TestApp = ({ classes }) => {

    const [posts, setPosts] = useState([])
    const [post, setPost, state] = useState(initialState)
    const { title, content, category, createdAt } = post
    const [noOfElement, setnoOfElement] = useState(5)

    const slice = posts.slice(0, noOfElement)

    const loadMore = () => {
    setnoOfElement(noOfElement + noOfElement)
    }

    useEffect(() => {
    fetchPosts()
    }, [])
    async function fetchPosts() {
    const postData = await API.graphql({
        query: listPosts
    })
    const { items } = postData.data.listPosts
    //  Leaving out Fetch images from S3 for posts that contain a cover image unneeded
    const postsWithImages = await Promise.all(items.map(async post => {
        if (post.coverImage) {
        post.coverImage = await Storage.get(post.coverImage)
        }
        return post
    }))
    setPosts(postsWithImages)
    }
    const [on, setOn] = useState(false);

    const handleOn = () => {
    setOn(!on);
    };

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
        <>
        {slice.map((post, index) => (  
            <Link key={index} href={`/posts/${post.id}`} passHref>  
                <div className={classes.root}>
                    <ReactCardFlipper
                        width="300px"
                        height="300px"
                        behavior="hover"
                        className={classes.root}
                        innerCardClass={classes.card}
                        >
                            <div className={classes.front}>
                                <div className={classes.frontContent}>
                                    <h2 className="text-xl font-semibold  mt-2 text-center ">Title: {post.title}</h2>
                                    <div key={index} className="border-b border-gray-300	mt-8 pb-4 text-center">
                                        <p className="text-xl font-semibold  mt-2">Category: {post.category}</p>
                                            <p className="text-1xl mt-4 font-semibold tracking-wide mt-6 mb-6">Selected Category Name:  {post.select}</p>
                                        <div className='fixed bottom-0 w-full mb-2 mr-8'>
                                        <p className="text-gray-500  font-semibold mt-2">Author Name: {post.username}</p>
                                        <p className="text-l font-semibold">Author&apos;s  Country: {post.countries}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.back}>
                                <div className={classes.backContent}>
                                    <h2 className="text-xl font-semibold  mt-2 text-center text-center">Title: {post.title}</h2>
                                    <p className="text-1xl mt-4 font-semibold tracking-wide text-center">Selected Category Name:  {post.select}</p>
                                    <p className="text-1xl mt-4 font-semibold tracking-wide text-center">Category: {post.category}</p>
                                        <div className='fixed bottom-0 w-ful text-center mb-2 ml-4'>
                                        <p className="text-gray-500  font-semibold mt-2">Author Name: {post.username}</p>
                                        <p className="text-l font-semibold">Author&apos;s  Country: {post.countries}</p>
                                        <time dateTime={post.createdAt} className="invisible">
                                        Blog gerenated date created at: <br/>{new Date(post.createdAt).toDateString()}+
                                        </time>
                                        <br/>
                                        <time dateTime={post.date}>
                                        User date created at: <br/>{new Date(post.date).toDateString()}
                                        </time>
                                        
                                                <br/>
                                    <Link href={`/edit-post/${post.id}`}><a className="text-sm mr-4 text-blue-500">Edit Post</a></Link>
                                    <Link href={`/posts/${post.id}`}><a className="text-sm mr-4 text-blue-500">View Post</a></Link>
                                    <button
                                        className="text-sm mr-4 text-red-500 bm-4"
                                        onClick={() => deletePost(post.id)}
                                    >Delete Post</button>
                                    </div>
                                </div>
                            </div>
                        </ReactCardFlipper>
                    </div>
                </Link>
                )
            )
        }
        <div className="fixed bottom-0 w-full" >
            <button onClick={loadMore} 
            className="button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Load More
            </button>
        </div>
    </>
    )
}


const styling = {
    root: {
    display: "block",
    margin: "50px",

    position: "relative"
    },
    card: {
    border: "1px solid #ccc",
    borderRadius: "29px",
    padding: "10px",
    marginBottom: "50px",
        
    background:'RGB(180, 239, 85)',
    '-webkit-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
    '-moz-box-shadow': "0 7px 8px rgba(0, 0, 0, 0.12)",
    'box-shadow':" 0 7px 8px rgba(0, 0, 0, 0.12)",
    color: "black",
    }
    };
    const styles = {
    root:{

    },
    container: {
    marginRight: "auto",
    marginLeft: "auto",
    transition: '.5s all ease',
    transform: 'rotateX(10deg) scale(1)',
    perspective: '900px',

    },
};

const StyledApp = injectSheet(styling)(TestApp);

export default withStyles(styles)(StyledApp);