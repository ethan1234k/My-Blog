import React, { useState, useEffect } from "react";
import "./HomeScreen.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SeniorPhoto from "./SeniorPhoto.jpg";
import { useHistory } from "react-router";
import BlogThumbnail from "../../components/BlogThumbnail/BlogThumbnail";
import { useSelector } from "react-redux";
import { API } from "aws-amplify";
import { listBlogsWithThumbnailContentOnly } from "../../graphql/custom-queries";

const HomeScreen = () => {
  let history = useHistory();
  const state = useSelector((state) => state);
  const [blogs, setBlogs] = useState([]);
  const [latestBlog, setLatestBlog] = useState();
  const [secondLatestBlog, setSecondLatestBlog] = useState();
  const [blogDataFetched, setBlogDataFetched] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const apiData = await API.graphql({
      query: listBlogsWithThumbnailContentOnly,
      variables: { type: "Blog", limit: 2, sortDirection: "DESC" },
    }).catch((e) => console.log(e));
    let latestTwoBlogsArray = apiData.data.blogsByDate.items;
    setLatestBlog(latestTwoBlogsArray[0]);
    setSecondLatestBlog(latestTwoBlogsArray[1]);
    if (
      latestTwoBlogsArray[0] != undefined &&
      latestTwoBlogsArray[0] != null &&
      latestTwoBlogsArray[1] != undefined &&
      latestTwoBlogsArray[1] != null
    ) {
      setBlogDataFetched(true);
    }
  }

  // useEffect(() => {
  //   console.log(state.blogsArray);
  //   setBlogs(state.blogsArray);
  //   setLatestBlog(state.blogsArray[0]);
  //   setSecondLatestBlog(state.blogsArray[1]);
  //   if (
  //     state.blogsArray[0] != undefined &&
  //     state.blogsArray[0] != null &&
  //     state.blogsArray[1] != undefined &&
  //     state.blogsArray[1] != null
  //   ) {
  //     setBlogDataFetched(true);
  //   }
  //   console.log(state.blogsArray[state.blogsArray.length - 1]);
  // }, [state.blogsArray]);

  return (
    <div>
      <Header />
      <div className="homeMainContentContainer">
        <h1>
          Snapshots of a college student exploring the meaning of life, what to
          eat for breakfast, and other deep topics.
        </h1>
        <h2 onClick={() => history.push("/blog")}>Read the Blog</h2>
      </div>
      <div className="homeMainBackgroundImage"></div>
      <div className="homeFeedContent">
        <h1>Welcome to College, Computers, and Chow!</h1>
        <div className="homeFeedAboutSection">
          <div className="homeFeedAboutLeftContent">
            <h1>Hey, I'm Ethan</h1>
            <p>I'm 6'4 and extremely buff (just kidding).</p>
            <p>
              In seriousness, I'd say I'm a fairly average college freshman. I
              go to the University of Washington, and am studying Computer
              Science. And as you might have surmised from the title, I love
              food (then again who doesn't).
            </p>
            <p>A couple facts about me:</p>
            <p>
              * For the longest time, I was convinced my mom found and adopted
              me from a trash can.
            </p>
            <p>
              * I won my high school football team's Egg Toss Challenge all 3
              years (Olympic Sport!??).
            </p>
          </div>
          <div className="homeFeedAboutRightContent">
            <img src={SeniorPhoto} />
            {/* <h1>Learn more in the about section</h1> */}
          </div>
        </div>
        <h2>Latest Blogs</h2>
        <p onClick={() => history.push("/blog")}>Read all our blogs :)</p>
        <div className="homeFeedBlogSection">
          <div>
            {blogDataFetched ? (
              <BlogThumbnail
                key={latestBlog.id}
                id={latestBlog.id}
                name={latestBlog.name}
                category={latestBlog.category}
                image={latestBlog.image}
                createdAt={latestBlog.createdAt}
              />
            ) : (
              <h1>Loading</h1>
            )}
          </div>
          <div>
            {blogDataFetched ? (
              <BlogThumbnail
                key={secondLatestBlog.id}
                id={secondLatestBlog.id}
                name={secondLatestBlog.name}
                category={secondLatestBlog.category}
                image={secondLatestBlog.image}
                createdAt={secondLatestBlog.createdAt}
              />
            ) : (
              <h1>Loading</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
