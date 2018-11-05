import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../../action/actions';
import Contact from '../presentational/Contact.jsx';


const mapStateToProps = store => ({
  contacts: store.addRemove.contactArray
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  remove: (ind)=>dispatch(actions.removeContact(ind))

});

class ContactContainer extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      let returnArr = [];
      this.props.contacts.forEach((cur,ind)=>{
        console.log(cur)
        returnArr.push(<Contact ind = {ind} remove={this.props.remove} key={ind} name={cur.name} loyalty={cur.loyalty} connection={cur.connection} favor={cur.favor}/>)
      
      });

      return (
        <div className='WeaponsContainer'>
        <p className = 'header'><h4>Contacts</h4></p>
          {returnArr}
        </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer);