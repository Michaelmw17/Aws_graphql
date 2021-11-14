import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import "../../configAmplify.js";
import { API, Storage } from "aws-amplify";
import { Auth, Hub } from "aws-amplify";
import { AppProps } from "next/app";
import { listPosts } from "../../graphql/queries";

export default function SideBar() {
  const [open, setOpen] = useState(false);
  const [signedInUser, setSignedInUser] = useState(false);

  useEffect(() => {
    authListener();
    fetchPosts();
  }, []);

  async function authListener() {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signIn":
          return setSignedInUser(true);
        case "signOut":
          return setSignedInUser(false);
      }
    });
    try {
      await Auth.currentAuthenticatedUser();
      setSignedInUser(true);
    } catch (err) {}
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [posts, setPosts] = useState([]);
  const [noOfElement, setnoOfElement] = useState(10);

  const slice = posts.slice(0, noOfElement);

  const loadMore = () => {
    setnoOfElement(noOfElement + 5);
  };

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    const { items } = postData.data.listPosts;
    //  Leaving out Fetch images from S3 for posts that contain a cover image unneeded
    const postsWithImages = await Promise.all(
      items.map(async (post) => {
        if (post.coverImage) {
          post.coverImage = await Storage.get(post.coverImage);
        }
        return post;
      })
    );
    setPosts(postsWithImages);
  }

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography noWrap component={"span"} variant={"h6"}>
            <nav className="p-16 border-b border-gray-300">
              <Link href="/" passHref>
                <span className="mr-6 cursor-pointer">Latest Article Page</span>
              </Link>
              <Link href="/create-post" passHref>
                <span className="mr-6 cursor-pointer">Management Page</span>
              </Link>
              {signedInUser && (
                <Link href="/my-posts" passHref>
                  <span className="mr-6 cursor-pointer">My Article Page</span>
                </Link>
              )}
              <Link href="/profile" passHref>
                <span className="mr-6 cursor-pointer">Profile</span>
              </Link>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div className="fixed top-0 w-full">
          <button
            key="close"
            onClick={handleDrawerClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <ListItemText primary="close" />
          </button>
        </div>
        <h1 className="text-1xl font-semibold  mt-16 mb-16 text-center">
          Article Archives
        </h1>

        {slice
          .sort(({ createdAt: b }, { createdAt: a }) => (a > b ? 1 : -1))
          .map((post, index) => (
            <div key={index}>
              <Link href={`/posts/${post.id}`} passHref>
                <div className="flex items-center">
                  <div className="flex-shrink-0"></div>
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900 text-center border border-gray-300 pt-6	mt-2 mb-2 pb-2 text-center">
                      <div className="text-sm font-semibold text-center pt-6">
                        Title: {post.title}
                      </div>
                      <div className="text-sm font-semibold text-center pt-6">
                        Author: {post.username}
                      </div>
                      <Link href={`/posts/${post.id}`}>
                        <a className="text-sm mr-4 text-blue-500 text-center">
                          View Post
                        </a>
                      </Link>
                      <br />
                      <div className="text-sm text-gray-500 invisible mt-2 mb-0">
                        {post.date}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        <div className="mt-4">
          <button
            onClick={loadMore}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Load More
          </button>
        </div>
      </Drawer>
    </div>
  );
}
