import React, { Component } from "react";
import AddArmor from './AddArmor.jsx'
import AddAugmentation from './AddAugmentation.jsx'
import AddContact from './AddContact.jsx'
import AddCyberdeck from './AddCyberdeck.jsx'
import AddGear from './AddGear.jsx'
import AddMeleeWeapon from './AddMeleeWeapon.jsx'
import AddPower from './AddPower.jsx'
import AddQuality from './AddQuality.jsx'
import AddRangedWeapon from './AddRangedWeapon.jsx'
import AddSkill from './AddSkill.jsx'
import AddSpell from './AddSpell.jsx'
import AddVehicle from './AddVehicle.jsx'






class AddBox extends Component {
    constructor(props) {
      super(props);
  
    }


    render(){
        if(this.props.box === 'meleeWeapon'){
        return <AddMeleeWeapon addAction={this.props.adds.meleeWeapon}/>
        } else if (this.props.box === 'rangedWeapon'){
        return <AddRangedWeapon addAction={this.props.adds.rangedWeapon}/>
        }
    }  
};

export default AddBox;