import React, { useState, useEffect } from "react";
import "./BlogArticleItem.css";
import { API, Storage } from "aws-amplify";
import { useSelector } from "react-redux";
import { fetchBlogArticleContentByID } from "../../graphql/custom-queries";

const BlogArticleItem = () => {
  const [blogMainImage, setBlogMainImage] = useState();
  const [testBlog, setTestBlog] = useState();
  const [dateToDisplay, setDateToDisplay] = useState("");
  const [blogArticleDataFetched, setBlogArticleDataFetched] = useState(false);
  let URL = window.location.href;
  let blogID = URL.substring(URL.lastIndexOf("/") + 1);
  let fontFamily = "Lato";

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    const apiData = await API.graphql({
      query: fetchBlogArticleContentByID,
      variables: { id: blogID },
    });
    let blogData = apiData.data.fetchBlogByID.items[0];
    setTestBlog(blogData);
    if (blogData) {
      setBlogArticleDataFetched(true);
      renderMainBlogImage(blogData.image);
      renderEmbeddedImages(blogData.embeddedImages);
      determineDisplayDate(blogData.createdAt);
      console.log(blogData.content)
    }
  }

  const renderMainBlogImage = async (image) => {
    if (image) {
      const imageFromStorage = await Storage.get(image);
      setBlogMainImage(imageFromStorage);
    }
  };

  const renderEmbeddedImages = async (embeddedImagesArray) => {
    console.log(embeddedImagesArray)
    if (embeddedImagesArray.length > 0) {
      for (let i = 0; i < embeddedImagesArray.length; i++) {
        console.log(embeddedImagesArray[i])
        const imageFromStorage = await Storage.get(embeddedImagesArray[i]);
        try {
          let embeddedImageName = 'embeddedImage' + (i + 1)
          console.log(embeddedImageName)
          document.getElementById(embeddedImageName).src = imageFromStorage;
          document.getElementById(embeddedImageName).alt = "Can't Load Image";
        } catch (e) {
          console.log(e);
        }
      }
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
          <p>
            {dateToDisplay} x {testBlog.category} x Ethan Kam
          </p>
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
