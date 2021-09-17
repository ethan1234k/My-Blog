import React from "react";
import "./PrivacyScreen.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const PrivacyScreen = () => {
  return (
    <div className="privacyScreenContainer">
      <Header />
      <div className="privacyScreenTextContainer">
        <h1>Privacy</h1>
        <h2>Use of Cookies</h2>
        <p>
          A cookie is a file containing an identifier (a string of letters and
          numbers) that is sent by a web server to a web browser and is stored
          by the browser. The identifier is then sent back to the server each
          time the browser requests a page from the server. Cookies may be
          either “persistent” cookies or “session” cookies: a persistent cookie
          will be stored by a web browser and will remain valid until its set
          expiry date, unless deleted by the user before the expiry date; a
          session cookie, on the other hand, will expire at the end of the user
          session, when the web browser is closed. Cookies do not typically
          contain any information that personally identifies a user, but
          personal information that we store about you may be linked to the
          information stored in and obtained from cookies.
        </p>
        <h2>We use cookies for the following purposes:</h2>
        <p>
          Website Analytics – we use Google Analytics to help us to analyze the
          use and performance of our website and services. Google Analytics
          gathers information about the website use by means of cookies. The
          information gathered is used to create reports about the use of our
          website. Google’s privacy policy is available at:
        </p>
        <Link
          style={{ marginBottom: 10 }}
          to={{ pathname: "https://www.google.com/policies/privacy" }}
          target="_blank"
        >
          https://www.google.com/policies/privacy/
        </Link>
        <h2>Changes to Our Privacy Policy</h2>
        <p>
          We reserve the right to change our privacy policy at any given time.
          We may revise and update our Privacy Policy if our practices or
          technology changes, or as we add new services. By using our site and
          services, you are consenting to our most recent privacy policy.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyScreen;
