app.controller('editController', ['$scope', 'FriendsFactory', '$routeParams', '$location', function($scope, FriendsFactory, $routeParams, $location) {

    console.log("editController loaded");

    FriendsFactory.show($routeParams.id, function(data) {
        console.log("editController show callback");
        $scope.friend = data;
    });

    $scope.update = function() {
        console.log("********** calling update controller function **********");
        console.log("$scope.friend: --------> ", $scope.friend);
        FriendsFactory.update($scope.friend, function(returnedData) {
            console.log('************ callback in controller updating friend with server data');
            $scope.friend = returnedData;
            $location.url('/friends');
        });
    };
}]);