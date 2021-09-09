import React, { useState } from "react";
import "./NewBlogScreen.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddBlogModal from "./AddBlogModal";

const NewBlogScreen = () => {
  //Variables for the add blog modal
  const [addBlogModalOpen, setAddBlogModalOpen] = useState(false);
  const [addBlogModalRefresh, setAddBlogModalRefresh] = useState(false);

  return (
    <div>
      <Header />
      <button
        className="addBlogButton"
        onClick={() => {
          setAddBlogModalOpen(true);
          setAddBlogModalRefresh(!addBlogModalRefresh);
        }}
      >
        Add Listing
      </button>
      <AddBlogModal open={addBlogModalOpen} refresh={addBlogModalRefresh} />
      <Footer />
    </div>
  );
};

export default NewBlogScreen;
