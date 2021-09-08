import React, {useEffect} from 'react';
import './App.css';
import WebFont from "webfontloader";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { useDispatch } from "react-redux";
import Navigation from './Navigation/Navigation';
import { API } from "aws-amplify";
import { blogsByDate } from "./graphql/queries";
import SingleArticleScreen from './screens/SingleArticleScreen/SingleArticleScreen';



//npm install webfontloader

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat", "Open_Sans", "Roboto", "Lato", "Lora", "Tinos", "Esteban"],
      },
    });
  }, []);

  // useEffect(() => {
  //   fetchBlogs()
  // }, [])

  // async function fetchBlogs() {
  //   const apiData = await API.graphql({ query: blogsByDate, variables: { type: "Blog", sortDirection: "ASC" }})
  //   .catch((e) => console.log(e))
  //   dispatch({ type: "Set Blog Array", array: apiData.data.blogsByDate.items });
  // }

  return (
    <div className="App">
      <Navigation />
      {/* <SingleArticleScreen /> */}
    </div>
  );
}

export default App;
