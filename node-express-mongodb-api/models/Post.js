 const mongoose = require('mongoose');

 const SchemaOfPost = mongoose.Schema({
     title: {
         type: String,
         require: true
     },
     description:  {
        type: String,
        require: true
    },
     data:  {
        type: Date,
        default: Date.now
    }
 })

 module.exports = mongoose.model('Posts', SchemaOfPost)