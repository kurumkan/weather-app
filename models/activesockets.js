var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var activeSocketsSchema = new Schema({
  id: { type: String },
  socketId: { type: String, unique:true },
  username: { type: String, unique:true },
});

module.exports = mongoose.model('activeSockets', activeSocketsSchema);