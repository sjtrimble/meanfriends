app.controller('mainController', ['$scope', 'FriendsFactory', '$location', function($scope, FriendsFactory, $location) {

    console.log("mainController loaded")

    var index = function() {
        FriendsFactory.index(function(data) {
            // console.log(data);
            $scope.friends = data;
            // console.log("data from index controller:", data);
        });
    };
    index();

    $scope.delete = function(id) {
        console.log("********************  controller trying to delete  ********************");
        console.log("friend id: ", id);

        FriendsFactory.delete(id, function(data) { 
            console.log("callback in factory")
            // console.log("friend data from new controller:", data);
            index();
        });
        $location.url('/friends');
    }
    
}]);