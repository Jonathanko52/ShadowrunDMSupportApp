import * as types from '../action/actionTypes.js'

const initialState = {
  name:'Captain Violence',
  metatype:'',
  ethnicity:'',
  age:'',
  sex:'',
  height:'',
  weight:'',
  streetCred:'',
  notoriety:'',
  publicAwareness:'',
  karma:'',
  totalKarma:'',
  misc:''

}

const personalDataReducers = (state=initialState, action)=>{
  
  switch(action.type){
    // case types.SUBMIT_TEXT:
    //   let boxVal = document.getElementById(action.payload).value;
    // return {
    //   ...state,
    //   [action.payload]:boxVal
    // };
//////////////////////
    case types.SAVE_PAGE:
        console.log(state)
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
        misc: miscVal
      }

    default:
    return state;
  }

}

export default personalDataReducers