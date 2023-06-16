import React, { useEffect, useState } from "react";
import "./ProductStyles.css";
import Slider from "react-slick";
import Navbar from "../navbar/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
  const [productDoc, setProductDoc] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));

        const fetchedData = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push(doc.data());
        });

        setProductDoc(fetchedData);
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
    <div className="product">
      <Navbar />
      <div className="container">
        <div className="content"><h2>PRODUCT</h2></div>
        <Slider {...settings}>
          {productDoc.map((product) => (
            <div key={product.id}>
                <div class="main">
                  <img src={product.img} alt="" />
                </div>
                <div class="desc">
                  <h1>{product.product}</h1>
                  <p>{product.description}</p>
                  <h3>$ {product.price}</h3>
                </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
