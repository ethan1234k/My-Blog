import React, { useState, useEffect } from "react";
import "./BlogArticleItem.css";
import { API } from "aws-amplify";
import BlossomBackground from "../../screens/BlogScreen/BlossomsBackground.jpg";
import { useSelector } from "react-redux";
import { fetchBlogByID } from '../../graphql/queries';

const BlogArticleItem = () => {
  const state = useSelector((state) => state);
  const [blogs, setBlogs] = useState();
  const [testBlog, setTestBlog] = useState();
  const [blogArticleDataFetched, setBlogArticleDataFetched] = useState(false);

  // useEffect(() => {
  //   fetchBlogs()
  // }, []);

  // async function fetchBlogs () {
  //   const apiData = await API.graphql({ query: fetchBlogByID, variables: { id: 1631049214188 }})
  //   console.log(apiData.data.fetchBlogByID.items)
  //   setTestBlog(apiData.data.fetchBlogByID.items[0])
  //   setBlogArticleDataFetched(true)
  // }

  useEffect(() => {
    setBlogs(state.blogsAray);
    setTestBlog(state.blogsArray[0]);
    if (state.blogsArray[0] != null && state.blogsArray[0] != undefined) {
        setBlogArticleDataFetched(true)
    }
  }, [state.blogsArray]);

  return (
    <div>
      <img src={BlossomBackground} className="blogArticleMainImage" />
      {/* {blogArticleDataFetched ? (
        <div dangerouslySetInnerHTML={{ __html: testBlog.content }} className="blogArticleHtmlContentContainer"/>
      ) : null} */}
      <div className="blogArticleHtmlContentContainer">
        <h1 style={{fontSize: 30, fontFamily: 'Lato', alignSelf: 'center'}}>Insert Clever Title Here</h1>
        <p style={{fontSize: 16, fontFamily: 'Lato', alignSelf: 'center', marginBottom: 40}}>9/7/2021 x Computers x Ethan Kam</p>
        <h2 style={{fontSize: 26, fontFamily: 'Lato', marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: 'Lato', whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
        <h2 style={{fontSize: 26, fontFamily: 'Lato', marginTop: 30, marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: 'Lato', whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
        <h2 style={{fontSize: 26, fontFamily: 'Lato', marginTop: 30, marginBottom: 10}}>How I created my own blog using React, Redux, and AWS Amplify</h2>
        <p style={{fontSize: 20, fontFamily: 'Lato', whiteSpace: 'pre-line'}}>Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'}{'\n'}Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?{'\n'} {'\n'} Paragraph content random words I like to talke about random stuff what about you? Paragraph content random words I like to talke about random stuff what about you?</p>
      </div>
    </div>
  );
};

export default BlogArticleItem;
