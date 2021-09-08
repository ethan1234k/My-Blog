import React, { useEffect, useState } from "react";
import "./BlogThumbnail.css";
import { useDispatch } from "react-redux";
import { API, Storage } from "aws-amplify";
import { deleteBlog } from "../../graphql/mutations";

const BlogThumbnail = (props) => {
  const dispatch = useDispatch();
  let id = props.id;
  let name = props.name;
  let content = props.content;
  const [image, setImage] = useState(props.image);
  let createdAt = props.createdAt;
  const [dateToDisplay, setDateToDisplay] = useState("")

  useEffect(() => {
    renderImage();
    try {
        determineDisplayDate(createdAt.substring(0, 10));
    } catch (e) {
        console.log(e)
    }
  }, []);

  useEffect(() => {
    try {
        determineDisplayDate(createdAt.substring(0, 10));
    } catch (e) {
        console.log(e)
    }
  }, [props.createdAt]);

  const renderImage = async () => {
    if (image) {
      const imageFromStorage = await Storage.get(image);
      setImage(imageFromStorage);
    }
  };

  const determineDisplayDate = (MYDString) => {
    let year = MYDString.substring(0, 4);
    let monthNum = MYDString.substring(5, 7);
    let monthName = getMonthName(monthNum)

    let day = MYDString.substring(8, 10);
    if (day.charAt(0) === '0') {
        day = day.substring(1)
    }
    setDateToDisplay(monthName + " " + day + ", " + year);
  };

  function getMonthName(monthIndex) {
    monthIndex = parseInt(monthIndex, 10) - 1
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
    return (monthNames[monthIndex])
  }

  return (
    <div className="blogItemContainer" key={id}>
      <img src={image} alt="Can't load image" className="blogItemImage" />
      {/* <h1 onClick={async () => {
                dispatch({ type: "Delete Blog Item", id: id})
                await API.graphql({ query: deleteBlog, variables: { input: { id } } })
            }}>DELETE</h1> */}
      <div className="blogItemTextContainer">
        <h1>{name}</h1>
        <p>{dateToDisplay}</p>
      </div>
      {/* <p>{content}</p> */}
    </div>
  );
};

export default BlogThumbnail;
