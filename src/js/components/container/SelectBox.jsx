import React, { Component } from "react";
import { connect } from 'react-redux';
import AddBox from './../presentational/AddBox.jsx'


const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class SelectBox extends Component {
    constructor() {
      super();
  
    }
    componentDidMount(){
      let blah = document.getElementById('BoxSelect').value
      console.log(blah)
    }
  
    render() {
      let blah = 'rangedWeapon'
      console.log(blah)
      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Select Box</b></p>
        <select id="BoxSelect">
          <option value="meleeWeapon">Melee Weapon</option>
          <option value="rangedWeapon">Ranged Weapon</option>
        </select>
        <AddBox box={blah}></AddBox>
        </div>
      );
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);