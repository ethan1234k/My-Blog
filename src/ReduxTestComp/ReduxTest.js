import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API } from "aws-amplify";
import { listBlogs } from "../graphql/queries";
import { createBlog } from "../graphql/mutations";

const ReduxTest = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const apiData = await API.graphql({ query: listBlogs });
    setBlogs(apiData.data.listBlogs.items);
    console.log(apiData.data.listBlogs.items);
  }

  const blogExample = { name: "Testing", content: "Hello World" };

  const addListingItem = async () => {
    await API.graphql({ query: createBlog, variables: { input: blogExample } })
      .then(() => console.log("Worked?"))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "Add Listing" });
          addListingItem();
        }}
      >
        Add Listing
      </button>
      <button onClick={() => dispatch({ type: "Delete Listing" })}>
        Delete Listing
      </button>
      <div>
        {blogs.map((blog) => (
          <div>
            <p>{blog.id}</p>
            <p>{blog.name}</p>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReduxTest;
