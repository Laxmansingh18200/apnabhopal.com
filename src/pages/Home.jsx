import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        {" "}
        <a href="">Apna Bhopal</a>
      </p>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/subscribe">Subscribe</Link>
        </li>
        <li>
          <Link to="/sigleblog">SigleBlog</Link>
        </li>
        <li>
          <Link to="/allblog">AllBlog</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/forgotpassword">ForgotPassword</Link>
        </li>
        <li>
          <Link to="/updatepassword">UpdatePassword</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
