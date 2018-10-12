const mongoose = require('mongoose');
const URL = 'mongodb://sweatshop:cosplayissuffering1@ds129762.mlab.com:29762/costplay';

mongoose.connect(URL,()=>{
    console.log('Connected to MLab');
});

const TableSchema = new mongoose.Schema({
    itemName:{type: Array},
    quantity:{type: Array},
    costperunit: {type: Array},
    userId:{type: Number}
});

module.exports = mongoose.model('Table', TableSchema);