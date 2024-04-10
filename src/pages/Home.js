import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import BgHome from "../images/bg-home.jpg"
import Banner3 from "../images/banner3.avif"
import InnoBanner from "../images/innovation.jpg"
import CareerBanner from "../images/career.jpeg"
import QuantityBanner from "../images/quantity.jpg"
import RsponsibilityBanner from "../images/responsibity.jpeg"

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${BgHome})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "60vh"  }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="homeContent">
                <h1><strong>SYV Biotech</strong> </h1>
                <p>Health is fundamental to our lives. That’s why we work to make medicines that give people a chance at health. We’re a medicine company turning science into healing.</p>
                <Link to="/about">
                  <button className="btn btn-primary">View More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      {/* component two */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={Banner3} alt="bannerImage" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>Another Way to Get Select SYV Medicines</h1>
            <p>Your health is our priority.</p>
            <p>To build a healthier world based on the foundation of our advanced and effective drugs and medications and to fulfill the unmet medical needs of quality medicines across different markets at an affordable price.</p>
            <Link to="/services">
              <button className="btn btn-primary">Get services</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Find more. */}
      <h1 className="text-center py-5" style={{ color: "orange" }}>FIND MORE...</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img src={InnoBanner} alt="bannerImage" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Innovation</h5>
                <p className="card-text">Science is at the heart of SVM Biotech. Our scientists work closely with doctors, patients, and business development teams, to generate innovative concepts and ideas to harness market needs and synergies across therapeutic areas.</p>
                <Link to="/services" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img src={QuantityBanner} alt="bannerImage" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Quality</h5>
                <p className="card-text">Our vision is to globalize, harmonize, and simplify GxP processes to achieve a sustainable quality culture.</p>
                <Link to="/services" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img src={CareerBanner} alt="bannerImage" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Careers</h5>
                <p className="card-text">We hire exceptionally talented individuals and ensure they are nurtured professionally. Our multi-dimensional work environment offers high growth opportunities through challenging roles with clear responsibilities.</p>
                <Link to="/careers" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 mb-4">
            <div className="card">
              <img src={RsponsibilityBanner} alt="bannerImage" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Responsibility</h5>
                <p className="card-text">Our CSR efforts are focused on serving and helping needy and underprivileged communities. Our priority areas include health, education, drinking water, and sanitation.</p>
                <Link to="/responsibility" className="btn btn-primary">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
