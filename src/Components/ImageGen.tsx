import { useState } from "react";
import "../App.css";
import React from "react";
import MNavbar from "./MNavbar";
import { Discription } from "./Discription";
import { Grid, Menu } from "@mui/material";

function ImageGen() {
  const username = "User";
  const image = ["Image1", "Image2", "Image3"]
  

  return (
    <div>
      <MNavbar username={username} />
      <Grid margin={"auto"}>
        <ul>
            <li> <Discription img={image[0]} /> </li>
            <li> <Discription img={image[1]} /> </li>
            <li> <Discription img={image[2]} /> </li>
        </ul>
    </Grid>

    </div>
  );
}

export default ImageGen;
