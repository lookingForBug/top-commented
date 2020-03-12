import React from "react";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className="loaderWrapper">
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
