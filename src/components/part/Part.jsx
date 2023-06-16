import React, { useEffect, useState } from "react";
import "./PartStyles.css";
import Slider from "react-slick";
import Navbar from "../navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Part = () => {
  const [partDoc, setPartDoc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "parts"));

        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push(doc.data());
        });

        setPartDoc(fetchedData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow-next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow-prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="part">
      <Navbar />
      <div className="container">
        <div className="content"><h2>PART</h2></div>
        <Slider {...settings}>
          {partDoc.map((part) => (
            <div key={part.id}>
                <div class="main">
                  <img src={part.img} alt="" />
                </div>
                <div class="desc">
                  <h1>{part.part}</h1>
                  <p>{part.description}</p>
                  <h3>$ {part.price}</h3>
                </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Part;
