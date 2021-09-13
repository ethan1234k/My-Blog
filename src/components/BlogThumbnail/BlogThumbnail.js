import React, { useEffect, useState } from "react";
import "./BlogThumbnail.css";
import { useDispatch } from "react-redux";
import { Storage } from "aws-amplify";
import { useHistory } from "react-router";

const BlogThumbnail = (props) => {
  let history = useHistory();
  let id = props.id;
  let name = props.name;
  let category = props.category;
  const [image, setImage] = useState(props.image);
  let createdAt = props.createdAt;
  const [dateToDisplay, setDateToDisplay] = useState("");

  useEffect(() => {
    renderImage();
    try {
      determineDisplayDate(createdAt);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    try {
      determineDisplayDate(createdAt);
    } catch (e) {
      console.log(e);
    }
  }, [props.createdAt]);

  const renderImage = async () => {
    if (image) {
      const imageFromStorage = await Storage.get(image);
      setImage(imageFromStorage);
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

  //function that removes any special characters from a string
  function removeSpecialCharacters (title) {
    title = title.replace(/,/g, '')
    title = title.replace(/:/g, '')
    title = title.split('(').join('')
    title = title.split(')').join('')
    title = title.split('!').join('')
    title = title.split('?').join('')
    title = title.split('.').join('')
    return title;
  }

  //Button to delete blog
  {
    /* <h1 onClick={async () => {
      dispatch({ type: "Delete Blog Item", id: id})
      await API.graphql({ query: deleteBlog, variables: { input: { id } } })
    }}>DELETE</h1> */
  }

  return (
    <div
      className="blogItemContainer"
      key={id}
      onClick={() => {
        //Removes special characters and spaces from title, then places it in URL
        let blogTitleWithoutSpecialCharacters = removeSpecialCharacters(name)
        let urlBlogTitleWithoutSpaces = blogTitleWithoutSpecialCharacters.split(' ').join('-')
        console.log(urlBlogTitleWithoutSpaces)
        history.push(`/blog/article/${urlBlogTitleWithoutSpaces}/${id}`);
        window.scroll(0, 0);
      }}
    >
      <img src={image} alt="Blog Main Image" className="blogItemImage" />
      <div className="blogItemTextContainer">
        <h1>{name}</h1>
        <p>
          {dateToDisplay} - {category}
        </p>
      </div>
    </div>
  );
};

export default BlogThumbnail;
