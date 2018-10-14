import * as types from '../action/actionTypes.js'

const initialState = {
  name:'',
  metatype:'',
  ethnicity:'',
  age:'0',
  sex:'',
  height:'0',
  weight:'0',
  streetCred:'0',
  notoriety:'0',
  publicAwareness:'0',
  karma:'0',
  totalKarma:'0',
  misc:'',
  body:'0',
  agility:'0',
  reaction:'0',
  strength:'0',
  willpower:'0',
  logic:'0',
  intuition:'0',
  charisma:'0',
  edge:'0',
  essence:'0',
  magic:'0',
  initiative:'0',
  matrixInitiative:'0',
  astralInitiative:'0',
  composure:'0',
  judgeIntentions:'0',
  memory:'0',
  lift:'0',
  movement:'0',


}

const personalDataReducers = (state=initialState, action)=>{
  
  switch(action.type){

//////////////////////
    case types.SAVE_PERSONAL:
      let nameVal = document.getElementById('name').value
      let metatypeVal = document.getElementById('metatype').value 
      let ethnicityVal = document.getElementById('ethnicity').value
      let ageVal = document.getElementById('age').value
      let sexVal = document.getElementById('sex').value
      let heightVal = document.getElementById('height').value
      let weightVal = document.getElementById('weight').value
      let streetCredVal = document.getElementById('streetCred').value
      let notorietyVal = document.getElementById('notoriety').value
      let publicAwarenessVal = document.getElementById('publicAwareness').value
      let karmaVal = document.getElementById('karma').value
      let totalKarmaVal = document.getElementById('totalKarma').value
      let miscVal = document.getElementById('misc').value
      let bodyVal = document.getElementById('body').value
      let agilityVal = document.getElementById('agility').value
      let reactionVal = document.getElementById('reaction').value
      let strengthVal = document.getElementById('strength').value
      let willpowerVal = document.getElementById('willpower').value
      let logicVal = document.getElementById('logic').value
      let intuitionVal = document.getElementById('intuition').value
      let charismaVal = document.getElementById('charisma').value
      let edgeVal = document.getElementById('edge').value
      let essenceVal = document.getElementById('essence').value 
      let magicVal = document.getElementById('magic').value
      let initiativeVal = document.getElementById('initiative').value      
      let matrixInitiativeVal = document.getElementById('matrixInitiative').value
      let astralInitiativeVal = document.getElementById('astralInitiative').value
      let composureVal = document.getElementById('composure').value
      let judgeIntentionsVal = document.getElementById('judgeIntentions').value
      let memoryVal = document.getElementById('memory').value
      let liftVal = document.getElementById('lift').value
      let movementVal = document.getElementById('movement').value

      return{
        name: nameVal,
        metaType: metatypeVal,
        ethnicity: ethnicityVal,
        age: ageVal,
        sex: sexVal,
        height: heightVal,
        weight: weightVal,
        streetCred: streetCredVal,
        notoriety: notorietyVal,
        publicAwareness: publicAwarenessVal,
        karma: karmaVal,
        totalKarma: totalKarmaVal,
        misc: miscVal,
        body:bodyVal,
        agility:agilityVal,
        reaction:reactionVal,
        strength:strengthVal,
        willpower:willpowerVal,
        logic:logicVal,
        intuition:intuitionVal,
        charisma:charismaVal,
        edge:edgeVal,
        essence:essenceVal,
        magic:magicVal,
        initiative:initiativeVal,
        matrixInitiative:matrixInitiativeVal,
        astralInitiative:astralInitiativeVal,
        composure:composureVal,
        judgeIntentions:judgeIntentionsVal,
        memory:memoryVal,
        lift:liftVal,
        movement:movementVal,

      }

    default:
    return state;
  }

}

export default personalDataReducers