import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => (
  <div>
    <h2>Home page</h2>
    <NavLink to="/contact">Contacts</NavLink>
    <br></br>
    <NavLink to="/gallery">Gallery</NavLink>
  </div>
);

export default Home;
