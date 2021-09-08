import React from "react";
import "./BlogDisplayRow.css";
import BlogThumbnail from "../BlogThumbnail/BlogThumbnail";

const BlogDisplayRow = (props) => {
  let threeBlogArray = props.array;
  return (
    <div className="blogRowContainer">
      {threeBlogArray.map((blog) => (
        <div key={blog.id}>
          <BlogThumbnail
            key={blog.id}
            id={blog.id}
            name={blog.name}
            content={blog.content}
            image={blog.image}
            createdAt={blog.createdAt}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogDisplayRow;
