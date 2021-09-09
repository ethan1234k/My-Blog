import React, { useEffect, useState } from "react";
import "./BlogScreen.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import BlogDisplayRow from "../../components/BlogDisplayRow/BlogDisplayRow";
import WhaleBackground from "./WhaleBackground.jpg";
import { API } from "aws-amplify";
import { listBlogsWithThumbnailContentOnly } from "../../graphql/custom-queries";


const BlogScreen = () => {
  const state = useSelector((state) => state);
  const [blogs, setBlogs] = useState([]);
  const [blogDisplay2DArray, setBlogDisplay2DArray] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [])

  async function fetchBlogs() {
    const apiData = await API.graphql({
      query: listBlogsWithThumbnailContentOnly,
      variables: { type: "Blog", sortDirection: "ASC" },
    }).catch((e) => console.log(e));
    console.log(apiData.data.blogsByDate.items)
    let tempArray = splitArray(apiData.data.blogsByDate.items, 3);
    setBlogDisplay2DArray(tempArray);
  }

  //Listens for updates in the blogsArray from redux store
  // useEffect(() => {
  //   let tempArray = splitArray(state.blogsArray, 3);
  //   setBlogDisplay2DArray(tempArray);
  // }, [state.blogsArray]);

  //Turns an array into a 2D array with part being the length of the x dimension array
  function splitArray(array, part) {
    var tmp = [];
    for (let i = 0; i < array.length; i += part) {
      tmp.push(array.slice(i, i + part));
    }
    return tmp;
  }

  //Button that can add a new blog
  {
    /* <button
        onClick={() => {
          // dispatch({ type: "Set Blog Array" , array: "Testing Title" });
          setAddBlogModalOpen(true);
          setAddBlogModalRefresh(!addBlogModalRefresh);
        }}
      >
        Add Listing
      </button> */
  }
  //Button that can add a new blog

  return (
    <div className="blogScreenContainer">
      <Header />
      <img src={WhaleBackground} className="blogScreenBackgroundImage" />
      <div className="blogScreenTitle">
        <h1>College, Computers, and Chow Blog</h1>
        <h2>Whale? Start Reading Already</h2>
      </div>
      <div>
        {blogDisplay2DArray.map((blogArray) => (
          <BlogDisplayRow
            array={blogArray}
            key={blogArray[0].id}
            test={blogArray[0].id}
          />
        ))}
      </div>
      <div className="blogScreenPageScroll">
        <p>Page 1 of 1</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogScreen;
