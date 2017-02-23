// console.log('friend models loading');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    birthday: {type: Date, required: true}
});

var Friend = mongoose.model('Friend', FriendSchema);