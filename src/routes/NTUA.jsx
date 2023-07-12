import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NtuaPost from "../components/Blog/NtuaPost";

function NTUA() {
  const { slug } = useParams();

  return (
    <div  className="mt-20 mb-20 mx-5">
      <NtuaPost post_md={slug} />
    </div>
  );
}

export default NTUA;
