import React, { Component } from "react";


class AddBox extends Component {
    constructor(props) {
      super(props);
  
    }
    componentWillReceiveProps(){
    console.log(document.getElementById('BoxSelect').value)
    return <div>TEST</div>
    }

    render(){
     return <div>AddBox</div>
    }
};

export default AddBox;