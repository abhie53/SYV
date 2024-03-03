import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.avif";
// import Banner2 from "../images/banner2.webp"
import Banner3 from "../images/banner3.avif"
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <div className="homeContent" >
            <h1><strong>SYV Biotech</strong> </h1>
            <p >Health is fundamental to our lives. That’s why we work to make medicines that give people a chance at health. We’re a medicine company turning science into healing.</p>
          </div>
          <Link to="/">
            <button>View More</button>
          </Link>
          
        </div>
      </div>
      <div className="headerContainer2" >
        <div >
          <h1>Another Way to Get Select SYV Medicines</h1>
          <p>Your health is our priority.</p>
          <p>To build a healthier world based on the foundation of our advanced and effective drugs and medications and to fulfil the unmet medical needs of quality medicines across different markets at an affordable price.</p>
          <Link to="/Services">
            <button>Get services</button>
          </Link>
        </div>
        <div >
        <img src={Banner3} alt="bannerImage" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
