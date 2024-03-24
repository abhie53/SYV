import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import BgHome from "../images/bg-home.jpg"
import Banner3 from "../images/banner3.avif"
import "../styles/HomeStyles.css";
import InnoBanner from "../images/innovation.jpg"
import CareerBanner from "../images/career.jpeg"
import QuantityBanner from "../images/quantity.jpg"
import RsponsibilityBanner from "../images/responsibity.jpeg"

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${BgHome})` }}>
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

      {/* component two */}
      <div className="headerContainer2" >
        <div className="child ">
          <img src={Banner3} alt="bannerImage" style={{ height: 400 }} />
        </div>
        <div className="child">
          <h1>Another Way to Get Select SYV Medicines</h1>
          <p>Your health is our priority.</p>
          <p>To build a healthier world based on the foundation of our advanced and effective drugs and medications and to fulfil the unmet medical needs of quality medicines across different markets at an affordable price.</p>
          <Link to="/Services">
            <button>Get services</button>
          </Link>
        </div>
      </div>

      {/* Find more. */}
      <h1 style={{color:"orange"}}>FIND MORE...</h1>

      <div className="findMoreContainer">
        <div className="moreChild">
          <div>
            <img src={InnoBanner} alt="bannerImage" style={{ height: 250 }} />
          </div>
          <h1>Innovation</h1>
          <p>Science is at the heart of Sun Pharma. Our scientists work closely with doctors, patients, and business development teams, to generate innovative concepts and ideas to harness market needs and synergies across therapeutic areas.</p>
          <Link to="/Services">
            <button>READ MORE</button>
          </Link>
        </div>

        <div className="moreChild">
          <div>
            <img src={QuantityBanner} alt="bannerImage" style={{ height: 250 }} />
          </div>
          <h1>Quality</h1>
          <p>Our vision is to globalize, harmonize and simplify GxP processes to achieve a sustainable quality culture.</p>
          <Link to="/Services">
            <button>READ MORE</button>
          </Link>
        </div>

        <div className="moreChild">
          <div>
            <img src={CareerBanner} alt="bannerImage" style={{ height: 250 }} />
          </div>
          <h1>Careers</h1>
          <p>We hire exceptionally talented individuals, and ensure they are nurtured professionally. Our multi-dimensional work environment offers high growth opportunities through challenging roles with clear responsibilities.</p>
          <Link to="/Services">
            <button>READ MORE</button>
          </Link>
        </div>

        <div className="moreChild">
          <div>
            <img src={RsponsibilityBanner} alt="bannerImage" style={{ height: 250 }} />
          </div>
          <h1>Responsibility</h1>
          <p>Our CSR efforts are focused on serving and helping needy and underprivileged communities. Our priority areas include: health, education, drinking water and sanitation.</p>
          <Link to="/Services">
            <button>READ MORE</button>
          </Link>
        </div>


      </div>
    </Layout>
  );
};

export default Home;
