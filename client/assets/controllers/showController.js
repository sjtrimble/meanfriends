app.controller('showController', ['$scope', 'FriendsFactory', '$location', '$routeParams', function($scope, FriendsFactory, $location, $routeParams) {

    console.log("reaching showController");

    FriendsFactory.show($routeParams.id, function(data) {
        // console.log($routeParams.id);
        // console.log("********************  controller callback  ********************");
        // console.log("data:", data);
        $scope.friend = data;
        // console.log("friend:", $scope.friend);
    });

}]);