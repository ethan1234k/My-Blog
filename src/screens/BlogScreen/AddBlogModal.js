import React, { useState, useEffect } from "react";
import "./AddBlogModal.css";
import Modal from "react-modal";
import { MdClose } from "react-icons/md";
import { API, Storage } from "aws-amplify";
import { useSelector, useDispatch } from "react-redux";
import {createBlog} from '../../graphql/mutations';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

const AddBlogModal = (props) => {
  const dispatch = useDispatch();
  const [addBlogModalOpen, setAddBlogModalOpen] = useState(props.open);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mediaFile, setMediaFile] = useState();

  useEffect(() => {
    setAddBlogModalOpen(props.open);
  }, [props.refresh]);

  const handleFileUpload = (e) => {
    if (!e.target.files[0]) return;
    setMediaFile(e.target.files[0]);

    // setMediaFile(e.target.files[0]);
    // setFormData({ ...formData, image: file.name });
    // await Storage.put(file.name, file);
    // fetchNotes();
  };

  const addBlogItemToDB = async () => {
    const blogExample = {
      id: new Date().getTime(),
      type: "Blog",
      name: title,
      content: content,
      image: mediaFile.name,
    };
    dispatch({ type: "Add Blog To Array", blog: blogExample });
    await Storage.put(mediaFile.name, mediaFile)
    .then(() => {console.log('Storage Upload Worked')})
    .catch((e) => {
        console.log(e);
      });
    await API.graphql({ query: createBlog, variables: { input: blogExample } })
    .then(() => {console.log('Database Upload Worked')})
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
          <p>Title</p>
          <input onChange={(text) => setTitle(text.target.value)} />
          <p>Content</p>
          <textarea
            rows={35}
            onChange={(text) => setContent(text.target.value)}
          />
          <input
            type="file"
            className="blogFileUpload"
            accept="image/*"
            onChange={(e) => handleFileUpload(e)}
          />
          {/* <img
            src={mediaFile}
            alt={"No Image"}
            className="displayImageUploaded"
          /> */}
          <button
            className="addBlogButton"
            onClick={async () => {
              addBlogItemToDB();
              setAddBlogModalOpen(false);
            }}
          >Add Blog</button>
        </div>
      </div>
    </Modal>
  );
};

export default withAuthenticator(AddBlogModal);
