import React, { Component } from "react";
import Input from "../presentational/Input.jsx";
import PersonalData from "./PersonalData.jsx"
import Attributes from "./Attributes.jsx"

class MainContainer extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <p className='test'> Thingy</p>
        <PersonalData />
        <Attributes />
      </div>
    );
  }
}

export default MainContainer;