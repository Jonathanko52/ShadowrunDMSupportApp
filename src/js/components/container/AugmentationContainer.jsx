import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Augmentations from '../presentational/Augmentations.jsx';


const mapStateToProps = store => ({
  augmentations: store.addRemove.augmentationArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeAugmentation(ind))

});

class AugmentationContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.augmentations.forEach((cur,ind)=>{
        returnArr.push(<Augmentations ind = {ind} remove={this.props.remove} key={ind} augmentation={cur.augmentation} rating={cur.rating} notes={cur.notes} essence={cur.essence} />)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><b>Augmentations</b></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AugmentationContainer);