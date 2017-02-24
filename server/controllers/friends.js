var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = {

    index: function(req, res) {
        Friend.find({}, function(err, allFriends) {
            if(err) {
                console.log("show error server side");
            } else {
                console.log("found friends successfuly -> server side")
                // console.log("allFriends index data:", allFriends)
                res.json(allFriends);
            }
        });
    },

    create: function(req, res) {
        var newFriend = new Friend({firstName: req.body.firstName, lastName: req.body.lastName, birthday: req.body.birthday});
        newFriend.save(function(err, addedFriend) {
            if (err) {
                console.log("error in create friend");
            } else {
                console.log("new friend created")
            };
        });
        res.json();
    },

    update: function(req, res) {
        console.log("********* server: udpate *************");
        // console.log("body: ", req.body);
        Friend.findOne({_id: req.params.id}, function(err, foundFriend){
            if (err) {
                console.log("error in finding friend from show")
                res.json(err);
            } else {
                // console.log("found the following friend: ", foundFriend);
                // console.log(req.body);
                foundFriend.firstName = req.body.firstName
                foundFriend.lastName = req.body.lastName
                foundFriend.birthday = req.body.birthday

                foundFriend.save(function (error, data) {
                    if (error) {
                        console.log(error);
                        res.json(error);
                    } else {
                        // console.log("data from save function on backend: ", data)
                        console.log("updated found friend: -->", foundFriend)
                        res.json(foundFriend);
                    }
                });
            };
        });
    },

    delete: function(req, res) {
        console.log("trying to delete on server controller");
        Friend.findOne({_id: req.params.id}, function(err, friend){
            if(err) {
                console.log("Error: Friend info not found");
                res.json(err);
            } else {
                console.log("Friend found!", friend)
                Friend.remove({_id: req.params.id}, function(err, friend){
                    if(err) {
                    console.log("Error: could not remove friend");
                    res.json(err);
                    } else {
                    console.log("friend deleted!")
                    res.json(friend);
                    }
                });
            }
        });
    },

    show: function(req, res) {
        console.log("server running show functions")
        Friend.findOne({_id: req.params.id}, function(err, data){
            if (err) {
                console.log("error in finding friend from show")
                res.json(err);
            } else {
                console.log("friend fround from show:", data)
                res.json(data);
            }
        });
    }
}