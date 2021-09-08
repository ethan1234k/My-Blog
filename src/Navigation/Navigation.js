import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import BlogScreen from '../screens/BlogScreen/BlogScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Navigation = () => {
  return (
    <Router>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/blog">
        <BlogScreen />
      </Route>
      {/* <Route exact path="/">
        <LandingPage />
      </Route>
      <Route path={"/about"}>
        <LandingPageAbout />
      </Route>
      <Route path={"/FAQ"}>
        <LandingPageFAQ />
      </Route>
      <Route exact path={'/blog'}>
        <LandingPageBlog />
      </Route>
      <Route path={"/blog/article"}>
        <BlogArticleScreen />
      </Route>
      <Route path={"/waitlist"}>
        <JoinWaitlistScreen />
      </Route> */}
    </Router>
  );
};

export default Navigation;
