
import "../App.css";
import MNavbar from "./MNavbar";
import GeneratedText from "./GeneratedText";
import VideoPlayer from "./VideoPlayer";
import React from "react";
function Result() {

    const videoUrls = [
        "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
        "https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4",
      ];

    const explain = "This is the generated outcome"

  const username = "UserName";

  return (
    <>
        <MNavbar username={username}/>
      <div className="text-black body_Center">
        <div className="flex">
         <VideoPlayer videoUrls={videoUrls} />
        </div>
        <div className="items-center">
         <GeneratedText text={explain} />
        </div>
      </div>
    </>

  );
}

export default Result;



