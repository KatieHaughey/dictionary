import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a href="{props.phonetics.audio}" target="_blank">
        Listen
      </a>
      {props.phonetics.text}
    </div>
  );
}
