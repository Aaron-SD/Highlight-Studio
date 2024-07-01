import { useState } from "react";
import Brands from "./Brands";
import Carousel from "./Carousel";
import Testimonials from "./Testimonials";
import "./home.css";
import { IoSearchOutline } from "react-icons/io5";
function Home() {
  const [SearchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="hero-container">
        <div className="search-input">
          <input
            type="text"
            value={SearchInput}
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <IoSearchOutline size={20} />
        </div>
        <div className="hero-content">
          <h1>
            Welcome To The <span className="special-font">Luxury</span> Of
            Lights
          </h1>

          <Carousel />
        </div>
      </div>
      {/* <div className="best-selling"></div> */}
      <Brands />
      <div className="milestone-container">
        <p>
          After years of dedication and creativity, our team successfully
          achieved a significant milestone in the light decor business,
          solidifying our position as industry leaders and paving the way for
          even greater success ahead.
        </p>
        <br />
        <p>
          With the culmination of tireless effort, ingenious design, and
          unwavering commitment, we have reached a monumental milestone in our
          light decor business, propelling us forward as pioneers in the
          industry and setting a new standard of excellence for
        </p>

        <div style={{ marginTop: "40px", width: "70%" }}>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <Testimonials />
      <div className="staggered-container">
        <img className='item1' src="/layered-images/grid-img1.png"/>
        <img className='item2' src="/layered-images/grid-img2.png"/>
        <img className='item3' src="/layered-images/grid-img3.png"/>
        <img className='item4' src="/layered-images/grid-img4.png"/>
      </div>
    </>
  );
}

export default Home;
