import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/home1.webp";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Grow your business with <strong>SYV Biotech</strong> </h1>
          <p>Creating better health for people and a brighter future for the world is our purpose.</p>
          <Link to="/menu">
            <button>Get Sevice</button>
          </Link>
        </div>
      </div>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Grow your business with <strong>SYV Biotech</strong> </h1>
          <p>Creating better health for people and a brighter future for the world is our purpose.</p>
          <Link to="/menu">
            <button>Get Sevice</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
