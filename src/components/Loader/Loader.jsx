import React from "react";
import Loader from "react-loader-spinner";

export default class Spiner extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: "40%", marginTop: "20px" }}>
        <Loader
          type="TailSpin"
          color="#ff0d00"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
