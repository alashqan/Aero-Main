import React from "react";
import "./Popup.css";
// import {AiFillCloseCircle} from 'react-icons/ai'

export default function Popup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="button-62 close-btn" onClick={() => props.setTrigger(false)}>
          Close

        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}