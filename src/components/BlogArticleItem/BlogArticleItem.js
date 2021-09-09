import React, { useState, useEffect } from "react";
import "./BlogArticleItem.css";
import { API, Storage } from "aws-amplify";
import BlossomBackground from "../../screens/BlogScreen/BlossomsBackground.jpg";
import { useSelector } from "react-redux";
import { fetchBlogByID } from "../../graphql/queries";

const BlogArticleItem = () => {
  const state = useSelector((state) => state);
  const [blogMainImage, setBlogMainImage] = useState();
  const [testBlog, setTestBlog] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("")
  const [blogArticleDataFetched, setBlogArticleDataFetched] = useState(false);
  let URL = window.location.href;
  let blogID = URL.substring(URL.lastIndexOf("/") + 1);
  let fontFamily = "Lato";

  useEffect(() => {
    fetchBlogs();
  }, []);

  // async function fetchBlogs () {
  //   const apiData = await API.graphql({ query: fetchBlogByID, variables: { id: 1631049214188 }})
  //   console.log(apiData.data.fetchBlogByID.items)
  //   setTestBlog(apiData.data.fetchBlogByID.items[0])
  //   setBlogArticleDataFetched(true)
  // }

  async function fetchBlogs() {
    const apiData = await API.graphql({
      query: fetchBlogByID,
      variables: { id: blogID },
    });
    let blogData = apiData.data.fetchBlogByID.items[0];
    setTestBlog(blogData);
    if (blogData) {
      setBlogArticleDataFetched(true);
      renderImage(blogData.image);
      determineDisplayDate(blogData.createdAt)
    }
  }

  const renderImage = async (image) => {
    if (image) {
      const imageFromStorage = await Storage.get(image);
      setBlogMainImage(imageFromStorage);
    }
  };

  const determineDisplayDate = (createdAt) => {
    let blogCreatedDate = new Date(createdAt);
    let year = blogCreatedDate.getFullYear();
    let monthName = getMonthName(blogCreatedDate.getMonth());
    let day = blogCreatedDate.getDate();
    setDateToDisplay(monthName + " " + day + ", " + year);
  };

  function getMonthName(monthIndex) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[monthIndex];
  }

  return (
    <div>
      <img src={blogMainImage} className="blogArticleMainImage" />
      {blogArticleDataFetched ? (
        <div className="blogArticleContentContainer">
          <h1>{testBlog.name}</h1>
          <p>{dateToDisplay} x {testBlog.category} x Ethan Kam</p>
          <div
            dangerouslySetInnerHTML={{ __html: testBlog.content }}
            className="blogArticleHtmlContentContainer"
          />
        </div>
      ) : null}
      {/* <div className="blogArticleHtmlContentContainer">
        <h1 style={{fontSize: 30, fontFamily: fontFamily, alignSelf: 'center'}}>Insert Clever Title Here</h1>
        <p style={{fontSize: 16, fontFamily: fontFamily, alignSelf: 'center', marginBottom: 40}}>9/7/2021 x Computers x Ethan Kam</p>
        <h2 style={{fontSize: 26, fontFamily: fontFamily, marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: fontFamily, whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
        <h2 style={{fontSize: 26, fontFamily: fontFamily, marginTop: 30, marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: fontFamily, whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
        <h2 style={{fontSize: 26, fontFamily: fontFamily, marginTop: 30, marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: fontFamily, whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'}{'\n'}Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
      </div> */}
    </div>
  );
};

export default BlogArticleItem;
