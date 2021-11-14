import { useEffect, useState, useRef } from "react";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { v4 as uuid } from "uuid";
import { updatePost } from "../../graphql/mutations";
import { getPost } from "../../graphql/queries";
import MySelect from "../../components/Autocomplete";

function EditPost() {
  const [post, setPost] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const fileInput = useRef(null);

  useEffect(() => {
    fetchPost();
    async function fetchPost() {
      if (!id) return;
      const postData = await API.graphql({ query: getPost, variables: { id } });
      console.log("postData: ", postData);
      setPost(postData.data.getPost);
    }
  }, [id]);
  if (!post) return null;
  function onChange(e) {
    setPost(() => ({ ...post, [e.target.name]: e.target.value }));
  }
  const { title, content, category, createdAt } = post;
  async function updateCurrentPost() {
    if (!title || !content || !category || !createdAt) return;
    const postUpdated = {
      id,
      content,
      title,
      category,
      createdAt,
    };
    await API.graphql({
      query: updatePost,
      variables: { input: postUpdated },
      authMode: "AMAZON_COGNITO_USER_POOLS",
    });
    console.log("Your post successfully updated!");
    router.push("/my-posts");
  }
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-wide mt-6 mb-2">
        Edit post
      </h1>
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
      <div className="mt-2 mb-2">
        <MySelect
          options={options}
          name="countries"
          onChange={(onChange) =>
            setPost({ ...post, countries: onChange.value })
          }
          value={post.countries}
          className="m-6"
          placeholder="Countries Select..."
        />
      </div>
      <div className="mt-2 mb-2">
        <MySelect
          options={selectCategoryOptions}
          name="select"
          onChange={(onChange) => setPost({ ...post, select: onChange })}
          value={post.select}
          className="m-6"
          placeholder="Category Select..."
        />
      </div>
      {/* <div>label: {post.countries ? countries.label : ""}</div> */}
      <SimpleMDE
        value={post.content}
        onChange={(value) => setPost({ ...post, content: value })}
      />

      <button
        className="mb-4 bg-blue-600 text-white font-semibold px-8 py-2 rounded-lg"
        onClick={updateCurrentPost}
      >
        Update Post
      </button>
    </div>
  );
}
const options = [
  {
    label: "Australia",
  },
  {
    label: "New Zealand",
  },
  {
    label: "USA",
  },
  {
    label: "Italy",
  },
];
const selectCategoryOptions = [
  {
    label: "Sport",
  },
  {
    label: "News",
  },
  {
    label: "Weather",
  },
  {
    label: "Other",
  },
];

export default EditPost;
