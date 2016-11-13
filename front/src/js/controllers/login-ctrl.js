angular.module('busingApp')
    .controller('LoginCtrl', ['$scope', '$cookieStore', LoginCtrl]);

function LoginCtrl($scope) {
    /**
     * Sidebar Toggle & Cookie Control
     */
    var mobileView = 992;

    $scope.getWidth = function() {
        return window.innerWidth;
    };

    window.onresize = function() {
        $scope.$apply();
    };

    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
}