app.controller('newController', ['$scope', 'FriendsFactory', '$location', function($scope, FriendsFactory, $location) {
    var index = function() {
        FriendsFactory.index(function(data) {
            console.log(data);
            $scope.friends = data;
            console.log("data from index controller:", data);
        });
    };
    index();
    
    $scope.create = function() {
        console.log("********************  controller trying to create  ********************");
        FriendsFactory.create($scope.newFriend, function(data) { 
            console.log("new friend data from new controller:", data);
            $scope.friends = data;
        });
        index();
        $location.url('/friends');
    }
}]);