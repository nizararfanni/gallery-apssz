import React from "react";
import HeadersCollection from "../components/Collection/HeadersCollection";
import BodyCollection from "../components/Collection/BodyCollection";
import Footer from "../components/Footer";

const Collection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeadersCollection></HeadersCollection>
      <BodyCollection></BodyCollection>
      <Footer></Footer>
    </div>
  );
};

export default Collection;
