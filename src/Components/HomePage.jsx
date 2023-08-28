import { useState } from "react";
import "../App.css";
import React from "react";


import UploadFile from "./UploadFile";
import DataInput from "./DataInput";
import MNavbar from "./MNavbar";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const username = "UserName";
  const navgate = useNavigate();
  const gate = () => {
    navgate("/result");
  };

  return (
    <div>
      <MNavbar username={username} />
      <div className="text-black body_Center">
        <div className="flex">
          <UploadFile />
          <DataInput />
        </div>
        <div className="items-center">
          <button
            id="upload_data"
            onClick={gate}
            className="btn hover:bg-blue-200 focus:ring-blue-800"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
