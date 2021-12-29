import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VideoBg from "reactjs-videobg";
import video from "./assets/video.mp4";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <VideoBg videoClass='video'>
      <VideoBg.Source src={video} type="video/mp4" />
    </VideoBg>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
