import React, { useState, useEffect } from "react";
import "./AddBlogModal.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { API, Storage } from "aws-amplify";
import { createBlog } from "../../graphql/mutations";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

const AddBlogModal = (props) => {
  const [addBlogModalOpen, setAddBlogModalOpen] = useState(props.open);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [blogMainImageMediaFile, setBlogMainImageMediaFile] = useState();
  const [blogEmbeddedImagesArray, setBlogEmbeddedImagesArray] = useState([]);
  const [blogEmbeddedImageNamesArray, setBlogEmbeddedImageNamesArray] =
    useState([]);

  useEffect(() => {
    setAddBlogModalOpen(props.open);
  }, [props.refresh]);

  const handleBlogMainImageFileUpload = (e) => {
    if (!e.target.files[0]) return;
    setBlogMainImageMediaFile(e.target.files[0]);
  };

  const handleBlogEmbeddedImageUpload = (e) => {
    if (!e.target.files[0]) return;
    setBlogEmbeddedImagesArray([...blogEmbeddedImagesArray, e.target.files[0]]);
    setBlogEmbeddedImageNamesArray([
      ...blogEmbeddedImageNamesArray,
      e.target.files[0].name,
    ]);
  };

  const addBlogItemToDB = async () => {
    const blogExample = {
      id: new Date().getTime(),
      type: "Blog",
      name: title,
      category: category,
      production: "Testing",
      content: content,
      embeddedImages: blogEmbeddedImageNamesArray,
      image: blogMainImageMediaFile.name,
    };
    await Storage.put(blogMainImageMediaFile.name, blogMainImageMediaFile)
      .then(() => {
        console.log("Storage Upload Worked");
      })
      .catch((e) => {
        console.log(e);
      });
    blogEmbeddedImagesArray.forEach(async (imageFile) => {
      await Storage.put(imageFile.name, imageFile)
        .then(() => {
          console.log("Storage Upload Worked");
        })
        .catch((e) => {
          console.log(e);
        });
    });
    await API.graphql({ query: createBlog, variables: { input: blogExample } })
      .then(() => {
        console.log("Database Upload Worked");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Modal
      isOpen={addBlogModalOpen}
      onRequestClose={() => setAddBlogModalOpen(false)}
      className="addBlogModal"
      appElement={document.getElementById("root") || undefined}
    >
      <div className="addBlogModalContainer">
        <div className="addBlogModalHeader">
          <h1 style={{ color: "transparent" }}>i</h1>
          <p>Add Blog</p>
          <MdClose onClick={() => setAddBlogModalOpen(false)} size={25} />
        </div>
        <div className="addBlogModalInputsContainer">
          <p>Title (Title of Blog)</p>
          <input onChange={(text) => setTitle(text.target.value)} />
          <p>Category (College, Computers, or Chow)</p>
          <input onChange={(text) => setCategory(text.target.value)} />
          <p>Content (H2 - Header, H3 - Subheader, P2 - Regular Text)</p>
          <textarea
            rows={35}
            onChange={(text) => setContent(text.target.value)}
          />
          <p>Add Blog Main Image</p>
          <input
            type="file"
            className="blogFileUpload"
            accept="image/*"
            onChange={(e) => handleBlogMainImageFileUpload(e)}
          />
          <p>Add Embedded Blog Images</p>
          <input
            type="file"
            className="blogFileUpload"
            accept="image/*"
            onChange={(e) => handleBlogEmbeddedImageUpload(e)}
          />
          <div className="embeddedImagesContainer">
            {blogEmbeddedImageNamesArray.map((imageFile) => (
              <p>{imageFile}</p>
            ))}
          </div>
          <button
            className="addBlogButton"
            onClick={async () => {
              addBlogItemToDB();
              setAddBlogModalOpen(false);
            }}
          >
            Add Blog
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default withAuthenticator(AddBlogModal);
