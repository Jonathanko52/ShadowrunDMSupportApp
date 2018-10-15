const mongoose = require('mongoose');
const URL = 'mongodb://shadowrun:master1@ds129762.mlab.com:29762/costplay';

mongoose.connect(URL,()=>{
    console.log('Connected to MLab');
});

const charSheetSchema = new mongoose.Schema({
    trackingNumber:{type: Number},
    app:{type: Array},
    addRemove:{type: Array},
    personalData:{type: Array},
});

module.exports = mongoose.model('Table', charSheetSchema);