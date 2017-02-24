app.factory('FriendsFactory', ['$http', function($http) {
    console.log('FriendsFactory working');

    var factory = {};

    factory.index = function(callback) {
        $http.get('/friends')
        .then(function(returned_data) {
            // console.log(returned_data.data);
            callback(returned_data.data);
        });
    };

    factory.show = function(id, callback) {
        // console.log("********************  factory trying to show  ********************");
        // console.log("id in factory passed from controller:", id);
        var path = 'friends/show/' + id
        // console.log("****** path:", path, "*********");
        $http.get(path)
        .then(function(data) {
            data.data.birthday = data.data.birthday.substr(0,10);
            if (typeof(callback) == 'function') {
                // console.log("data.data back from server: ", data.data)
                callback(data.data);
            };
        });
    };

    factory.create = function(newfriend, callback) {
        // console.log("********************  factory trying to create  ********************");
        $http.post('/friends', newfriend)
        .then(function(returned_data) {
            if (typeof(callback) == 'function') {
                callback(returned_data.data);
            };
        });
    };

    factory.update = function(friend, callback) {
        console.log("************** trying to update - factory function getting ready to go to server route **************");
        var path = 'friends/edit/' + friend._id
        console.log("path for updating: ", path);
        console.log("friend in factory received from edit controller: ", friend);
        $http.put(path, friend)
        .then(function(res) {
            console.log("part 2 of update request")
            if (typeof(callback) == 'function') {
                console.log("********* returned data inside of part 2: ", res.data)
                callback(res.data)
            };
        });
    };

    factory.delete = function(id, callback) {
        console.log("id: ---> ", id);
        var path = '/friends/delete/' + id
        $http.delete(path)
        .then(function(res) {
            if (typeof(callback) == 'function') {
                callback(res.data)
            }
        })
    }

    return factory;

}]);