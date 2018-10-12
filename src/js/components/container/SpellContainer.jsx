import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Spell from '../presentational/Spell.jsx';


const mapStateToProps = store => ({
  spells: store.addRemove.spellArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeSpell(ind))

});

class SpellContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.spells.forEach((cur,ind)=>{
        returnArr.push(<Spell ind = {ind} remove={this.props.remove} key={ind} spell={cur.spell} type={cur.type} range={cur.range} duration={cur.duration} drain={cur.drain}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Spells</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpellContainer);