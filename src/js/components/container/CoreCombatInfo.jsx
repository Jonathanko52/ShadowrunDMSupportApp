import React from "react";
import { connect } from 'react-redux';
import * as actions from './../../../action/actions';
import TextBox from "../presentational/TextBox.jsx"

const mapStateToProps = store => ( {
    personalData:store.personalData,
    }

);
  
  const mapDispatchToProps = dispatch => ({

  });



class CoreCombatInfo extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {

      return (
        <div className='Core Combat Info'>
          <p className = 'header'><b>Ids / Lifestyles / Currencies</b></p>
          <TextBox name = 'Primary Armor'
                   boxSize = '10'
                   boxProps = 'personalDataText'
                   storeVal = 'name'
                   curVal = {this.props.personalData.name}
                   submitText = {this.props.submitText}/>

        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoreCombatInfo);