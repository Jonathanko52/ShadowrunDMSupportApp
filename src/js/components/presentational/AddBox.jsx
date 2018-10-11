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
        } else if (this.props.box === 'armor'){
          return <AddArmor addAction={this.props.adds.armor}/>
        } else if (this.props.box === 'augmentation'){
          return <AddAugmentation addAction={this.props.adds.agumentation}/>
        } else if (this.props.box === 'contact'){
          return <AddContact addAction={this.props.adds.contact}/>
        } else if (this.props.box === 'cyberdeck'){
          return <AddCyberdeck addAction={this.props.adds.cyberdeck}/>
        } else if (this.props.box === 'gear'){
          return <AddGear addAction={this.props.adds.gear}/>
        }else if (this.props.box === 'power'){
          return <AddPower addAction={this.props.adds.power}/>
        }else if (this.props.box === 'quality'){
          return <AddQuality addAction={this.props.adds.quality}/>
        }else if (this.props.box === 'skill'){
          return <AddSkill addAction={this.props.adds.skill}/>
        }else if (this.props.box === 'spell'){
          return <AddSpell addAction={this.props.adds.spell}/>
        }else if (this.props.box === 'rangedWeapon'){
          return <AddVehicle addAction={this.props.adds.vehicle}/>
        }
        
    }  
};

export default AddBox;