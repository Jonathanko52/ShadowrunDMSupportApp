import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';
import TextBox from "../presentational/TextBox.jsx"
import RangedWeapon from "../presentational/RangedWeapon.jsx"

const mapStateToProps = store => ( {
    personalData:store.personalData,
    }

);
  
const mapDispatchToProps = dispatch => ({
  remove: (ind)=>dispatch(actions.removeCyberdeck(ind))

});



class CoreCombatInfo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className='Core Combat Info'>
          <p className = 'header'><b>Ids / Lifestyles / Currencies</b></p>

        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreCombatInfo);